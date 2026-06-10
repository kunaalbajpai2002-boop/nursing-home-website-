'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-8">About CareHub</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At CareHub, our mission is to provide compassionate, high-quality nursing care that enhances the quality of life for seniors. We believe every resident deserves dignity, respect, and personalized attention.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-4">
              To be the most trusted and recognized nursing home facility in the region, known for our exceptional care standards, innovative healthcare practices, and commitment to the wellbeing of our residents and their families.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <ul className="space-y-3">
              {[
                { title: 'Compassion', desc: 'We treat every resident with empathy and understanding.' },
                { title: 'Excellence', desc: 'We maintain the highest standards of care and professionalism.' },
                { title: 'Integrity', desc: 'We operate with transparency and honesty in all our dealings.' },
                { title: 'Respect', desc: 'We honor the dignity and independence of every individual.' },
              ].map((value, index) => (
                <li key={index} className="border-b border-border pb-3 last:border-b-0">
                  <h3 className="font-bold text-primary text-lg">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
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
