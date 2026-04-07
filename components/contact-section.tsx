"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react"

const initialFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  inquiry: "product",
  message: "",
}

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error"
    message: string
  }>({
    type: "idle",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (submitState.type !== "idle") {
      setSubmitState({ type: "idle", message: "" })
    }

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitState({ type: "idle", message: "" })

    try {
      const response = await fetch("/api/dataverse/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit lead.")
      }

      setFormData(initialFormData)
      setSubmitState({
        type: "success",
        message: "Thank you. Your inquiry has been sent to our team.",
      })
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not submit your inquiry. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#e7d03d]" />
            <span className="text-[#e7d03d] text-sm font-semibold tracking-[0.2em] uppercase">
              Contact Us
            </span>
            <div className="h-px w-8 bg-[#e7d03d]" />
          </div>
          <h2 className="text-4xl font-black text-[#212a65] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions about our products, need a quote, or require technical
            support? Our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#212a65] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-black mb-6 text-[#e7d03d]">Headquarters</h3>

              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "3008 E. Cornwallis Rd.\nDurham, NC 27713",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "1-877-TROXLER\n+1-919-549-8661",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@troxlerlabs.com",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Mon–Fri: 8:00 AM – 5:00 PM ET",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <div className="w-9 h-9 bg-[#e7d03d]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#e7d03d]" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wider mb-0.5">
                        {label}
                      </div>
                      <div className="text-sm text-white whitespace-pre-line">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service centers */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h4 className="font-black text-[#212a65] mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#e7d03d]" />
                Service Centers
              </h4>
              <div className="space-y-3">
                {[
                  { location: "Durham, NC", type: "Headquarters & Service" },
                  { location: "Columbus, OH", type: "Regional Service Center" },
                  { location: "Denver, CO", type: "Western Service Center" },
                  { location: "Canada", type: "Sales & Support Office" },
                  { location: "Germany", type: "European Operations" },
                ].map(({ location, type }) => (
                  <div key={location} className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-[#212a65]">{location}</span>
                    <span className="text-gray-400 text-xs">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-[#212a65] mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#212a65] focus:ring-1 focus:ring-[#212a65] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#212a65] focus:ring-1 focus:ring-[#212a65] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ACME Construction"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#212a65] focus:ring-1 focus:ring-[#212a65] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (919) 555-0100"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#212a65] focus:ring-1 focus:ring-[#212a65] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Inquiry Type
                </label>
                <select
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#212a65] focus:ring-1 focus:ring-[#212a65] transition-colors bg-white"
                >
                  <option value="product">Product Information</option>
                  <option value="quote">Request a Quote</option>
                  <option value="service">Service & Repair</option>
                  <option value="training">Safety Training</option>
                  <option value="distributor">Become a Distributor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project and how we can help..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#212a65] focus:ring-1 focus:ring-[#212a65] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#212a65] text-white font-bold py-3.5 rounded-lg hover:bg-[#e7d03d] hover:text-[#212a65] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitState.type !== "idle" ? (
                <p
                  className={
                    submitState.type === "success"
                      ? "text-sm text-green-700 text-center"
                      : "text-sm text-red-600 text-center"
                  }
                >
                  {submitState.message}
                </p>
              ) : null}

              <p className="text-xs text-gray-400 text-center">
                By submitting this form you agree to our privacy policy. We typically
                respond within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
