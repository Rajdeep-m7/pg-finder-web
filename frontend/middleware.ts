import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const token = request.cookies.get('stayNest')?.value

  let user: null | { role: 'user' | 'owner' } = null

  if (token) {
    try {
      const { payload } = await jwtVerify(token, secret)
      user = payload as { role: 'user' | 'owner' }
    } catch {
      user = null
    }
  }

  const isRenterRoute = pathname.startsWith('/renter')
  const isOwnerRoute = pathname.startsWith('/owner')

  if (!user) {
    if (isRenterRoute) {
      return NextResponse.redirect(new URL('/signin/renter', request.url))
    }
    if (isOwnerRoute) {
      return NextResponse.redirect(new URL('/signin/owner', request.url))
    }
  }

  if (isRenterRoute && user?.role !== 'user') {
    return NextResponse.redirect(new URL('/signin/renter', request.url))
  }

  if (isOwnerRoute && user?.role !== 'owner') {
    return NextResponse.redirect(new URL('/signin/owner', request.url))
  }

  const isAuthPage =
    pathname.startsWith('/signin') || pathname.startsWith('/signup')

  if (isAuthPage && user) {
    if (user.role === 'owner') {
      return NextResponse.redirect(new URL('/owner', request.url))
    } else {
      return NextResponse.redirect(new URL('/renter', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/renter/:path*',
    '/owner/:path*',
    '/signin/:path*',
    '/signup/:path*',
  ],
}