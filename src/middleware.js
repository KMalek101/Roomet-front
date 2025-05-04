import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  const sessionCookie = request.cookies.get('connect.sid')?.value

  // Skip middleware for static assets, API, favicon, and public files
  if (
    pathname.startsWith('/_next/') || // Next.js internal files
    pathname.startsWith('/api/') || // API routes
    pathname.startsWith('/favicon.ico') || // Favicon
    pathname.startsWith('/images/') || // Images directory
    pathname.startsWith('/public/') || // Public directory
    /\.(png|jpg|jpeg|gif|svg|ico|webp|avif)$/.test(pathname) // Image file extensions
  ) {
    return NextResponse.next()
  }

  const publicPaths = ['/login', '/signup']

  if (!sessionCookie && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}