import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Replace get, set, and remove with getAll and setAll
        getAll: () => {
          return request.cookies.getAll().map(cookie => ({
            name: cookie.name,
            value: cookie.value,
          }))
        },
        setAll: (cookies) => {
          cookies.forEach(({ name, value, ...options }) => {
            request.cookies.set({
              name,
              value,
              ...options,
            })
            response.cookies.set({
              name,
              value,
              ...options,
            })
          })
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()

  // Add additional checks for tenant and subscription status
  if (session) {
    const { data: tenant } = await supabase
      .from('tenants')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (!tenant) {
      return NextResponse.redirect(new URL('/tenant-setup', request.url))
    }

    if (!tenant.onboardingCompleted) {
      return NextResponse.redirect(new URL('/tenant-setup', request.url))
    }

    if (tenant.stripeFreeTrialEnd && new Date(tenant.stripeFreeTrialEnd) < new Date()) {
      if (!tenant.stripeSubscriptionId) {
        return NextResponse.redirect(new URL('/subscription', request.url))
      }
    }
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/auth).*)',
  ],
}