'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const pediatricServices = [
  {
    title: 'Pediatric Care',
    slug: 'pediatric-care',
    image: '/images/pediatrics/care.jpg',
    description: 'Comprehensive medical care for children of all ages — from routine check-ups to treatment of common childhood illnesses.',
  },
  {
    title: 'Newborn / Neonatal Care',
    slug: 'neonatal-care',
    image: '/images/pediatrics/neonatal.jpg',
    description: 'Specialized care for newborns, including feeding support, jaundice management, and early development monitoring.',
  },
  {
    title: 'Vaccinations',
    slug: 'vaccinations',
    image: '/images/pediatrics/vaccinations.jpg',
    description: 'Timely immunizations as per recommended schedules to protect children from preventable diseases.',
  },
  {
    title: 'Hospitalization for Pediatric Illnesses',
    slug: 'pediatric-hospitalization',
    image: '/images/pediatrics/hospitalization.jpg',
    description: 'Expert care for children requiring admission due to serious infections, dehydration, or other acute conditions.',
  },
  {
    title: 'PICU / NICU Care',
    slug: 'nicu-care',
    image: '/images/pediatrics/nicu.jpg',
    description: 'Advanced care and coordination for critically ill newborns and children requiring intensive care and support.',
  },
  {
    title: 'Preventive Health Checks',
    slug: 'pediatric-health-checks',
    image: '/images/pediatrics/health-checks.jpg',
    description: 'Regular check-ups to monitor growth, development, and detect health issues early for timely intervention.',
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

export default function PediatricServicesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden" id="pediatrics">
      {/* Background decorative */}
      <div
        className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8923C 0%, transparent 70%)' }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-wider text-[#C8923C] uppercase mb-3">
            Pediatric Department
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A3D] tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Our Expert Pediatric Services
          </h2>
          <div className="flex justify-center mt-5 gap-1.5">
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
            <span className="w-16 h-1 bg-[#C8923C] rounded-full" />
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pediatricServices.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              className="group bg-[#FDF8F0] border border-[#E8DFD0] rounded-3xl overflow-hidden card-hover-lift flex flex-col"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3
                  className="text-xl font-bold text-[#1B2A3D] mb-3 group-hover:text-[#C8923C] transition-colors duration-300 min-h-[56px] flex items-start"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B6B7B] leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8923C] hover:text-[#A67830] transition-colors duration-300 group/link"
                >
                  Learn more
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
