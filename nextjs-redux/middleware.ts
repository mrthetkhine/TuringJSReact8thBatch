import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('Middleware ',request.nextUrl.pathname);
    if(request.nextUrl.href.endsWith('?auth=true'))
    {
        return NextResponse.next();
    }
    else
    {
        return NextResponse.redirect(new URL('/login', request.url))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin'],
}