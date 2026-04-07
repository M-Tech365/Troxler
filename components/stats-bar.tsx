import { Factory, Globe, ShieldCheck, Clock, Award, Wrench } from "lucide-react"

const stats = [
  { icon: Clock, value: "65+", label: "Years of Innovation" },
  { icon: Globe, value: "50+", label: "International Distributors" },
  { icon: Factory, value: "3", label: "Service Center Locations" },
  { icon: Award, value: "100s", label: "Patents Held Since 1960s" },
  { icon: ShieldCheck, value: "ISO", label: "Certified Manufacturing" },
  { icon: Wrench, value: "24/7", label: "Technical Support" },
]

export function StatsBar() {
  return (
    <section className="bg-[#e7d03d] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-1 py-2"
            >
              <Icon className="w-5 h-5 text-[#212a65] mb-1" />
              <span className="text-2xl font-black text-[#212a65]">{value}</span>
              <span className="text-xs font-semibold text-[#212a65]/70 leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
