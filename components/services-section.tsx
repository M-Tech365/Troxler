import Link from "next/link"
import { Package, GraduationCap, Shield, Wrench, ArrowRight, Truck } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Troxler EZ-Ship",
    subtitle: "US Customers Only",
    description:
      "Simplified gauge shipping to our certified service centers. Print a prepaid label, drop off at any UPS location, and we handle the rest. Track your equipment every step of the way.",
    features: ["Prepaid shipping labels", "Real-time tracking", "Priority return service"],
    cta: "Ship Your Gauge",
  },
  {
    icon: GraduationCap,
    title: "Troxler Learning Center",
    subtitle: "Online Training",
    description:
      "Comprehensive online training courses for nuclear gauge operators, radiation safety officers, and lab technicians. OSHA-compliant modules available 24/7 from any device.",
    features: ["Nuclear radiation safety", "DOT transport certification", "Equipment operation courses"],
    cta: "Start Training",
  },
  {
    icon: Shield,
    title: "TLD Badge Service",
    subtitle: "Radiation Monitoring",
    description:
      "Thermoluminescent dosimeter (TLD) badge monitoring program to track radiation exposure for your team. Fully compliant with NRC and state regulatory requirements.",
    features: ["Monthly/quarterly options", "Online reporting portal", "Regulatory compliance support"],
    cta: "Order Badges",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    subtitle: "Certified Service Centers",
    description:
      "Factory-certified repair and calibration at three US service locations: North Carolina, Ohio, and Colorado. Loaner gauge programs available to minimize your downtime.",
    features: ["Factory-certified technicians", "Loaner gauge program", "Full calibration services"],
    cta: "Schedule Service",
  },
  {
    icon: Package,
    title: "Gauge Disposal",
    subtitle: "Compliant Decommissioning",
    description:
      "Environmentally responsible and legally compliant disposal services for nuclear gauges reaching end-of-life. We handle all NRC paperwork and transportation logistics.",
    features: ["NRC paperwork handled", "Certified disposal partners", "Chain of custody documentation"],
    cta: "Learn More",
  },
  {
    icon: Shield,
    title: "Safety Documents",
    subtitle: "Regulatory Resources",
    description:
      "Access our comprehensive library of safety procedures, MSDS sheets, state license addendum guides, and DOT transport regulations for nuclear testing equipment.",
    features: ["State license addendums", "DOT transport guides", "Safety procedure templates"],
    cta: "Access Library",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#e7d03d]" />
            <span className="text-[#e7d03d] text-sm font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
            <div className="h-px w-8 bg-[#e7d03d]" />
          </div>
          <h2 className="text-4xl font-black text-[#212a65] mb-4">
            Full-Lifecycle Support
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From initial training to gauge disposal, Troxler provides comprehensive
            support at every stage of your equipment's life.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-[#e7d03d] transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#212a65] flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#e7d03d]" />
              </div>

              <div className="mb-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {service.subtitle}
                </span>
              </div>
              <h3 className="text-lg font-black text-[#212a65] mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e7d03d] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#212a65] hover:gap-2.5 transition-all"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
