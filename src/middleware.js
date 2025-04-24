// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const sessionCookie = request.cookies.get('connect.sid')?.value

  const publicPaths = ['/login', '/signup']

  if (!sessionCookie && !publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}