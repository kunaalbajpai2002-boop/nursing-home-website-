'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const facilities = [
  {
    title: 'ICU Care',
    slug: 'icu-care',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'State-of-the-art intensive care unit equipped with advanced life support systems and 24/7 critical care monitoring by specialized teams.',
  },
  {
    title: 'Private Rooms',
    slug: 'private-rooms',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Spacious, well-appointed private rooms designed for comfort and privacy, with modern amenities and a home-like atmosphere for recovery.',
  },
  {
    title: 'Emergency Services',
    slug: 'emergency-services',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Rapid-response emergency department operating around the clock with trained emergency physicians and life-saving equipment.',
  },
  {
    title: 'Diagnostics',
    slug: 'diagnostics',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Comprehensive diagnostic services including advanced imaging, laboratory tests, and screening programs for accurate and timely results.',
  },
  {
    title: 'Pharmacy',
    slug: 'pharmacy',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'In-house pharmacy stocked with a wide range of medications, ensuring easy access to prescribed treatments for all patients.',
  },
  {
    title: 'Ambulance Services',
    slug: 'ambulance-services',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Fully equipped ambulance services available 24/7 for emergency patient transport with trained paramedics and life support systems.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};


export default function FacilitiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FDF8F0] relative overflow-hidden" id="facilities">
      {/* Background decorative */}
      <div
        className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8923C 0%, transparent 70%)' }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider text-[#C8923C] uppercase mb-3">
            Infrastructure
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A3D] tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Our Facilities
          </h2>
          <div className="flex justify-center mt-5 gap-1.5">
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
            <span className="w-16 h-1 bg-[#C8923C] rounded-full" />
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.slug}
              variants={cardVariants}
              className="group bg-white border border-[#E8DFD0] rounded-3xl overflow-hidden card-hover-lift flex flex-col"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3
                  className="text-xl font-bold text-[#1B2A3D] mb-3 group-hover:text-[#C8923C] transition-colors duration-300"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {facility.title}
                </h3>
                <p className="text-sm text-[#6B6B7B] leading-relaxed mb-5 flex-grow">
                  {facility.description}
                </p>
                <Link
                  href={`/services`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8923C] hover:text-[#A67830] transition-colors duration-300 group/link"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
