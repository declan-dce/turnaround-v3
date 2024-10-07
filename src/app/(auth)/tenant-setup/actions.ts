'use server'

import { updateTenant } from '@/lib/data-access/tenant'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function saveTenantInfo(formData: FormData) {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  const tenantData = {
    businessName: formData.get('businessName') as string,
    contactEmail: formData.get('contactEmail') as string,
    contactPhone: formData.get('contactPhone') as string,
    address: formData.get('address') as string,
    industry: formData.get('industry') as string,
  }

  await updateTenant(user.id, tenantData)

  return redirect('/dashboard')
}