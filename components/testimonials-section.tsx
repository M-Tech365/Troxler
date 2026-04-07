import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "James Mitchell",
    title: "Geotechnical Engineer",
    company: "NCDOT",
    quote:
      "We've used Troxler gauges for over 20 years. The accuracy is unmatched and the EZ-Ship service has drastically cut our equipment downtime. When you need reliable density data, there's no second choice.",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    title: "Materials Lab Director",
    company: "Western Paving Co.",
    quote:
      "The ICO NCAT Oven transformed our lab workflow. 20-minute warm-up means we can keep pace with the paving crews rather than holding them up. The ROI was immediate.",
    stars: 5,
  },
  {
    name: "Robert Vasquez",
    title: "Senior Field Inspector",
    company: "Texas DOT",
    quote:
      "The Troxler Learning Center made it simple to get my entire crew radiation safety certified. Online access means we train on our schedule. Excellent course content and easy to follow.",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#e7d03d]" />
            <span className="text-[#e7d03d] text-sm font-semibold tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <div className="h-px w-8 bg-[#e7d03d]" />
          </div>
          <h2 className="text-4xl font-black text-[#212a65] mb-4">
            Trusted by Industry Professionals
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Thousands of engineers, inspectors, and lab technicians rely on Troxler
            equipment every day on job sites across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#e7d03d]/30" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e7d03d] text-[#e7d03d]" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#212a65] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-bold text-[#212a65] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
