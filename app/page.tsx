'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import PediatricServicesSection from '@/components/pediatric-services-section';
import ServicesSection from '@/components/services-section';
import WhyChooseUsSection from '@/components/quick-info-section';
import TestimonialsSection from '@/components/testimonials-section';
import CtaSection from '@/components/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Homepage Structure */}
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PediatricServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
