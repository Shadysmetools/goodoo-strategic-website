import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { HTMLContent } from '../../../../types/htmlContent';
import { jwtVerify } from 'jose';

const DATA_PATH = path.join(process.cwd(), 'data', 'htmlContent.json');
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return payload;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest, { params }: { params: { token: string } }) {
  // Require JWT cookie
  const cookie = request.cookies.get('token')?.value;
  if (!cookie) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const valid = await verifyJWT(cookie);
  if (!valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const contents: HTMLContent[] = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    const content = contents.find(c => c.shareToken === params.token);
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 