import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  const sessionCookie = request.cookies.get('connect.sid')?.value

  // Skip middleware for static assets, API, favicon, and public files
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/public/') ||
    /\.(png|jpg|jpeg|gif|svg|ico|webp|avif)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Check if path is public
 const isPublicPath =
  pathname === '/login' ||
  pathname === '/signup' ||
  pathname === '/' ||
  pathname.startsWith('/verification') ||
  pathname.startsWith('/activation');

  if (!sessionCookie && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}