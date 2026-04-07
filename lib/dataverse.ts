type DataverseConfig = {
  clientId: string
  clientSecret: string
  tenantId: string
  scope: string
  environmentUrl: string
}

type DataverseTokenResponse = {
  access_token?: string
  error?: string
  error_description?: string
}

export type LeadPayload = {
  name: string
  email: string
  company?: string
  phone?: string
  inquiry: string
  message: string
}

function getDataverseConfig(): DataverseConfig {
  const clientId = process.env.DATAVERSE_CLIENT_ID
  const clientSecret = process.env.DATAVERSE_CLIENT_SECRET
  const tenantId = process.env.DATAVERSE_TENANT_ID
  const scope = process.env.DATAVERSE_SCOPE
  const environmentUrl = process.env.DATAVERSE_ENVIRONMENT_URL

  if (!clientId || !clientSecret || !tenantId || !scope || !environmentUrl) {
    throw new Error("Missing Dataverse environment variables.")
  }

  return {
    clientId,
    clientSecret,
    tenantId,
    scope,
    environmentUrl: environmentUrl.replace(/\/$/, ""),
  }
}

async function getAccessToken(config: DataverseConfig) {
  const tokenUrl = `https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token`
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: "client_credentials",
    scope: config.scope,
  })

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  })

  const data = (await response.json()) as DataverseTokenResponse

  if (!response.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || "Failed to retrieve Dataverse access token.")
  }

  return data.access_token
}

async function dataverseRequest(path: string, init: RequestInit = {}) {
  const config = getDataverseConfig()
  const accessToken = await getAccessToken(config)
  const url = `${config.environmentUrl}${path}`

  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "OData-MaxVersion": "4.0",
      "OData-Version": "4.0",
      ...init.headers,
    },
    cache: "no-store",
  })

  const responseText = await response.text()
  const data = responseText ? JSON.parse(responseText) : null

  if (!response.ok) {
    const message =
      typeof data?.error?.message === "string"
        ? data.error.message
        : "Dataverse request failed."

    throw new Error(message)
  }

  return data
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)

  if (parts.length === 0) {
    return { firstname: "", lastname: "" }
  }

  if (parts.length === 1) {
    return { firstname: parts[0], lastname: parts[0] }
  }

  return {
    firstname: parts.slice(0, -1).join(" "),
    lastname: parts.at(-1) ?? parts[0],
  }
}

function buildLeadSubject(inquiry: string, company?: string) {
  const inquiryLabels: Record<string, string> = {
    product: "Product Information",
    quote: "Request a Quote",
    service: "Service & Repair",
    training: "Safety Training",
    distributor: "Become a Distributor",
    other: "Website Inquiry",
  }

  const label = inquiryLabels[inquiry] ?? "Website Inquiry"
  return company ? `${label} - ${company}` : label
}

export async function getAccounts() {
  return dataverseRequest("/api/data/v9.2/accounts", { method: "GET" })
}

export async function createLead(payload: LeadPayload) {
  const { firstname, lastname } = splitName(payload.name)
  const descriptionParts = [
    `Inquiry Type: ${payload.inquiry}`,
    payload.message.trim(),
  ].filter(Boolean)

  const body = {
    firstname,
    lastname,
    fullname: payload.name.trim(),
    subject: buildLeadSubject(payload.inquiry, payload.company),
    companyname: payload.company?.trim() || undefined,
    emailaddress1: payload.email.trim(),
    telephone1: payload.phone?.trim() || undefined,
    description: descriptionParts.join("\n\n"),
  }

  return dataverseRequest("/api/data/v9.2/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(body),
  })
}
