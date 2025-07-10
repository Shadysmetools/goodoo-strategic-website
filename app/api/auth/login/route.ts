import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const USERS_PATH = path.join(process.cwd(), 'data', 'users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }
    const users = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8'));
    const user = users.find((u: any) => u.email === email);
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    const response = NextResponse.json({ success: true, email: user.email });
    response.cookies.set('token', token, { httpOnly: true, path: '/', sameSite: 'lax', maxAge: 60 * 60 * 24 * 7, secure: process.env.NODE_ENV === 'production' });
    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
} 