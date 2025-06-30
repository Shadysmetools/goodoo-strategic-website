import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { HTMLContent } from '../../../../types/htmlContent';

const DATA_PATH = path.join(process.cwd(), 'data', 'htmlContent.json');

export async function GET(request: NextRequest, { params }: { params: { token: string } }) {
  try {
    const contents: HTMLContent[] = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    const content = contents.find(c => c.shareToken === params.token && c.isPublic);
    if (!content) {
      return NextResponse.json({ error: 'Content not found or not public' }, { status: 404 });
    }
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 