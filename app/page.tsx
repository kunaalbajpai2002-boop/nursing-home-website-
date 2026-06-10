'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Heart, Stethoscope, Users, Award, Pill, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video Side */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-gray-300 rounded-lg shadow-lg overflow-hidden">
                <video
                  className="w-full h-96 object-cover"
                  autoPlay
                  loop
                  muted
                  poster="/placeholder.svg?height=400&width=500"
                >
                  <source src="/placeholder.svg?height=400&width=500" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Information Side */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Compassionate Care for Your Loved Ones
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                CareHub provides world-class nursing care with a team of dedicated healthcare professionals committed to your family&apos;s wellbeing.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Our state-of-the-art facilities, experienced staff, and personalized care plans ensure every resident receives the attention and support they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule a Tour
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose CareHub?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine professional healthcare expertise with compassionate personal attention to create the perfect environment for senior living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Personalized Care',
                description: 'Customized care plans tailored to each resident&apos;s unique health needs and preferences.',
              },
              {
                icon: Stethoscope,
                title: '24/7 Medical Support',
                description: 'Round-the-clock medical supervision with qualified nursing staff and physicians on call.',
              },
              {
                icon: Users,
                title: 'Community Activities',
                description: 'Engaging social programs and recreational activities to promote physical and mental wellness.',
              },
              {
                icon: Award,
                title: 'Award-Winning Facility',
                description: 'Recognized excellence in senior care with state-of-the-art equipment and amenities.',
              },
              {
                icon: Pill,
                title: 'Medication Management',
                description: 'Strict protocols for medication administration and health monitoring.',
              },
              {
                icon: Activity,
                title: 'Wellness Programs',
                description: 'Comprehensive fitness and wellness initiatives to maintain quality of life.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Specialties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Offering comprehensive healthcare services across multiple specialized departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Geriatric Care',
              'Cardiac Management',
              'Diabetes Care',
              'Orthopedic Recovery',
              'Dementia Support',
              'Post-Surgery Rehabilitation',
              'Respiratory Care',
              'Physical Therapy',
              'Mental Health Support',
            ].map((specialty, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-primary"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{specialty}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Excellence in Senior Care?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to schedule a tour or learn more about our services and programs.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
