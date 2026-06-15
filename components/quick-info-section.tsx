'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Stethoscope,
  ClipboardList,
  Siren,
  Building2,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Medical Support',
    description: 'Round-the-clock medical assistance with dedicated staff available every hour of every day for your peace of mind.',
  },
  {
    icon: Stethoscope,
    title: 'Experienced Doctors',
    description: 'Our team of highly qualified and experienced physicians bring decades of expertise across multiple specializations.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Care Plans',
    description: 'Each patient receives an individually tailored care plan designed to meet their unique health needs and recovery goals.',
  },
  {
    icon: Siren,
    title: 'Emergency Assistance',
    description: 'Immediate emergency response with fully equipped facilities and trained emergency medical professionals on standby.',
  },
  {
    icon: Building2,
    title: 'Modern Facilities',
    description: 'State-of-the-art medical equipment and modern, comfortable facilities designed for optimal patient care and recovery.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Healthcare Team',
    description: 'A compassionate and reliable team of healthcare professionals dedicated to providing the highest standard of care.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#FDF8F0] relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8923C 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-20 right-10 w-24 h-24 opacity-[0.06] pointer-events-none dotted-pattern rounded-xl"
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
            Our Commitment
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A3D] tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Why Choose Us
          </h2>
          <div className="flex justify-center mt-5 gap-1.5">
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
            <span className="w-16 h-1 bg-[#C8923C] rounded-full" />
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-white rounded-3xl p-8 border border-[#E8DFD0] card-hover-lift text-center"
              >
                {/* Gold Icon Circle */}
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#C8923C]/20"
                  style={{
                    background: 'linear-gradient(135deg, #FDF8F0 0%, #F9EDD8 100%)',
                    border: '2px solid rgba(200, 146, 60, 0.2)',
                  }}
                >
                  <Icon size={32} className="text-[#C8923C]" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-[#1B2A3D] mb-3 group-hover:text-[#C8923C] transition-colors duration-300"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B6B7B] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
