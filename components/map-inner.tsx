"use client"

import { useEffect, useMemo, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import type { ServiceLocation } from "./locations-map"

// Fix Leaflet default marker icons broken by webpack
function fixLeafletIcons() {
  // @ts-expect-error _getIconUrl is not in types
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  })
}

const hqIcon = (selected: boolean) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width:${selected ? 28 : 22}px;height:${selected ? 28 : 22}px;border-radius:999px;
      background:#e7d03d;border:4px solid #212a65;
      box-shadow:0 10px 24px rgba(33,42,101,0.32);
      position:relative;
    "><div style="
      position:absolute;inset:${selected ? 6 : 4}px;border-radius:999px;
      background:#212a65;
    "></div>`,
    iconSize: selected ? [28, 28] : [22, 22],
    iconAnchor: selected ? [14, 14] : [11, 11],
    popupAnchor: [0, -18],
  })

const serviceIcon = (selected: boolean) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width:${selected ? 24 : 18}px;height:${selected ? 24 : 18}px;border-radius:999px;
      background:#212a65;border:${selected ? 4 : 3}px solid #e7d03d;
      box-shadow:${selected ? "0 10px 24px rgba(33,42,101,0.28)" : "0 6px 14px rgba(15,23,42,0.2)"};
    "></div>`,
    iconSize: selected ? [24, 24] : [18, 18],
    iconAnchor: selected ? [12, 12] : [9, 9],
    popupAnchor: [0, -16],
  })

function FitAndFocus({
  locations,
  selectedLocationName,
}: {
  locations: ServiceLocation[]
  selectedLocationName: string
}) {
  const map = useMap()

  useEffect(() => {
    if (!locations.length) {
      return
    }

    const selectedLocation = locations.find((location) => location.name === selectedLocationName)

    if (selectedLocation) {
      map.flyTo([selectedLocation.lat, selectedLocation.lng], 6, {
        animate: true,
        duration: 0.8,
      })
      return
    }

    const bounds = L.latLngBounds(locations.map((location) => [location.lat, location.lng]))
    map.fitBounds(bounds, { padding: [48, 48] })
  }, [locations, map, selectedLocationName])

  return null
}

export default function MapInner({
  locations,
  selectedLocationName,
  onSelectLocation,
}: {
  locations: ServiceLocation[]
  selectedLocationName: string
  onSelectLocation: (locationName: string) => void
}) {
  const markerRefs = useRef<Record<string, L.Marker | null>>({})

  useEffect(() => {
    fixLeafletIcons()
  }, [])

  useEffect(() => {
    const marker = markerRefs.current[selectedLocationName]
    marker?.openPopup()
  }, [selectedLocationName])

  const defaultBounds = useMemo(
    () => L.latLngBounds(locations.map((location) => [location.lat, location.lng])),
    [locations]
  )

  return (
    <MapContainer
      bounds={defaultBounds}
      boundsOptions={{ padding: [48, 48] }}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
      className="z-0"
    >
      <FitAndFocus locations={locations} selectedLocationName={selectedLocationName} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {locations.map((loc) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          icon={loc.hq ? hqIcon(loc.name === selectedLocationName) : serviceIcon(loc.name === selectedLocationName)}
          ref={(marker) => {
            markerRefs.current[loc.name] = marker
          }}
          eventHandlers={{
            click: () => onSelectLocation(loc.name),
          }}
        >
          <Popup>
            <div style={{ minWidth: 220 }}>
              <p style={{ fontWeight: 800, color: "#212a65", marginBottom: 6, fontSize: 14 }}>
                {loc.name}
              </p>
              <p style={{ color: "#475569", fontSize: 12, marginBottom: 10, lineHeight: 1.5 }}>
                {loc.address}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <a
                  href={`tel:${loc.phone}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    background: "#212a65",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "8px 12px",
                    textDecoration: "none",
                  }}
                >
                  {loc.phone}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    border: "1px solid rgba(33,42,101,0.16)",
                    color: "#212a65",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "8px 12px",
                    textDecoration: "none",
                  }}
                >
                  Directions
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
