import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Troxler Electronic Laboratories | Leader in Construction Testing Equipment",
  description:
    "Troxler Electronic Laboratories – over 65 years delivering precision nuclear density gauges and asphalt testing equipment for geotech and road construction worldwide.",
  keywords: [
    "nuclear density gauge",
    "construction testing equipment",
    "asphalt testing",
    "soil density",
    "Troxler",
    "EGauge",
    "NCAT oven",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
