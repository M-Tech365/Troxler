import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

type AzureMapsResult = {
  type: string
  address: {
    freeformAddress?: string
    streetNumber?: string
    streetName?: string
    municipality?: string
    countrySubdivision?: string
    postalCode?: string
    country?: string
  }
}

type AzureMapsResponse = {
  results?: AzureMapsResult[]
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query")

  if (!query || query.length < 3) {
    return NextResponse.json({ results: [] })
  }

  const subscriptionKey = process.env.AZURE_MAPS_SUBSCRIPTION_KEY
  if (!subscriptionKey) {
    return NextResponse.json(
      { error: "Azure Maps is not configured." },
      { status: 500 }
    )
  }

  const params = new URLSearchParams({
    "api-version": "1.0",
    "subscription-key": subscriptionKey,
    query,
    typeahead: "true",
    countrySet: "US",
    limit: "5",
  })

  const url = `https://atlas.microsoft.com/search/address/json?${params}`

  const response = await fetch(url, { cache: "no-store" })

  if (!response.ok) {
    return NextResponse.json(
      { error: "Azure Maps request failed." },
      { status: 502 }
    )
  }

  const data = (await response.json()) as AzureMapsResponse

  const results = (data.results ?? []).map((r) => ({
    address: r.address.freeformAddress ?? "",
    street: [r.address.streetNumber, r.address.streetName]
      .filter(Boolean)
      .join(" "),
    city: r.address.municipality ?? "",
    state: r.address.countrySubdivision ?? "",
    postalCode: r.address.postalCode ?? "",
    country: r.address.country ?? "",
  }))

  return NextResponse.json({ results })
}
