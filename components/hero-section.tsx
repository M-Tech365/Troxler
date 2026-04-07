import Link from "next/link"
import { ArrowRight, Award, Globe, Wrench } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#212a65]">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://troxlerlabs.com/wp-content/uploads/2022/04/Troxler-Home-V5-Format-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay so text remains readable */}
        <div className="absolute inset-0 bg-[#212a65]/40" />
      </div>

      {/* Animated accent lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#e7d03d] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e7d03d] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 py-32 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#e7d03d]" />
            <span className="text-[#e7d03d] text-sm font-semibold tracking-[0.2em] uppercase">
              Since 1958
            </span>
            <div className="h-px w-8 bg-[#e7d03d]" />
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-lg">
            the leader in{" "}
            <span className="text-[#e7d03d]">construction</span>{" "}
            testing equipment
          </h1>

          <p className="text-white/80 text-xl leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow">
            Over 65 years of innovation delivering precision nuclear density gauges,
            asphalt testing solutions, and industry-leading support to geotech and
            road construction professionals worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 bg-[#e7d03d] text-[#212a65] font-bold px-8 py-3.5 rounded hover:bg-yellow-300 transition-colors"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://troxlerlabs.com/my-account/"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded hover:border-[#e7d03d] hover:text-[#e7d03d] transition-colors"
            >
              Login / Sign Up
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Award, value: "65+", label: "Years of Excellence" },
              { icon: Globe, value: "50+", label: "Global Distributors" },
              { icon: Wrench, value: "3", label: "Service Centers" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-1">
                  <Icon className="w-5 h-5 text-[#e7d03d]" />
                </div>
                <div className="text-3xl font-black text-[#e7d03d]">{value}</div>
                <div className="text-xs text-white/60 leading-tight uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
