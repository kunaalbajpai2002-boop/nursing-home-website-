'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Pediatrics', href: '#pediatrics' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const drawerVariants = {
    hidden: { x: '100%', transition: { type: 'spring', damping: 28, stiffness: 260 } },
    visible: { x: 0, transition: { type: 'spring', damping: 28, stiffness: 260 } },
  };

  const navListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', damping: 20, stiffness: 150 },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/98 shadow-lg shadow-black/5 backdrop-blur-md'
        : 'bg-white'
        }`}
      style={{ height: '90px' }}
    >
      <div className="max-w-[1600px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/LOGO.png.jpeg"
            alt="CareHub Nursing Home Logo"
            className="h-14 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-[#1B2A3D] text-lg tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Aggarwal
            </span>
            <span className="text-xs text-[#C8923C] font-medium tracking-wider uppercase">
              Nursing Home
            </span>
          </div>
        </Link>

        {/* Desktop Navigation — Center */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-[#1B2A3D]/80 hover:text-[#C8923C] rounded-lg transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C8923C] rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
        </nav>

        {/* Right — Book Appointment Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="flex items-center gap-2.5 px-7 py-3 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C8923C]/30 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 100%)',
            }}
          >
            <Calendar size={16} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#1B2A3D] p-2.5 rounded-xl hover:bg-[#FDF8F0] transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu System */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-y-0 right-0 z-50 w-full max-w-[350px] bg-white shadow-2xl flex flex-col h-full lg:hidden border-l border-[#E8DFD0]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-[90px] border-b border-[#E8DFD0]">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <img
                    src="/LOGO.png.jpeg"
                    alt="CareHub Nursing Home Logo"
                    className="h-11 w-auto object-contain rounded-md"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1B2A3D] text-base leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      CareHub
                    </span>
                    <span className="text-[10px] text-[#C8923C] font-semibold tracking-wider uppercase leading-none">
                      Nursing Home
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#1B2A3D] p-2 rounded-xl hover:bg-[#FDF8F0] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-grow overflow-y-auto px-6 py-6 flex flex-col justify-between">
                <motion.nav
                  variants={navListVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-1"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={navItemVariants}>
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-base font-semibold text-[#1B2A3D] hover:text-[#C8923C] hover:bg-[#FDF8F0] rounded-xl transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Additional Info in Menu */}
                <div className="mt-8 pt-6 border-t border-[#E8DFD0]/60 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-[#6B6B7B]">
                    <Phone size={16} className="text-[#C8923C]" />
                    <a href="tel:+919266610335" className="hover:text-[#C8923C] transition-colors">
                      (+91) 92666-10335
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#6B6B7B]">
                    <MapPin size={16} className="text-[#C8923C] mt-0.5 shrink-0" />
                    <span>U-150 Vijay Nagar, Narela, Near Bus Stand, Delhi-110040</span>
                  </div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-[#E8DFD0] bg-[#FDF8F0]/30">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-white rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C8923C]/20 active:scale-98"
                  style={{
                    background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 100%)',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar size={18} />
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
