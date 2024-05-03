import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const pathname = request.nextUrl.pathname
 
  if (pathname === "/") {
    return NextResponse.redirect(new URL('/chat', request.url))
  }
       return NextResponse.next()
}
 
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};