"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, User, ChevronDown, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "#tours" },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "Domestic Sales", href: "#domestic" },
      { label: "International Sales", href: "#international" },
      { label: "All Products", href: "#all-products" },
    ],
  },
  { label: "Services", href: "#services" },
  {
    label: "Safety",
    href: "#safety",
    children: [
      { label: "Training", href: "#training" },
      { label: "Documents", href: "#documents" },
      { label: "Gauge Shipping", href: "#gauge-shipping" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#212a65] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-[#e7d03d]" />
            <span>1-877-TROXLER &nbsp;|&nbsp; +1-919-549-8661</span>
          </div>
          <div className="flex items-center gap-4">
            <span>3008 E. Cornwallis Rd., Durham, NC 27713</span>
            <span className="text-[#e7d03d]">|</span>
            <span>Offices in US · Canada · Germany</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/toxler_logo.png"
                alt="Troxler Electronic Laboratories"
                width={160}
                height={69}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[#212a65] hover:text-[#e7d03d] transition-colors uppercase tracking-wide">
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <div
                      className={`absolute left-0 top-full mt-0 w-48 bg-white shadow-xl border-t-2 border-[#e7d03d] transition-all duration-150 ${
                        openDropdown === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-[#212a65] hover:bg-[#212a65] hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-sm font-semibold text-[#212a65] hover:text-[#e7d03d] transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right icons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-1.5 text-sm text-[#212a65] hover:text-[#e7d03d] transition-colors font-medium">
                <User className="w-4 h-4" />
                Login
              </button>
              <button className="relative p-2 text-[#212a65] hover:text-[#e7d03d] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#e7d03d] text-[#212a65] text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <Link
                href="#contact"
                className="bg-[#212a65] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#e7d03d] hover:text-[#212a65] transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#212a65]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-sm font-semibold text-[#212a65] border-b border-gray-50 uppercase tracking-wide"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 py-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1.5 text-sm text-gray-600 hover:text-[#212a65]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 flex gap-3">
                <button className="flex-1 py-2.5 border-2 border-[#212a65] text-[#212a65] text-sm font-semibold rounded">
                  Login
                </button>
                <button className="flex-1 py-2.5 bg-[#212a65] text-white text-sm font-semibold rounded">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
