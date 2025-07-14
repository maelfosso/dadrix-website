import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma';
// import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const registration = await prisma.registration.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        company: body.company,
        activities: body.activities,
        interests: body.interests,
      },
    })

    return NextResponse.json({ success: true, data: registration }, { status: 201 })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue'
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
