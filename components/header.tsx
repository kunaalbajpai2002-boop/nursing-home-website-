'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, Phone, MapPin, ChevronDown, Baby, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const gynaecologyServices = [
  { title: 'All Kinds of Deliveries', slug: 'deliveries' },
  { title: 'All Gynae Surgeries', slug: 'gynae-surgeries' },
  { title: 'Laparoscopic & Robotic Surgeries', slug: 'laparoscopic-robotic-surgeries' },
  { title: 'Cosmetic Gynaecology', slug: 'cosmetic-gynaecology' },
  { title: 'Infertility Treatment', slug: 'infertility-treatment' },
  { title: 'Preventive Health Checks', slug: 'preventive-health-checks' },
];

const pediatricServices = [
  { title: 'Pediatric Care', slug: 'pediatric-care' },
  { title: 'Newborn / Neonatal Care', slug: 'neonatal-care' },
  { title: 'Vaccinations', slug: 'vaccinations' },
  { title: 'Pediatric Hospitalization', slug: 'pediatric-hospitalization' },
  { title: 'PICU / NICU Care', slug: 'nicu-care' },
  { title: 'Preventive Health Checks', slug: 'pediatric-health-checks' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShowServicesDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 200);
  };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
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
            alt="Aggarwal Nursing Home Logo"
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
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-[#1B2A3D]/80 hover:text-[#C8923C] rounded-lg transition-all duration-300 group inline-flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`}
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C8923C] rounded-full transition-all duration-300 group-hover:w-3/4" />
                </Link>

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {showServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-[#E8DFD0]/60 overflow-hidden z-50"
                    >
                      {/* Arrow */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[#E8DFD0]/60 rotate-45" />

                      <div className="relative grid grid-cols-2 gap-0 p-1">
                        {/* Gynaecology Column */}
                        <div className="p-5 pr-4">
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E8DFD0]/50">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C8923C]/15 to-[#C8923C]/5 flex items-center justify-center">
                              <Stethoscope size={16} className="text-[#C8923C]" />
                            </div>
                            <span
                              className="text-xs font-bold tracking-wider text-[#C8923C] uppercase"
                              style={{ fontFamily: 'Outfit, sans-serif' }}
                            >
                              Gynaecology
                            </span>
                          </div>
                          <div className="space-y-0.5">
                            {gynaecologyServices.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block px-3 py-2 text-[13px] font-medium text-[#1B2A3D]/75 hover:text-[#C8923C] hover:bg-[#FDF8F0] rounded-lg transition-all duration-200"
                                onClick={() => setShowServicesDropdown(false)}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Pediatrics Column */}
                        <div className="p-5 pl-4 border-l border-[#E8DFD0]/40">
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E8DFD0]/50">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5BA3D9]/15 to-[#5BA3D9]/5 flex items-center justify-center">
                              <Baby size={16} className="text-[#5BA3D9]" />
                            </div>
                            <span
                              className="text-xs font-bold tracking-wider text-[#5BA3D9] uppercase"
                              style={{ fontFamily: 'Outfit, sans-serif' }}
                            >
                              Pediatrics
                            </span>
                          </div>
                          <div className="space-y-0.5">
                            {pediatricServices.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block px-3 py-2 text-[13px] font-medium text-[#1B2A3D]/75 hover:text-[#5BA3D9] hover:bg-[#F0F7FC] rounded-lg transition-all duration-200"
                                onClick={() => setShowServicesDropdown(false)}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-6 py-3 bg-[#FDF8F0]/50 border-t border-[#E8DFD0]/40">
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-[#C8923C] hover:text-[#A67830] transition-colors duration-200 flex items-center gap-1.5"
                          onClick={() => setShowServicesDropdown(false)}
                        >
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[#1B2A3D]/80 hover:text-[#C8923C] rounded-lg transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C8923C] rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            )
          )}
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
                    alt="Aggarwal Nursing Home Logo"
                    className="h-11 w-auto object-contain rounded-md"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1B2A3D] text-base leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Aggarwal
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
                  {navLinks.map((link) =>
                    link.hasDropdown ? (
                      <motion.div key={link.href} variants={navItemVariants}>
                        {/* Services accordion trigger */}
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-[#1B2A3D] hover:text-[#C8923C] hover:bg-[#FDF8F0] rounded-xl transition-all duration-200 cursor-pointer"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {/* Accordion content */}
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pr-2 pb-2">
                                {/* Gynaecology sub-section */}
                                <div className="mb-3">
                                  <div className="flex items-center gap-2 px-3 py-2">
                                    <Stethoscope size={14} className="text-[#C8923C]" />
                                    <span className="text-[11px] font-bold tracking-wider text-[#C8923C] uppercase">
                                      Gynaecology
                                    </span>
                                  </div>
                                  {gynaecologyServices.map((service) => (
                                    <Link
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      className="block px-3 py-2 text-sm text-[#1B2A3D]/70 hover:text-[#C8923C] hover:bg-[#FDF8F0] rounded-lg transition-all duration-200"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {service.title}
                                    </Link>
                                  ))}
                                </div>

                                {/* Pediatrics sub-section */}
                                <div>
                                  <div className="flex items-center gap-2 px-3 py-2">
                                    <Baby size={14} className="text-[#5BA3D9]" />
                                    <span className="text-[11px] font-bold tracking-wider text-[#5BA3D9] uppercase">
                                      Pediatrics
                                    </span>
                                  </div>
                                  {pediatricServices.map((service) => (
                                    <Link
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      className="block px-3 py-2 text-sm text-[#1B2A3D]/70 hover:text-[#5BA3D9] hover:bg-[#F0F7FC] rounded-lg transition-all duration-200"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {service.title}
                                    </Link>
                                  ))}
                                </div>

                                {/* View all link */}
                                <Link
                                  href="/services"
                                  className="block px-3 py-2 mt-2 text-sm font-semibold text-[#C8923C] hover:text-[#A67830] border-t border-[#E8DFD0]/40 pt-3 transition-colors duration-200"
                                  onClick={() => setIsOpen(false)}
                                >
                                  View all services →
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ) : (
                      <motion.div key={link.href} variants={navItemVariants}>
                        <Link
                          href={link.href}
                          className="block px-4 py-3 text-base font-semibold text-[#1B2A3D] hover:text-[#C8923C] hover:bg-[#FDF8F0] rounded-xl transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  )}
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
