'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, BookOpen, Stethoscope } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Photos', icon: ImageIcon },
  { id: 'advisories', label: 'Health Advisories & Banners', icon: BookOpen },
  { id: 'facilities', label: 'Our Facilities', icon: Stethoscope },
];

const galleryItems = [
  {
    id: 1,
    category: 'advisories',
    image: '/gallery/gallery-1.png',
  },
  {
    id: 2,
    category: 'advisories',
    image: '/gallery/gallery-2.png',
  },
  {
    id: 3,
    category: 'advisories',
    image: '/gallery/gallery-3.png',
  },
  {
    id: 4,
    category: 'advisories',
    image: '/gallery/gallery-6.png',
  },
  {
    id: 5,
    category: 'advisories',
    image: '/gallery/gallery-7.png',
  },
  {
    id: 6,
    category: 'advisories',
    image: '/gallery/gallery-8.png',
  },
  {
    id: 7,
    category: 'advisories',
    image: '/gallery/gallery-9.png',
  },
  {
    id: 8,
    category: 'advisories',
    image: '/gallery/gallery-10.png',
  },
  {
    id: 14,
    category: 'advisories',
    image: '/gallery/gallery-12.png',
  },
  {
    id: 15,
    category: 'advisories',
    image: '/gallery/gallery-13.png',
  },
  {
    id: 16,
    category: 'advisories',
    image: '/gallery/gallery-14.png',
  },
  {
    id: 17,
    category: 'advisories',
    image: '/gallery/gallery-15.png',
  },
  {
    id: 9,
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 10,
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 11,
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 12,
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 13,
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F0] flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Header Title */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-wider text-[#C8923C] uppercase mb-3">
              Aggarwal Nursing Home Gallery
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A3D] tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Gallery
            </h1>
            <div className="flex justify-center mt-5 gap-1.5">
              <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
              <span className="w-16 h-1 bg-[#C8923C] rounded-full" />
              <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#1B2A3D] text-white shadow-md shadow-[#1B2A3D]/10 scale-102'
                      : 'bg-white text-[#6B6B7B] border border-[#E8DFD0] hover:text-[#1B2A3D] hover:bg-[#FDF8F0]'
                  }`}
                >
                  <Icon size={16} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Grid Content */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white border border-[#E8DFD0] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer p-2"
                  onClick={() => setLightboxIndex(index)}
                >
                  {/* Card Image */}
                  <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#FDF8F0] flex items-center justify-center">
                    <img
                      src={item.image}
                      alt="Gallery Item"
                      className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-[#1B2A3D] shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-[110] cursor-pointer"
            >
              <X size={28} />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-[110] cursor-pointer"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-[110] cursor-pointer"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-5xl w-full flex flex-col items-center justify-center max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                transition={{ duration: 0.3 }}
                src={filteredItems[lightboxIndex].image}
                alt="Gallery Item"
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
