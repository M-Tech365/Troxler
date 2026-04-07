import Link from "next/link"
import { ArrowRight, Tag, CheckCircle } from "lucide-react"

const products = [
  {
    id: "egauge-4540",
    badge: "Best Seller",
    badgeColor: "bg-[#e7d03d] text-[#212a65]",
    name: "EGauge Model 4540",
    category: "Nuclear Density Gauge",
    description:
      "The industry's most advanced nuclear density gauge exempt from licensing. Utilizes nuclear technology for precise asphalt and soil density measurements with unmatched accuracy.",
    features: [
      "License-exempt nuclear technology",
      "ASTM D2950 & D8167 compliant",
      "Instant digital readout",
      "Rugged field-ready design",
      "Bluetooth data transfer",
    ],
    highlight: "No Licensing Required",
    svgColor: "#e7d03d",
  },
  {
    id: "ico-ncat-oven",
    badge: "New Model",
    badgeColor: "bg-[#212a65] text-white",
    name: "Troxler ICO NCAT Oven",
    category: "Asphalt Testing Equipment",
    description:
      "Rapid warm-up ignition oven for asphalt mix analysis. Reaches operating temperature in 20 minutes or less, dramatically reducing lab wait times and improving throughput.",
    features: [
      "Ready in 20 minutes or less",
      "NCAT ignition method compliant",
      "Precision temperature control",
      "Automated correction factors",
      "Remote monitoring capability",
    ],
    highlight: "20-Min Warm-Up",
    svgColor: "#e7d03d",
  },
  {
    id: "model-3430",
    badge: "Classic",
    badgeColor: "bg-gray-700 text-white",
    name: "Model 3430 Gauge",
    category: "Thin-Layer Density Gauge",
    description:
      "Specifically engineered for thin asphalt and concrete layers. Provides accurate density measurements for overlays as thin as 1 inch, meeting state DOT specifications nationwide.",
    features: [
      "Optimized for layers 1–3 inches",
      "State DOT approved",
      "Lightweight portable design",
      "Internal GPS data logging",
      "Rechargeable lithium battery",
    ],
    highlight: "Thin-Layer Specialist",
    svgColor: "#e7d03d",
  },
]

function ProductIllustration({ color, index }: { color: string; index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 160 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="45" y="95" width="70" height="45" rx="4" fill={color} opacity="0.9" />
        <rect x="52" y="86" width="56" height="16" rx="3" fill={color} opacity="0.7" />
        <circle cx="80" cy="60" r="32" fill="none" stroke={color} strokeWidth="2.5" />
        <circle cx="80" cy="60" r="22" fill="#1a2255" />
        <circle cx="80" cy="60" r="14" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <line x1="80" y1="60" x2="95" y2="42" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="80" cy="60" r="3.5" fill={color} />
        <rect x="55" y="99" width="50" height="18" rx="2" fill="#0a0e2a" />
        <text x="80" y="112" textAnchor="middle" fill={color} fontSize="7" fontFamily="monospace" fontWeight="bold">
          98.2 PCF
        </text>
        <circle cx="62" cy="127" r="4" fill="#1a2255" stroke={color} strokeWidth="1" />
        <circle cx="80" cy="130" r="4.5" fill={color} />
        <circle cx="98" cy="127" r="4" fill="#1a2255" stroke={color} strokeWidth="1" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 160 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="50" width="120" height="80" rx="6" fill="#2a2a2a" />
        <rect x="28" y="58" width="104" height="60" rx="4" fill="#1a1a1a" />
        <rect x="35" y="65" width="90" height="46" rx="3" fill="#111" />
        {/* Heating elements */}
        {[75, 85, 95, 105].map((y) => (
          <line key={y} x1="42" y1={y} x2="118" y2={y} stroke={color} strokeWidth="1.5" opacity="0.6" />
        ))}
        {/* Temperature display */}
        <rect x="50" y="130" width="60" height="20" rx="3" fill={color} opacity="0.9" />
        <text x="80" y="144" textAnchor="middle" fill="#212a65" fontSize="8" fontFamily="monospace" fontWeight="bold">
          482°C
        </text>
        {/* Door handle */}
        <rect x="68" y="108" width="24" height="6" rx="3" fill={color} opacity="0.8" />
        {/* Control knobs */}
        <circle cx="35" cy="140" r="6" fill="#333" stroke={color} strokeWidth="1.5" />
        <circle cx="125" cy="140" r="6" fill="#333" stroke={color} strokeWidth="1.5" />
        {/* Heat waves */}
        <path d="M 50 40 Q 55 33 60 40 Q 65 47 70 40" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7" />
        <path d="M 70 38 Q 75 31 80 38 Q 85 45 90 38" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7" />
        <path d="M 90 40 Q 95 33 100 40 Q 105 47 110 40" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 160 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Thin layer gauge */}
      <rect x="30" y="70" width="100" height="30" rx="4" fill={color} opacity="0.85" />
      <rect x="40" y="60" width="80" height="16" rx="3" fill={color} opacity="0.6" />
      {/* Source rod */}
      <rect x="73" y="100" width="14" height="35" rx="2" fill={color} opacity="0.7" />
      <circle cx="80" cy="138" r="8" fill={color} opacity="0.5" />
      {/* Display */}
      <rect x="45" y="74" width="70" height="18" rx="2" fill="#0a0e2a" />
      <text x="80" y="87" textAnchor="middle" fill={color} fontSize="7" fontFamily="monospace" fontWeight="bold">
        145.6 lb/ft³
      </text>
      {/* Layer indicator */}
      <rect x="30" y="107" width="100" height="4" rx="1" fill="#555" />
      <text x="80" y="120" textAnchor="middle" fill="#aaa" fontSize="7">
        Layer: 1.5 in
      </text>
      {/* Handle */}
      <rect x="68" y="42" width="24" height="20" rx="3" fill={color} opacity="0.5" />
    </svg>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#e7d03d]" />
            <span className="text-[#e7d03d] text-sm font-semibold tracking-[0.2em] uppercase">
              Our Products
            </span>
            <div className="h-px w-8 bg-[#e7d03d]" />
          </div>
          <h2 className="text-4xl font-black text-[#212a65] mb-4">
            Precision Testing Equipment
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From nuclear density gauges to asphalt ignition ovens, our products set the
            standard for accuracy and reliability on job sites worldwide.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Product visual */}
              <div className="relative bg-gradient-to-br from-[#212a65] to-[#1a2050] p-8 flex justify-center items-center h-52">
                <div className="w-36 h-36">
                  <ProductIllustration color={product.svgColor} index={index} />
                </div>
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-black text-[#212a65]">{product.name}</h3>
                  <span className="flex items-center gap-1 text-xs text-[#212a65] font-semibold bg-[#e7d03d]/20 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    <Tag className="w-3 h-3" />
                    {product.highlight}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#e7d03d] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-auto">
                  <Link
                    href="#contact"
                    className="flex-1 bg-[#212a65] text-white text-sm font-semibold py-2.5 rounded text-center hover:bg-[#1a2050] transition-colors"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-1 border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2.5 rounded hover:border-[#212a65] hover:text-[#212a65] transition-colors"
                  >
                    Details
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border-2 border-[#212a65] text-[#212a65] font-bold px-8 py-3 rounded hover:bg-[#212a65] hover:text-white transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
