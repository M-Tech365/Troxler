import { Factory, Lightbulb, Globe, CheckCircle } from "lucide-react"

const pillars = [
  {
    icon: Factory,
    title: "American Manufacturing",
    description:
      "All Troxler nuclear density gauges and testing equipment are proudly manufactured at our flagship facility in Research Triangle Park, North Carolina. Domestic production ensures the highest quality control standards and rapid delivery.",
    highlights: ["Research Triangle Park, NC", "Rigorous QC at every stage", "American-made reliability"],
  },
  {
    icon: Globe,
    title: "Expanding Global Reach",
    description:
      "With over 50 international distributors and direct offices in the United States, Canada, and Germany, Troxler products are trusted on construction projects across six continents. Our support infrastructure spans the globe.",
    highlights: ["US, Canada & Germany offices", "50+ distributor network", "Support on 6 continents"],
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "With an extensive patent history stretching back to the 1960s, Troxler has always been at the forefront of construction testing technology. Our R&D team continues to push the boundaries of what's possible.",
    highlights: ["Patents dating to the 1960s", "Active R&D investment", "ASTM standards leadership"],
  },
]

const timeline = [
  { year: "1958", event: "Troxler Electronic Laboratories founded in North Carolina" },
  { year: "1960s", event: "First nuclear density gauge patents filed, revolutionizing soil testing" },
  { year: "1970s", event: "Expanded product line to include asphalt testing solutions" },
  { year: "1990s", event: "International expansion with distributors across Europe and Asia" },
  { year: "2000s", event: "Opened service centers in Ohio and Colorado" },
  { year: "2010s", event: "Digital integration: Bluetooth data transfer and cloud reporting" },
  { year: "Today", event: "65+ years strong, leading the industry in nuclear testing equipment" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#212a65] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#e7d03d]" />
            <span className="text-[#e7d03d] text-sm font-semibold tracking-[0.2em] uppercase">
              About Troxler
            </span>
            <div className="h-px w-8 bg-[#e7d03d]" />
          </div>
          <h2 className="text-4xl font-black mb-4">
            65 Years of Building Better Roads
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Since 1958, Troxler has been the trusted partner of engineers, technicians,
            and DOT agencies who demand precision, durability, and compliance.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-[#e7d03d]/15 rounded-xl flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-[#e7d03d]" />
              </div>
              <h3 className="text-xl font-black mb-3">{pillar.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-[#e7d03d] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              {/* Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e7d03d]/0 via-[#e7d03d] to-[#e7d03d]/0 rounded-t-2xl" />
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-[#e7d03d]">Our Journey</h3>
          </div>

          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-0 w-px bg-[#e7d03d]/20 -translate-x-1/2" />

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`flex items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  } hidden md:block`}
                >
                  {i % 2 === 0 && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-block max-w-xs">
                      <p className="text-sm text-blue-200">{item.event}</p>
                    </div>
                  )}
                </div>

                {/* Year bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#e7d03d] text-[#212a65] font-black text-xs flex items-center justify-center text-center leading-tight border-4 border-[#212a65]">
                    {item.year}
                  </div>
                </div>

                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  {(i % 2 !== 0 || true) && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:inline-block md:max-w-xs">
                      <p className="text-sm text-blue-200">{item.event}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
