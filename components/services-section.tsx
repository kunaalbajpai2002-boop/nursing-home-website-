'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Elder Care',
    slug: 'elder-care',
    image: '/services/elder-care.png',
    description: 'Comprehensive and compassionate care for elderly residents, ensuring dignity, comfort, and a fulfilling quality of life in a safe environment.',
  },
  {
    title: 'Rehabilitation Care',
    slug: 'rehabilitation-care',
    image: '/services/rehabilitation-care.png',
    description: 'Structured rehabilitation programs designed to help patients recover strength, mobility, and independence after illness, injury, or surgery.',
  },
  {
    title: 'Post-Surgery Recovery',
    slug: 'post-surgery-recovery',
    image: '/services/post-surgery.png',
    description: 'Specialized post-operative care with round-the-clock monitoring, pain management, and tailored recovery plans for faster healing.',
  },
  {
    title: 'Physiotherapy',
    slug: 'physiotherapy',
    image: '/services/physiotherapy.png',
    description: 'Expert physiotherapy services using modern techniques and equipment to restore movement, reduce pain, and improve physical well-being.',
  },
  {
    title: 'Dementia Care',
    slug: 'dementia-care',
    image: '/services/dementia-care.png',
    description: 'Specialized dementia and memory care programs in a secure, nurturing environment with trained professionals providing 24/7 support.',
  },
  {
    title: 'Palliative Care',
    slug: 'palliative-care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Compassionate end-of-life care focused on comfort, pain relief, and emotional support for patients and their families during difficult times.',
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

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="services">
      {/* Background decorative circle */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
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
            Gyanaecology Department
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A3D] tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Our Specialized Healthcare Services
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
          {services.map((service) => (
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
                  className="text-xl font-bold text-[#1B2A3D] mb-3 group-hover:text-[#C8923C] transition-colors duration-300"
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
