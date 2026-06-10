'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import SpecialtiesSection from '@/components/specialties-section';
import CtaSection from '@/components/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SpecialtiesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
