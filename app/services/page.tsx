'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Heart, Brain, Droplet, Bed, Smile, Users } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Comprehensive healthcare services designed for senior wellness and independent living.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Cardiac Care',
                description: 'Specialized monitoring and treatment for heart and cardiovascular conditions.',
              },
              {
                icon: Brain,
                title: 'Dementia Care',
                description: 'Compassionate care for residents with Alzheimer&apos;s and dementia-related conditions.',
              },
              {
                icon: Droplet,
                title: 'Diabetes Management',
                description: 'Complete diabetes management including monitoring, medication, and dietary support.',
              },
              {
                icon: Bed,
                title: 'Post-Surgery Recovery',
                description: 'Comprehensive rehabilitation and recovery support following surgical procedures.',
              },
              {
                icon: Smile,
                title: 'Dental & Vision',
                description: 'Regular dental check-ups and vision care services for all residents.',
              },
              {
                icon: Users,
                title: 'Mental Health Support',
                description: 'Counseling and psychological support to promote emotional wellbeing.',
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Additional Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Nutritious meal planning',
                'Physical therapy gymnasium',
                'Recreation and entertainment',
                'Library and reading room',
                'Visitor lounge facilities',
                'Transportation services',
                '24/7 emergency services',
                'Wi-Fi and communication center',
              ].map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-foreground font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
