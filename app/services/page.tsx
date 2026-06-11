'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

const services = [
  {
    slug: 'anesthesiology',
    title: 'Anesthesiology',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Expert administration of anesthesia for surgical procedures, focusing on patient safety, pain management, and personalized care during the perioperative period.',
  },
  {
    slug: 'cardiology',
    title: 'Cardiology (Non-Invasive)',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Comprehensive non-invasive cardiac evaluations including ECG, Echo, TMT, Holter monitoring, and specialized treatment plans for various heart conditions.',
  },
  {
    slug: 'critical-care',
    title: 'Critical Care',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Round-the-clock intensive monitoring and organ support for critically ill patients with severe trauma, surgical complications, or life-threatening infections.',
  },
  {
    slug: 'dental-care',
    title: 'Dental Care',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Premium dental services including preventive checkups, root canals, crowns, bridges, and advanced restorative treatments for residents and outpatient families.',
  },
  {
    slug: 'dermatology',
    title: 'Dermatology',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Specialized diagnosis and treatment for a wide range of skin, hair, and nail conditions, including allergy management, chronic eczema, and cosmetic skincare.',
  },
  {
    slug: 'physiotherapy',
    title: 'Physiotherapy & Rehab',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Custom rehabilitation and physical therapy programs designed to restore mobility, alleviate pain, and speed up post-surgical recovery processes.',
  },
  {
    slug: 'Onco-Surgery',
    title: 'Onco Surgery',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Expert administration of anesthesia for surgical procedures, focusing on patient safety, pain management, and personalized care during the perioperative period.',

  },
  {
    slug: 'ophthalmology',
    title: 'Ophthalmology',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Comprehensive eye care services including vision assessment, cataract management, glaucoma treatment, retinal evaluations, and preventive eye health care.',
  },
  {
    slug: 'obstetrics-gynecology',
    title: 'Obstetrics & Gynecology',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Specialized healthcare services for women including pregnancy care, childbirth support, gynecological consultations, and preventive health screenings.',
  },
  {
    slug: 'respiratory-medicine',
    title: 'Respiratory Medicine',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Expert diagnosis and treatment of respiratory disorders including asthma, COPD, lung infections, sleep-related breathing disorders, and chronic respiratory conditions.',
  },
  {
    slug: 'pediatric-neonatology',
    title: 'Pediatric Neonatology',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Dedicated healthcare for newborns, infants, children, and adolescents, including neonatal intensive care, developmental monitoring, and preventive pediatric services.',
  },
  {
    slug: 'general-medicine-emergency-geriatrics',
    title: 'General Medicine, Emergency Medicine & Geriatrics',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Comprehensive medical care covering routine health concerns, emergency treatment, chronic disease management, and specialized geriatric healthcare services.',
  },
];

export default function Services() {
  return (

    <div className="min-h-screen bg-slate-50/50 flex flex-col">
      <Header />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">
          {/* Header Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1e2f41] tracking-tight uppercase">
              Our Services
            </h1>
            <div className="flex justify-center mt-4 gap-1.5">
              <span className="w-6 h-1 bg-[#d81b47] rounded-full"></span>
              <span className="w-12 h-1 bg-[#d81b47] rounded-full"></span>
              <span className="w-6 h-1 bg-[#d81b47] rounded-full"></span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Card Heading Block */}
                <div className="p-6 text-center flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-[#1e2f41] tracking-tight min-h-[56px] flex items-center justify-center">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-500 line-clamp-3 mt-2 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-3 bg-[#8cb069] hover:bg-[#7ca058] text-white font-semibold text-center rounded transition-colors flex items-center justify-center gap-1 mt-auto select-none"
                  >
                    Read More &raquo;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Amenities / Info */}
          <div className="mt-20 bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e2f41] mb-8 uppercase tracking-tight">
              Additional Amenities & Care
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-emerald-500/20 transition-colors">
                  <span className="w-2.5 h-2.5 bg-[#d81b47] rounded-full flex-shrink-0"></span>
                  <span className="text-slate-700 font-semibold text-sm sm:text-base">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
