import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { HTMLContent } from '../../types/htmlContent'
import crypto from 'crypto'

const DATA_PATH = path.join(process.cwd(), 'data', 'htmlContent.json')

function loadFromFile(): HTMLContent[] {
  try {
    if (fs.existsSync(DATA_PATH)) {
      const raw = fs.readFileSync(DATA_PATH, 'utf-8')
      return JSON.parse(raw)
    }
  } catch (e) {
    console.error('Failed to load HTML content:', e)
  }
  return [
    {
      id: '1',
      title: 'CEO Strategic Overview',
      content: `<div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg"><h1 class="text-3xl font-bold mb-4">Goodoo.ai Strategic Overview</h1><p class="text-lg mb-6">Comprehensive strategic framework for scaling Goodoo.ai in the AI tools market.</p><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white bg-opacity-20 p-4 rounded-lg"><h3 class="text-xl font-semibold mb-2">Market Position</h3><p>Leading AI-powered strategic management platform</p></div><div class="bg-white bg-opacity-20 p-4 rounded-lg"><h3 class="text-xl font-semibold mb-2">Growth Strategy</h3><p>Focus on enterprise customers and strategic partnerships</p></div><div class="bg-white bg-opacity-20 p-4 rounded-lg"><h3 class="text-xl font-semibold mb-2">Financial Goals</h3><p>Targeting $10M ARR by end of 2025</p></div></div></div>`,
      role: 'ceo',
      category: 'Strategic Documents',
      createdAt: '2024-03-15',
      updatedAt: '2024-03-15',
      description: 'Strategic overview and business positioning',
      isPublic: false,
      shareToken: ''
    }
  ]
}

function saveToFile(contents: HTMLContent[]) {
  try {
    const dir = path.dirname(DATA_PATH)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(DATA_PATH, JSON.stringify(contents, null, 2), 'utf-8')
  } catch (e) {
    console.error('Failed to save HTML content:', e)
  }
}

function generateToken() {
  return crypto.randomBytes(16).toString('hex');
}

// GET - Get all content or filter by role
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const role = searchParams.get('role') as 'ceo' | 'cto' | 'cpo' | null
    const id = searchParams.get('id')
    
    const contents = loadFromFile()
    
    if (id) {
      const content = contents.find(c => c.id === id)
      if (!content) {
        return NextResponse.json({ error: 'Content not found' }, { status: 404 })
      }
      return NextResponse.json(content)
    }
    
    if (role) {
      const filteredContents = contents.filter(content => content.role === role)
      return NextResponse.json(filteredContents)
    }
    
    return NextResponse.json(contents)
  } catch (error) {
    console.error('GET /api/html-content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create new content
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, role, category, description } = body
    
    if (!title || !content || !role || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    
    const contents = loadFromFile()
    const newContent: HTMLContent = {
      id: Date.now().toString(),
      title,
      content,
      role,
      category,
      description: description || '',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      isPublic: false,
      shareToken: generateToken()
    }
    
    contents.push(newContent)
    saveToFile(contents)
    
    return NextResponse.json(newContent, { status: 201 })
  } catch (error) {
    console.error('POST /api/html-content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT - Update existing content
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updates } = body
    
    if (!id) {
      return NextResponse.json({ error: 'Content ID is required' }, { status: 400 })
    }
    
    const contents = loadFromFile()
    const index = contents.findIndex(content => content.id === id)
    
    if (index === -1) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }
    
    contents[index] = {
      ...contents[index],
      ...updates,
      updatedAt: new Date().toISOString().split('T')[0]
    }
    
    saveToFile(contents)
    return NextResponse.json(contents[index])
  } catch (error) {
    console.error('PUT /api/html-content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE - Delete content
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Content ID is required' }, { status: 400 })
    }
    
    const contents = loadFromFile()
    const index = contents.findIndex(content => content.id === id)
    
    if (index === -1) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }
    
    contents.splice(index, 1)
    saveToFile(contents)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE /api/html-content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 