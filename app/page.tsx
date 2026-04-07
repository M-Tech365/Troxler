import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { ProductsSection } from "@/components/products-section"
import { ServicesSection } from "@/components/services-section"
import { LocationsMap } from "@/components/locations-map"
import { SafetySection } from "@/components/safety-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ProductsSection />
        <ServicesSection />
        <LocationsMap />
        <SafetySection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
