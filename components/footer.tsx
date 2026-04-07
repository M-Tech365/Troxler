import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"

const footerLinks = {
  Products: [
    { label: "EGauge Model 4540", href: "#" },
    { label: "ICO NCAT Oven", href: "#" },
    { label: "Model 3430 Gauge", href: "#" },
    { label: "Accessories", href: "#" },
    { label: "Domestic Sales", href: "#" },
    { label: "International Sales", href: "#" },
  ],
  Services: [
    { label: "Troxler EZ-Ship", href: "#" },
    { label: "Equipment Repair", href: "#" },
    { label: "Calibration", href: "#" },
    { label: "Gauge Disposal", href: "#" },
    { label: "TLD Badge Service", href: "#" },
    { label: "Loaner Program", href: "#" },
  ],
  Safety: [
    { label: "Training Courses", href: "#" },
    { label: "Safety Documents", href: "#" },
    { label: "State License Info", href: "#" },
    { label: "DOT Transport Guide", href: "#" },
    { label: "Emergency Procedures", href: "#" },
  ],
  Company: [
    { label: "About Troxler", href: "#about" },
    { label: "Virtual Tours", href: "#tours" },
    { label: "Distributors", href: "#" },
    { label: "Careers", href: "#" },
    { label: "News & Updates", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0d1535] text-white">
      {/* CTA Banner */}
      <div className="bg-[#e7d03d]">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-[#212a65] text-2xl font-black">
              Ready to Improve Your Job Site Accuracy?
            </h3>
            <p className="text-[#212a65]/70 text-sm mt-1">
              Talk to a Troxler specialist today — no obligation.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="#contact"
              className="bg-[#212a65] text-white font-bold px-6 py-3 rounded hover:bg-[#1a2050] transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="tel:18779769537"
              className="border-2 border-[#212a65] text-[#212a65] font-bold px-6 py-3 rounded hover:bg-[#212a65] hover:text-white transition-colors"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/toxler_logo.png"
                alt="Troxler Electronic Laboratories"
                width={160}
                height={69}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-blue-300 text-sm leading-relaxed mb-5">
              The world leader in nuclear density gauges and construction testing
              equipment since 1958. Headquartered in Research Triangle Park, NC.
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-blue-300">
                <MapPin className="w-3.5 h-3.5 text-[#e7d03d] flex-shrink-0" />
                3008 E. Cornwallis Rd., Durham, NC 27713
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <Phone className="w-3.5 h-3.5 text-[#e7d03d] flex-shrink-0" />
                1-877-TROXLER
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <Mail className="w-3.5 h-3.5 text-[#e7d03d] flex-shrink-0" />
                info@troxlerlabs.com
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "LI", href: "#", title: "LinkedIn" },
                { label: "FB", href: "#", title: "Facebook" },
                { label: "YT", href: "#", title: "YouTube" },
              ].map(({ label, href, title }) => (
                <Link
                  key={title}
                  href={href}
                  aria-label={title}
                  className="w-9 h-9 bg-white/5 hover:bg-[#e7d03d] hover:text-[#212a65] rounded-lg flex items-center justify-center text-blue-300 transition-colors text-xs font-bold"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-black text-white text-sm uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-blue-300 text-sm hover:text-[#e7d03d] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-400">
          <div>
            &copy; {new Date().getFullYear()} Troxler Electronic Laboratories, Inc. All rights
            reserved.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#e7d03d] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#e7d03d] transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-[#e7d03d] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
