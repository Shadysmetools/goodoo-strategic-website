import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth/login') || pathname.startsWith('/api/auth/me') || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }
  const token = request.cookies.get('token')?.value;
  // DEBUG LOGGING
  // eslint-disable-next-line no-console
  console.log('MIDDLEWARE: token cookie:', token);
  if (!token) {
    // eslint-disable-next-line no-console
    console.log('MIDDLEWARE: No token, redirecting to /login');
    return NextResponse.redirect(new URL('/login', request.url));
  }
  try {
    // jose expects a Uint8Array for the secret
    const secret = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secret);
    // eslint-disable-next-line no-console
    console.log('MIDDLEWARE: JWT valid');
    return NextResponse.next();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('MIDDLEWARE: Invalid JWT, redirecting to /login', err);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!_next|api/auth/login|api/auth/me|login).*)'],
}; 