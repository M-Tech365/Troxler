"use client"

import { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { MapPin, Phone, Navigation, Building2 } from "lucide-react"

export type ServiceLocation = {
  name: string
  address: string
  phone: string
  lat: number
  lng: number
  hq: boolean
}

const locations: ServiceLocation[] = [
  {
    name: "North Carolina — Headquarters",
    address: "3008 E. Cornwallis Rd., Research Triangle Park, NC 27709",
    phone: "1-877-TROXLER",
    lat: 35.9093,
    lng: -78.8482,
    hq: true,
  },
  {
    name: "Ohio Service Center",
    address: "6375 Shier Rings Rd, Suite F, Dublin, OH 43016",
    phone: "614-484-9401",
    lat: 40.0992,
    lng: -83.1141,
    hq: false,
  },
  {
    name: "Colorado Service Center",
    address: "4880 Robb Street, Unit 6, Wheat Ridge, CO 80033",
    phone: "919-485-2204",
    lat: 39.7856,
    lng: -105.1019,
    hq: false,
  },
  {
    name: "Northern California Service Center",
    address: "11300 Sanders Dr., Suite 7, Rancho Cordova, CA 95742",
    phone: "916-631-0234",
    lat: 38.5891,
    lng: -121.2811,
    hq: false,
  },
  {
    name: "Southern California Service Center",
    address: "10572 Acacia St Unit C-2, Rancho Cucamonga, CA 91730",
    phone: "909-890-1069",
    lat: 34.1064,
    lng: -117.5931,
    hq: false,
  },
  {
    name: "Central Florida Service Center",
    address: "531 Holts Lake Court, Apopka, FL 32703",
    phone: "407-681-4221",
    lat: 28.6753,
    lng: -81.5323,
    hq: false,
  },
  {
    name: "Southern Florida Service Center",
    address: "1681 Benchmark Avenue, Suite 100, Fort Myers, FL 33905",
    phone: "239-215-1146",
    lat: 26.6406,
    lng: -81.8723,
    hq: false,
  },
  {
    name: "Illinois Service Center",
    address: "1430 Brook Dr., Downers Grove, IL 60515",
    phone: "630-261-9304",
    lat: 41.8094,
    lng: -88.0198,
    hq: false,
  },
  {
    name: "Northeast Service Center",
    address: "102 Wooster Street, Unit A-7, Bethel, CT 06801",
    phone: "475-290-2990",
    lat: 41.3712,
    lng: -73.4140,
    hq: false,
  },
  {
    name: "Louisiana Service Center",
    address: "12180 Greenwell Springs Rd., Baton Rouge, LA 70814",
    phone: "225-218-4703",
    lat: 30.4966,
    lng: -91.0400,
    hq: false,
  },
  {
    name: "Texas — Dallas Area",
    address: "2982 Southeast Loop 820, Fort Worth, TX 76140",
    phone: "817-275-0571",
    lat: 32.6551,
    lng: -97.2641,
    hq: false,
  },
  {
    name: "Texas — Houston Area",
    address: "2500 Central Parkway, Suite L, Houston, TX 77092",
    phone: "832-519-9342",
    lat: 29.8174,
    lng: -95.4785,
    hq: false,
  },
]

// Dynamically import the map to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import("./map-inner"), { ssr: false, loading: () => (
  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
    <div className="text-gray-400 text-sm">Loading map…</div>
  </div>
)})

export function LocationsMap() {
  const [selectedLocationName, setSelectedLocationName] = useState(
    locations.find((location) => location.hq)?.name ?? locations[0]?.name ?? ""
  )

  const selectedLocation =
    locations.find((location) => location.name === selectedLocationName) ?? locations[0]

  const headquarters = useMemo(
    () => locations.find((location) => location.hq) ?? locations[0],
    []
  )

  const serviceCenters = useMemo(
    () => locations.filter((location) => !location.hq),
    []
  )

  return (
    <section
      id="locations"
      className="py-20 bg-[radial-gradient(circle_at_top,_rgba(231,208,61,0.14),_transparent_32%),linear-gradient(180deg,#f8fafc_0%,#eef3f7_100%)]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#e7d03d]" />
            <span className="text-[#e7d03d] text-sm font-semibold tracking-[0.2em] uppercase">
              Service Network
            </span>
            <div className="h-px w-8 bg-[#e7d03d]" />
          </div>
          <h2 className="text-4xl font-black text-[#212a65] mb-4">
            Nationwide Service Centers
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            With 12 service locations across the United States, expert support
            is never far away. Click a pin to see address and contact details.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_20px_60px_rgba(33,42,101,0.12)]">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 bg-slate-50 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Live Coverage
                </p>
                <p className="text-lg font-black text-[#212a65]">
                  Select a Service Center to Focus the Map
                </p>
              </div>
              <div className="hidden rounded-full bg-[#212a65] px-3 py-1 text-xs font-semibold text-white sm:block">
                {locations.length} Locations
              </div>
            </div>
            <div className="h-[560px]">
              <MapComponent
                locations={locations}
                selectedLocationName={selectedLocationName}
                onSelectLocation={setSelectedLocationName}
              />
            </div>
          </div>

          {/* Location list */}
          <div className="space-y-4">
            {headquarters ? (
              <button
                type="button"
                onClick={() => setSelectedLocationName(headquarters.name)}
                className={`w-full rounded-[24px] border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212a65] focus-visible:ring-offset-2 ${
                  selectedLocationName === headquarters.name
                    ? "border-[#e7d03d] bg-[#212a65] text-white shadow-[0_18px_40px_rgba(33,42,101,0.22)]"
                    : "border-[#d9dee8] bg-[#212a65] text-white"
                }`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7d03d]">
                    <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Headquarters
                  </span>
                  <span className="text-xs font-medium text-white/70">Primary Hub</span>
                </div>
                <p className="text-lg font-black text-[#e7d03d]">{headquarters.name}</p>
                <p className="mt-2 text-sm leading-6 text-white/75">{headquarters.address}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <a href={`tel:${headquarters.phone}`} className="hover:text-[#e7d03d]">
                    {headquarters.phone}
                  </a>
                </div>
              </button>
            ) : null}

            <div className="rounded-[24px] border border-slate-200/80 bg-white p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Field Support
                  </p>
                  <p className="text-lg font-black text-[#212a65]">Regional Service Centers</p>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  {serviceCenters.length} Centers
                </span>
              </div>

              <div className="max-h-[400px] space-y-3 overflow-y-auto pr-1">
                {serviceCenters.map((loc) => {
                  const isSelected = selectedLocationName === loc.name

                  return (
                    <button
                      key={loc.name}
                      type="button"
                      onClick={() => setSelectedLocationName(loc.name)}
                      className={`w-full rounded-2xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212a65] focus-visible:ring-offset-2 ${
                        isSelected
                          ? "border-[#212a65] bg-[#212a65] text-white shadow-[0_16px_32px_rgba(33,42,101,0.16)]"
                          : "border-slate-200 bg-slate-50 hover:border-[#e7d03d] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${
                            isSelected ? "bg-white/12 text-[#e7d03d]" : "bg-[#212a65] text-[#e7d03d]"
                          }`}
                        >
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p
                            className={`text-sm font-bold leading-tight ${
                              isSelected ? "text-white" : "text-[#212a65]"
                            }`}
                          >
                            {loc.name}
                          </p>
                          <p
                            className={`mt-1 text-xs leading-5 ${
                              isSelected ? "text-white/70" : "text-slate-500"
                            }`}
                          >
                            {loc.address}
                          </p>
                          <div
                            className={`mt-3 flex items-center gap-3 text-xs ${
                              isSelected ? "text-white/75" : "text-slate-500"
                            }`}
                          >
                            <span className="inline-flex items-center gap-1.5">
                              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                              {loc.phone}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                              View on Map
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {selectedLocation ? (
              <div className="rounded-[24px] border border-[#e7d03d]/50 bg-[#fff9d8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f6a00]">
                  Selected Center
                </p>
                <p className="mt-1 text-base font-black text-[#212a65]">{selectedLocation.name}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{selectedLocation.address}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={`tel:${selectedLocation.phone}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#212a65] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a2250]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Center
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLocation.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#212a65]/15 bg-white px-4 py-2 text-sm font-semibold text-[#212a65] transition-colors hover:border-[#212a65]"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Get Directions
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
