'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Calendar, AlertTriangle, Clock } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Our Empanelment', href: '/empanelment' },
    { label: 'Services', href: '/services' },
    { label: 'Diagnostics', href: '/diagnostics' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Sub-header / Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left: Hours */}
            <div className="hidden sm:flex items-center gap-2 opacity-90">
              <Clock size={14} />
              <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
            </div>

            {/* Right: Appointment & Emergency */}
            <div className="flex items-center gap-6 ml-auto">
              <Link
                href="/contact"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Calendar size={14} />
                <span className="hidden xs:inline">Schedule Appointment</span>
                <span className="xs:hidden">Appointment</span>
              </Link>

              <div className="w-px h-4 bg-primary-foreground/30" />

              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
              >
                <AlertTriangle size={14} className="text-red-300 animate-pulse" />
                <span>Emergency:</span>
                <Phone size={14} />
                <span>+91 123-456-7890</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-bold text-lg">CH</span>
              </div>
              <span className="font-bold text-primary text-xl hidden sm:inline tracking-tight group-hover:text-accent transition-colors duration-300">
                CareHub
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
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="px-4 pb-4 pt-2 border-t border-border/50 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-border/50 flex flex-col gap-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary bg-primary/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <Calendar size={16} />
                Schedule Appointment
              </Link>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-red-600 bg-red-50 rounded-lg"
              >
                <AlertTriangle size={16} />
                Emergency: +91 123-456-7890
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
