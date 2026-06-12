"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const specialties = [
  {
    image: "/specialities/plastic-surgery.jpg",
    title: "Plastic Surgery",
    slug: "plastic-surgery",
  },
  {
    image: "/specialities/infertility.jpg",
    title: "Infertility Treatment",
    slug: "infertility-treatment",
  },
  {
    image: "/specialities/physiotherapy.jpg",
    title: "Physiotherapy",
    slug: "physiotherapy",
  },
  {
    image: "/specialities/cardiology.jpg",
    title: "Cardiology",
    slug: "cardiology",
  },
  {
    image: "/specialities/orthopedic.jpg",
    title: "Orthopedic Care",
    slug: "orthopedic-care",
  },
  {
    image: "/specialities/neurology.jpg",
    title: "Neurology",
    slug: "neurology",
  },
  {
    image: "/specialities/pediatrics.jpg",
    title: "Pediatrics",
    slug: "pediatric-neonatology",
  },
  {
    image: "/specialities/dentistry.jpg",
    title: "Dental Care",
    slug: "dental-care",
  },
  {
    image: "/specialities/dermatology.jpg",
    title: "Dermatology",
    slug: "dermatology",
  },
  {
    image: "/specialities/urology.jpg",
    title: "Urology",
    slug: "urology",
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
    <section className="py-12 bg-slate-100 relative overflow-hidden">
      <div className="w-full px-2">

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
            className="
                          absolute
                          left-2
                          md:-left-5
                          top-1/2
                          -translate-y-1/2
                         z-20
                         bg-green-500
                         text-white
                         p-2
                        md:p-3
                        rounded-full
                        shadow-lg
                        "
          >
            <ChevronLeft />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {specialties.map((item, index) => (
                <div
                  key={index}
                  className="
                            flex-[0_0_100%]
                            sm:flex-[0_0_50%]
                            lg:flex-[0_0_33.333%]
                            min-w-0
                            px-3
                            "
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">

                    <Link href={`/services/${item.slug}`} className="block overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    <div className="p-6">
                      <span className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                        Services
                      </span>

                      <h3 className="text-2xl font-bold mt-6 mb-4">
                        <Link href={`/services/${item.slug}`} className="hover:text-green-600 transition-colors">
                          {item.title}
                        </Link>
                      </h3>

                      <Link href={`/services/${item.slug}`} className="font-semibold text-gray-700 hover:text-green-600 inline-block transition-colors">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="
                    absolute
                    right-2
                    md:-right-5
                    top-1/2
                   -translate-y-1/2
                    z-20
                     bg-green-500
                    text-white
                     p-2
                    md:p-3
                   rounded-full
                   shadow-lg
                   "
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
