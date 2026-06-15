'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-white overflow-hidden flex items-center" style={{ paddingTop: '90px' }}>
      {/* ─── Background Decorative Elements ─── */}
      {/* Large transparent gold circle — top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8923C 0%, transparent 70%)' }}
      />
      {/* Medium gold circle — bottom left */}
      <div
        className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8923C 0%, transparent 70%)' }}
      />
      {/* Dotted pattern — top left */}
      <div
        className="absolute top-40 left-10 w-32 h-32 opacity-[0.08] pointer-events-none dotted-pattern rounded-2xl"
      />
      {/* Small gold circle — mid left */}
      <div className="absolute top-1/3 left-[8%] w-4 h-4 rounded-full bg-[#C8923C] opacity-20 animate-float pointer-events-none" />
      {/* Small gold circle — bottom right */}
      <div className="absolute bottom-1/4 right-[35%] w-3 h-3 rounded-full bg-[#D4A853] opacity-15 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* ─── Main Content ─── */}
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ─── Left Side — Content (45%) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-7 lg:pr-8 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#C8923C] border border-[#C8923C]/20"
                style={{ background: 'linear-gradient(135deg, #FDF8F0 0%, #F9EDD8 100%)' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#C8923C] animate-pulse" />
                Trusted Nursing Home Care
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#1B2A3D] leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Compassionate{' '}
              <span className="text-gold-gradient">Care</span>{' '}
              for Every Stage of{' '}
              <span className="text-gold-gradient">Life</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base lg:text-lg text-[#6B6B7B] leading-relaxed max-w-xl"
            >
              Providing advanced medical care, rehabilitation, elder care, maternity support, and personalized healthcare services with a patient-first approach.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#C8923C]/25 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 100%)',
                }}
              >
                Book Appointment
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-[#C8923C] bg-transparent border-2 border-[#C8923C]/30 rounded-full transition-all duration-300 hover:border-[#C8923C] hover:bg-[#FDF8F0] hover:scale-105 active:scale-95"
              >
                Our Services
                <Play size={14} fill="#C8923C" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex items-center gap-8 mt-4 pt-6 border-t border-[#E8DFD0]"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C8923C]" style={{ fontFamily: 'Outfit, sans-serif' }}>15+</div>
                <div className="text-xs text-[#6B6B7B] font-medium mt-1">Years Experience</div>
              </div>
              <div className="w-px h-10 bg-[#E8DFD0]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C8923C]" style={{ fontFamily: 'Outfit, sans-serif' }}>50+</div>
                <div className="text-xs text-[#6B6B7B] font-medium mt-1">Expert Doctors</div>
              </div>
              <div className="w-px h-10 bg-[#E8DFD0]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C8923C]" style={{ fontFamily: 'Outfit, sans-serif' }}>10K+</div>
                <div className="text-xs text-[#6B6B7B] font-medium mt-1">Happy Patients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right Side — Image with Decorative Elements (55%) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Gold geometric shape behind image */}
            <div
              className="absolute top-8 right-0 w-[85%] h-[90%] rounded-3xl -z-0"
              style={{
                background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 40%, #C8923C 100%)',
                transform: 'rotate(3deg)',
              }}
            />

            {/* Soft circular pattern — top right */}
            <div className="absolute -top-4 -right-4 w-28 h-28 border-2 border-[#C8923C]/15 rounded-full pointer-events-none" />
            <div className="absolute -top-8 -right-8 w-40 h-40 border border-[#C8923C]/10 rounded-full pointer-events-none" />

            {/* Dotted pattern — bottom left */}
            <div className="absolute bottom-4 -left-2 w-24 h-24 opacity-[0.12] pointer-events-none dotted-pattern rounded-xl" />

            {/* Medical cross decorative — top left */}
            <div className="absolute top-12 left-4 z-10">
              <div className="w-10 h-10 relative">
                <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-[#C8923C]/25 rounded-full -translate-y-1/2" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#C8923C]/25 rounded-full -translate-x-1/2" />
              </div>
            </div>

            {/* Main Doctor Image */}
            <div className="relative z-10 w-full max-w-[520px]">
              <img
                src="/hero-doctor.png"
                alt="Expert Healthcare Professional"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                style={{ aspectRatio: '4/5' }}
              />

              {/* Floating Card — Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -bottom-4 -left-4 sm:left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-[#E8DFD0]"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 100%)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1B2A3D]" style={{ fontFamily: 'Outfit, sans-serif' }}>24/7 Care</div>
                  <div className="text-xs text-[#6B6B7B]">Always Available</div>
                </div>
              </motion.div>
            </div>

            {/* Small floating gold circle */}
            <div className="absolute top-1/4 -left-6 w-6 h-6 rounded-full bg-[#C8923C]/20 animate-float pointer-events-none" style={{ animationDelay: '0.5s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
