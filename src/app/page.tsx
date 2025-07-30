import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Contact from '@/components/sections/contact'
import FAQ from '@/components/sections/faq'
import FeatureShowcase from '@/components/sections/feature-showcase'
import Features from '@/components/sections/features'
import Hero from '@/components/sections/hero'
import LogoSlider from '@/components/sections/logo-slider'
import Pricing from '@/components/sections/pricing'
import Testimonials from '@/components/sections/testimonials'
import FloatingActionButton from '@/components/ui/floating-action-button'

// Import new sections
import BlogResources from '@/components/sections/blog-resources'
import DemoVideo from '@/components/sections/demo-video'
import PricingCalculator from '@/components/sections/pricing-calculator'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <LogoSlider />
        <section id="features">
          <Features />
        </section>
        <section id="feature-showcase">
          <FeatureShowcase />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="pricing-calculator">
          <PricingCalculator />
        </section>
        <section id="demo">
          <DemoVideo />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="blog">
          <BlogResources />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
