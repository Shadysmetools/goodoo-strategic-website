import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export interface DocumentMeta {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  date: string;
  size: string;
  url: string;
}

const DATA_PATH = path.join(process.cwd(), 'data', 'documents.json');
const UPLOADS_PATH = path.join(process.cwd(), 'public', 'uploads');

function loadFromFile(): DocumentMeta[] {
  try {
    if (fs.existsSync(DATA_PATH)) {
      const raw = fs.readFileSync(DATA_PATH, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load documents:', e);
  }
  return [];
}

function saveToFile(contents: DocumentMeta[]) {
  try {
    const dir = path.dirname(DATA_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_PATH, JSON.stringify(contents, null, 2), 'utf-8');
  } catch (e) {
    console.error('Failed to save documents:', e);
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const contents = loadFromFile();
    if (id) {
      const doc = contents.find((d) => d.id === id);
      if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json(doc);
    }
    return NextResponse.json(contents);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

    // Only allow PDF and DOC/DOCX
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Only PDF and DOC/DOCX files are allowed' }, { status: 400 });
    }

    // Save file to uploads
    if (!fs.existsSync(UPLOADS_PATH)) fs.mkdirSync(UPLOADS_PATH, { recursive: true });
    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
    const filePath = path.join(UPLOADS_PATH, filename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, buffer);

    const url = `/uploads/${filename}`;
    const size = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
    const type = file.type.includes('pdf') ? 'PDF' : 'DOC';

    const contents = loadFromFile();
    const newDoc: DocumentMeta = {
      id: Date.now().toString(),
      title: formData.get('title')?.toString() || 'Untitled',
      description: formData.get('description')?.toString() || '',
      category: formData.get('category')?.toString() || 'Uncategorized',
      type,
      date: new Date().toISOString().split('T')[0],
      size,
      url,
    };
    contents.push(newDoc);
    saveToFile(contents);
    return NextResponse.json(newDoc, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    const contents = loadFromFile();
    const idx = contents.findIndex((d) => d.id === id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    contents[idx] = { ...contents[idx], ...updates };
    saveToFile(contents);
    return NextResponse.json(contents[idx]);
  } catch (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    const contents = loadFromFile();
    const idx = contents.findIndex((d) => d.id === id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    contents.splice(idx, 1);
    saveToFile(contents);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
} 