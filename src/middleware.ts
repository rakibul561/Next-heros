import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const coo = 'next-superhero';

export function middleware(request: NextRequest) {
  // Get the 'token' cookie
  const cookie = request.cookies.get('token');

  // Check if the cookie exists and its value matches 'coo'
  if (!cookie || cookie.value !== coo) {
    // Redirect to the login page if the condition fails
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow the request to proceed if the condition passes
  return NextResponse.next();
}

// Middleware config for matching specific paths
export const config = {
  matcher: ['/services/:path*', '/dashboards/:path*'], // Fixed typo in 'dashboards'
};
