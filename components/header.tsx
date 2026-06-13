'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, AlertTriangle, Clock, ChevronDown, FlaskConical } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLabOpen, setIsLabOpen] = useState(false);

  const labTests = [
    { name: 'Amylase Test', slug: 'amylase-test' },
    { name: 'Blood Glucose Test', slug: 'blood-glucose-test' },
    { name: 'Blood Urea Nitrogen (BUN)', slug: 'blood-urea-nitrogen' },
    { name: 'Blood Chemistry Panel', slug: 'blood-chemistry-panel' },
    { name: 'Chest X-Ray', slug: 'chest-x-ray' },
    { name: 'Coagulation Profile (PT/INR)', slug: 'coagulation-profile' },
    { name: 'Complete Blood Count (CBC)', slug: 'complete-blood-count' },
    { name: 'Electrocardiogram (ECG)', slug: 'electrocardiogram' },
    { name: 'HbA1c (Glycated Hemoglobin)', slug: 'hba1c-test' },
    { name: 'Kidney Function Test (KFT)', slug: 'kidney-function-test' },
    { name: 'Lipid Profile (Cholesterol)', slug: 'lipid-profile' },
    { name: 'Liver Function Test (LFT)', slug: 'liver-function-test' },
    { name: 'Thyroid Function Test (TFT)', slug: 'thyroid-function-test' },
    { name: 'Ultrasound Imaging', slug: 'ultrasound-imaging' },
    { name: 'Urine Analysis', slug: 'urine-analysis' },
    { name: 'Vitamin D & B12 Test', slug: 'vitamin-test' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Our Empanelment', href: '/empanelment' },
    { label: 'Services', href: '/services' },
    { label: 'Diagnostics', href: '/diagnostics' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full">
      {/* Header Bar */}
      <div className="w-full h-20 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm px-4">
        <div className="max-w-[1500px] mx-auto h-full flex items-center justify-between relative">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.jpg"
                alt="Aggarwal Nursing Home Logo"
                className="h-14 w-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-bold text-primary text-xl hidden sm:inline tracking-tight group-hover:text-accent transition-colors duration-300">
                Aggarwal Nursing Home
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-all duration-300 hover:bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4"
                >
                  {link.label}
                </Link>
              ))}

              {/* Lab Tests Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsLabOpen(true)}
                onMouseLeave={() => setIsLabOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-all duration-300 hover:bg-primary/5 cursor-pointer"
                >
                  <FlaskConical size={16} className="text-primary animate-pulse" />
                  <span>Lab Tests A-Z</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isLabOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute right-0 top-full w-[450px] bg-white border border-slate-200 shadow-xl rounded-xl p-4 grid grid-cols-2 gap-x-4 gap-y-2 transition-all duration-300 origin-top-right z-50 ${isLabOpen
                    ? 'opacity-100 scale-100 translate-y-2 pointer-events-auto'
                    : 'opacity-0 scale-95 translate-y-0 pointer-events-none'
                    }`}
                >
                  <div className="col-span-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 pb-1 border-b border-slate-100 flex items-center gap-2">
                    <FlaskConical size={14} className="text-[#d81b47]" />
                    Lab Diagnoses Catalog (A-Z)
                  </div>
                  {labTests.map((test) => (
                    <Link
                      key={test.slug}
                      href={`/diagnostics/${test.slug}`}
                      className="text-xs font-semibold text-slate-600 hover:text-primary hover:bg-primary/5 px-2.5 py-1.5 rounded-lg transition-colors leading-relaxed block"
                      onClick={() => setIsLabOpen(false)}
                    >
                      {test.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu Drawer Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-[320px] sm:max-w-[360px] bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-border/50 bg-slate-50">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
              <img
                src="/logo.jpg"
                alt="Aggarwal Nursing Home Logo"
                className="h-10 w-auto object-contain rounded-md"
              />
              <span className="font-bold text-primary text-base tracking-tight">
                ANH
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-grow overflow-y-auto px-6 py-6 space-y-6">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Collapsible Lab Tests */}
              <div className="border-t border-slate-100 pt-3 mt-3">
                <button
                  onClick={() => setIsLabOpen(!isLabOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-foreground/80 hover:text-primary cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <FlaskConical size={18} className="text-primary" />
                    Lab Tests A-Z
                  </span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isLabOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isLabOpen ? 'max-h-[300px] overflow-y-auto pl-4 py-2 mt-1 space-y-1 bg-slate-50/50 rounded-xl border border-slate-50' : 'max-h-0'
                    }`}
                >
                  {labTests.map((test) => (
                    <Link
                      key={test.slug}
                      href={`/diagnostics/${test.slug}`}
                      className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      onClick={() => {
                        setIsLabOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {test.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-border/50 bg-slate-50 flex flex-col gap-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2.5 px-4 py-3.5 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 shadow-md transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Calendar size={18} />
              Schedule Appointment
            </Link>
            <a
              href="tel:+919266610335"
              className="flex items-center justify-center gap-2.5 px-4 py-3.5 text-sm font-bold text-red-700 bg-red-50 hover:bg-red-100 rounded-xl transition-all duration-200"
            >
              <AlertTriangle size={18} className="animate-pulse" />
              Emergency: (+91) 9266610335
            </a>
          </div>
        </div>
      </header>
  );
}
