"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const specialties = [
  {
    image: "/specialities/plastic-surgery.jpg",
    title: "Plastic Surgery",
  },
  {
    image: "/specialities/infertility.jpg",
    title: "Infertility Treatment",
  },
  {
    image: "/specialities/physiotherapy.jpg",
    title: "Physiotherapy",
  },
  {
    image: "/specialities/cardiology.jpg",
    title: "Cardiology",
  },
  {
    image: "/specialities/orthopedic.jpg",
    title: "Orthopedic Care",
  },
  {
    image: "/specialities/neurology.jpg",
    title: "Neurology",
  },
];

export default function FeaturesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our Specialities
          </h2>

          <div className="flex justify-center mt-4 gap-2">
            <span className="w-8 h-1 bg-pink-500"></span>
            <span className="w-16 h-1 bg-pink-500"></span>
            <span className="w-8 h-1 bg-pink-500"></span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-green-500 text-white p-3 rounded"
          >
            <ChevronLeft />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {specialties.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_33.333%] min-w-0 px-4"
                >
                  <div className="bg-white shadow-lg overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />

                    <div className="p-6">
                      <span className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                        Services
                      </span>

                      <h3 className="text-2xl font-bold mt-6 mb-4">
                        {item.title}
                      </h3>

                      <button className="font-semibold text-gray-700 hover:text-green-600">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-green-500 text-white p-3 rounded"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
