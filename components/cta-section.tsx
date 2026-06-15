'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 30%, #C8923C 60%, #A67830 100%)',
    }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 border-2 border-white/30 rounded-full" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/15 rounded-full" />
      </div>

      {/* Dotted pattern overlay */}
      <div className="absolute top-10 right-20 w-24 h-24 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Experience Compassionate Healthcare
          </h2>
          <p className="text-base lg:text-lg text-white/85 max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule a consultation with our expert healthcare team and discover the difference compassionate, personalized care can make.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-base font-bold text-[#C8923C] bg-white rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 active:scale-95"
          >
            Book Consultation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
