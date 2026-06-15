'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import WhyChooseUsSection from '@/components/quick-info-section';
import DoctorsSection from '@/components/doctors-section';
import FacilitiesSection from '@/components/facilities-section';
import TestimonialsSection from '@/components/testimonials-section';
import CtaSection from '@/components/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FacilitiesSection />
      <WhyChooseUsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
