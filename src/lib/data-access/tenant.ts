import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createTenant(data: { name: string }) {
  return prisma.tenant.create({
    data: {
      name: data.name,
      stripeFreeTrialEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
  })
}

export async function createTenantUser(data: {
  email: string
  tenantId: string
  roleId: string
  isTenantOwner: boolean
}) {
  return prisma.tenant_User.create({
    data: {
      email: data.email,
      tenantId: data.tenantId,
      roleId: data.roleId,
      isTenantOwner: data.isTenantOwner,
    },
  })
}

export async function getTenantByUserId(userId: string) {
  const tenantUser = await prisma.tenant_User.findFirst({
    where: { id: userId },
    include: { tenant: true },
  })
  return tenantUser?.tenant
}

export async function updateTenant(userId: string, data: {
  businessName: string
  contactEmail: string
  contactPhone?: string
  address?: string
  industry?: string
}) {
  const tenantUser = await prisma.tenant_User.findFirst({
    where: { id: userId },
    include: { tenant: true },
  })

  if (!tenantUser) {
    throw new Error('Tenant not found')
  }

  return prisma.tenant.update({
    where: { id: tenantUser.tenantId },
    data: {
      ...data,
      onboardingCompleted: true,
    },
  })
}