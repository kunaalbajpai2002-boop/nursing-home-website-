'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Empanelment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-8">Our Empanelment</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Insurance & Affiliation</h2>
            <p className="text-lg text-muted-foreground mb-6">
              CareHub is empaneled with major insurance providers and healthcare networks to ensure comprehensive coverage for our residents.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'National Health Insurance',
                'Medicare Plus',
                'Senior Care Coverage',
                'Family Health Plans',
                'Corporate Wellness',
                'Government Health Schemes',
              ].map((provider, index) => (
                <div key={index} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <p className="font-semibold text-foreground">{provider}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Accreditations</h2>
            <ul className="space-y-3">
              {[
                'ISO 9001:2015 Certified',
                'NABH Accredited',
                'State Healthcare Board Approved',
                'JCI International Standards',
              ].map((accred, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">{accred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
