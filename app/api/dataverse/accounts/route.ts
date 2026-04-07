import { NextResponse } from "next/server"

import { getAccounts } from "@/lib/dataverse"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const data = await getAccounts()
    return NextResponse.json(data)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected Dataverse error."

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
