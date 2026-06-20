'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: '02',
    name: 'Dr. Manju Aggarwal',
    specialty: 'Sr. Consultant & Unit Head — Obs & Gynae',
    qualification: 'MBBS, PGDMCH',
    image: '/manju ji .jpeg',
    badge: 'Obstetrics & Gynaecology',
  },
  {
    id: '03',
    name: 'Dr. Sonali Aggarwal',
    specialty: 'Gynaecologist, Obstetrician & Infertility Specialist',
    qualification: 'MBBS & MD (KGMC Lucknow)',
    image: '/sonali ji_cropped.jpeg',
    badge: 'Gynaecology & Infertility',
  },
  {
    id: '01',
    name: 'Dr. Aditya Aggarwal',
    specialty: 'Sr. Consultant Pediatrician & Child Specialist',
    qualification: 'MBBS, MD (Pediatrics & Neonatology)',
    image: '/aditya.png',
    badge: 'Pediatrics & Neonatology',
  },
];

const AUTOPLAY_DELAY = 4000;

export default function DoctorCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, AUTOPLAY_DELAY);
  }, [emblaApi, stopAutoplay]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  const scrollTo = useCallback((i: number) => {
    emblaApi?.scrollTo(i);
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
      {/* Gold geometric backdrop */}
      <div
        className="absolute top-6 right-0 w-[88%] h-[94%] rounded-3xl pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 40%, #C8923C 100%)',
          transform: 'rotate(3deg)',
          zIndex: 0,
        }}
      />

      {/* Carousel viewport */}
      <div ref={emblaRef} className="relative w-full overflow-hidden rounded-3xl" style={{ zIndex: 1 }}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0"
              style={{ aspectRatio: '4/5' }}
            >
              {/* Doctor Image */}
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Specialty badge — top */}
              <div className="absolute top-5 left-5">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white border border-white/30"
                  style={{ background: 'rgba(200, 146, 60, 0.85)', backdropFilter: 'blur(8px)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {slide.badge}
                </span>
              </div>

              {/* Doctor info — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-1">
                  {slide.qualification}
                </p>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-1"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {slide.name}
                </h3>
                <p className="text-white/80 text-sm leading-snug mb-5">
                  {slide.specialty}
                </p>
                <a
                  href={`/doctors/${slide.id}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-[#1B2A3D] bg-white rounded-full hover:bg-[#FDF8F0] transition-all duration-300 hover:scale-105"
                >
                  View Profile
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons — show on hover */}
      <button
        onClick={scrollPrev}
        aria-label="Previous doctor"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
        style={{ zIndex: 10 }}
      >
        <ChevronLeft size={20} className="text-[#1B2A3D]" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next doctor"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
        style={{ zIndex: 10 }}
      >
        <ChevronRight size={20} className="text-[#1B2A3D]" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 right-7 flex gap-2" style={{ zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? 'w-6 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
