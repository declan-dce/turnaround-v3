import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')
  const supabase = createClient()

  if (token) {
    const { error } = await supabase.auth.verifyOtp({ token_hash: token, type: 'email' })
    if (!error) {
      // Update user's email verification status in your database
      // Redirect to tenant information setup page
      return NextResponse.redirect('/tenant-setup')
    }
  }

  // If there's an error or no token, redirect to an error page
  return NextResponse.redirect('/error')
}