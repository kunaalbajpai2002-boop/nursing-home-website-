'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    image: '/images/hero/slide-1.jpg',
    tagline: 'Premium Healthcare Experience',
    title: 'Normal and Caesarean Deliveries',
    description: 'Providing advanced medical care, maternity support, and child care within a private hospital environment designed for absolute healing and peace of mind.',
  },
  {
    image: '',
    tagline: 'Expert Gynaecology Services',
    title: 'High-Risk Pregnancy Management',
    description: 'Our world-class gynaecologists offer comprehensive prenatal screenings, gynaecological surgeries, IVF consultation, and personalized health checks.',
  },
  {
    image: '/images/hero/slide-3.jpg',
    title: 'Pregnancy Sonography & Ultrasound',
    tagline: 'State-of-the-Art Imaging',
    description: 'Equipped with the latest 3D/4D ultrasound technology and specialized diagnostic equipment to track development and ensure the safety of mother and baby.',
  },
  {
    image: '/images/hero/slide-4.jpg',
    tagline: 'Compassionate Maternity Care',
    title: 'Paediatric Consultations and Emergency Care',
    description: 'Experience your delivery in elegant private rooms under the guidance of our gentle, expert obstetricians and specialized labor support teams.',
  },
  {
    image: '/images/hero/slide-5.jpg',
    tagline: 'Mother & Newborn Support',
    title: 'Child Health & Vaccination Services',
    description: 'Equipped with Level III NICU systems and expert child specialists on standby 24/7 to safeguard your newborn\'s health and nutrition.',
  }
];

const AUTOPLAY_DELAY = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-[#1B2A3D]" id="hero-slider">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {heroSlides[current].image && (
              <img
                src={heroSlides[current].image}
                alt={heroSlides[current].title}
                className="w-full h-full object-cover scale-102 transform animate-pulse-slow"
                style={{ filter: 'brightness(0.95)' }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Navy Overlay (60% Opacity) */}
      <div className="absolute inset-0 bg-[#1B2A3D]/60 z-10 pointer-events-none" />

      {/* Hero Content (Floating on Top) */}
      <div className="relative z-20 max-w-[1600px] mx-auto w-full h-full px-4 sm:px-6 lg:px-12 flex items-center">
        <div className="max-w-3xl flex flex-col gap-6 text-left">
          {/* Tagline Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tagline-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#C8923C] border border-[#C8923C]/30 bg-[#1B2A3D]/40 backdrop-blur-md uppercase tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-[#C8923C] animate-pulse-gold" />
                {heroSlides[current].tagline}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Heading */}
          <div className="overflow-hidden py-1">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current}`}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -35 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight uppercase"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {heroSlides[current].title.split(' & ').map((part, index) => (
                  <span key={index} className="block">
                    {index > 0 ? '& ' : ''}
                    <span className={index % 2 === 1 ? 'text-gold-gradient' : ''}>
                      {part}
                    </span>
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subheading */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl"
            >
              {heroSlides[current].description}
            </motion.p>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#C8923C]/25 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 100%)',
              }}
              id="hero-book-btn"
            >
              Book Appointment
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-transparent border-2 border-white/20 rounded-full transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95"
              id="hero-services-btn"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${i === current
              ? 'w-8 bg-[#C8923C] shadow-lg shadow-[#C8923C]/50'
              : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            id={`hero-dot-${i}`}
          />
        ))}
      </div>

      {/* Navigation Arrow Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-25 w-12 h-12 rounded-full border border-white/10 bg-[#1B2A3D]/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-[#1B2A3D]/80 flex items-center justify-center transition-all duration-300 hover:scale-105 hidden md:flex cursor-pointer"
        id="hero-prev-arrow"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-25 w-12 h-12 rounded-full border border-white/10 bg-[#1B2A3D]/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-[#1B2A3D]/80 flex items-center justify-center transition-all duration-300 hover:scale-105 hidden md:flex cursor-pointer"
        id="hero-next-arrow"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
