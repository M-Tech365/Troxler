import Link from "next/link"
import { ShieldCheck, FileText, Truck, BookOpen, AlertTriangle, ArrowRight } from "lucide-react"

export function SafetySection() {
  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#e7d03d]" />
              <span className="text-[#e7d03d] text-sm font-semibold tracking-[0.2em] uppercase">
                Safety & Compliance
              </span>
            </div>
            <h2 className="text-4xl font-black text-[#212a65] mb-5">
              Your Safety Is Our Priority
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Troxler takes nuclear safety seriously. We provide comprehensive resources,
              training programs, and support services to keep your team compliant with
              NRC, DOT, and state regulatory requirements.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: "Radiation Safety Training",
                  desc: "Online courses covering nuclear gauge operation, radiation fundamentals, and OSHA requirements.",
                },
                {
                  icon: FileText,
                  title: "Safety Documentation Library",
                  desc: "State license addendums, MSDS sheets, DOT transport guides, and emergency procedures.",
                },
                {
                  icon: Truck,
                  title: "Regulatory Gauge Shipping",
                  desc: "Guidance and materials for DOT-compliant transport of nuclear gauges between job sites.",
                },
                {
                  icon: AlertTriangle,
                  title: "Emergency Response Guides",
                  desc: "24/7 access to emergency procedures and direct phone support from our safety team.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#212a65] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#e7d03d]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212a65] mb-0.5">{title}</h4>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-[#212a65] text-white font-bold px-6 py-3 rounded hover:bg-[#e7d03d] hover:text-[#212a65] transition-colors"
            >
              Access Safety Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-[#212a65] rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <defs>
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1.5" fill="#e7d03d" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              <div className="relative z-10">
                <ShieldCheck className="w-16 h-16 text-[#e7d03d] mb-6" />
                <h3 className="text-2xl font-black mb-6">Compliance Snapshot</h3>

                <div className="space-y-4">
                  {[
                    { label: "NRC General License", status: "Supported" },
                    { label: "State License Addendums", status: "All 50 States" },
                    { label: "DOT Transport (49 CFR)", status: "Guides Available" },
                    { label: "OSHA Radiation Safety", status: "Training Provided" },
                    { label: "IATA Air Transport", status: "Documentation Ready" },
                  ].map(({ label, status }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center py-3 border-b border-white/10"
                    >
                      <span className="text-sm text-white/60">{label}</span>
                      <span className="text-sm font-bold text-[#e7d03d]">{status}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#e7d03d] text-[#212a65] rounded-xl p-4">
                  <p className="text-sm font-bold mb-1">Need help with licensing?</p>
                  <p className="text-xs">
                    Our safety team can guide you through state licensing, NRC
                    requirements, and annual renewal procedures.
                  </p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-bold underline"
                  >
                    Contact our safety team →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
