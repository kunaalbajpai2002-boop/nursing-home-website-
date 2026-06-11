'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import QuickInfoSection from '@/components/quick-info-section';
import HeroSection from '@/components/hero-section';

import FeaturesSection from '@/components/features-section';
import DoctorsSection from '@/components/doctors-section';
import CtaSection from '@/components/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <QuickInfoSection />
      <DoctorsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
