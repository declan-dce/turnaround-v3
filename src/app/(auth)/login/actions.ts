'use server'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createTenant, createTenantUser } from '@/lib/data-access/tenant'
import { sendVerificationEmail } from '@/lib/email'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect('/login?error=Invalid credentials')
  }

  return redirect('/')
}

export async function signup(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = createClient()

  const { data: { user }, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/confirm`,
    },
  })

  if (error || !user) {
    return redirect('/login?error=Could not create account')
  }

  // Create tenant and tenant user
  const tenant = await createTenant({ name: email.split('@')[0] })
  await createTenantUser({
    email,
    tenantId: tenant.id,
    roleId: 'owner', // Assuming you have a default 'owner' role
    isTenantOwner: true,
  })

  // Send verification email
  await sendVerificationEmail(email, user.id)

  return redirect('/check-email')
}