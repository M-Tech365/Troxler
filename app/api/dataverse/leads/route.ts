import { NextRequest, NextResponse } from "next/server"

import { createLead, type LeadPayload } from "@/lib/dataverse"

export const dynamic = "force-dynamic"

function validateLeadPayload(body: Partial<LeadPayload>) {
  if (!body.name?.trim()) {
    return "Name is required."
  }

  if (!body.email?.trim()) {
    return "Email is required."
  }

  if (!body.message?.trim()) {
    return "Message is required."
  }

  if (!body.inquiry?.trim()) {
    return "Inquiry type is required."
  }

  return null
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>
    const validationError = validateLeadPayload(body)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    await createLead({
      name: body.name!.trim(),
      email: body.email!.trim(),
      company: body.company?.trim(),
      phone: body.phone?.trim(),
      address: body.address?.trim(),
      city: body.city?.trim(),
      state: body.state?.trim(),
      postalCode: body.postalCode?.trim(),
      inquiry: body.inquiry!.trim(),
      message: body.message!.trim(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected Dataverse error."

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
