'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Stethoscope, Baby } from 'lucide-react';
import { motion } from 'framer-motion';

const gynaecologyServices = [
  {
    title: 'All Kinds of Deliveries (Including High-Risk)',
    slug: 'deliveries',
    image: '/images/gynae/deliveries.jpg',
    description: 'Safe and expert management of normal, cesarean, and high-risk deliveries to ensure the well-being of both mother and baby.',
  },
  {
    title: 'All Gynae Surgeries',
    slug: 'gynae-surgeries',
    image: '/images/gynae/hospital-gynae-surgeries.png',
    description: 'Comprehensive surgical care for fibroids, cysts, endometriosis, and other gynaecological conditions using advanced techniques.',
  },
  {
    title: 'Laparoscopic & Robotic Gynae Surgeries',
    slug: 'laparoscopic-robotic-surgeries',
    image: '/images/gynae/laparoscopic.jpg',
    description: 'Minimally invasive procedures for faster recovery, less pain, and minimal scarring in complex gynae cases.',
  },
  {
    title: 'Cosmetic Gynaecology',
    slug: 'Cosmetic Gynaecology',
    image: '/images/gynae/cosmetic.jpg',
    description: "Aesthetic and functional procedures like vaginal rejuvenation and labiaplasty to enhance women's intimate health and confidence.",
  },
  {
    title: 'Infertility Treatment',
    slug: 'infertility-treatment',
    image: '/images/gynae/infertility.jpg',
    description: 'Personalized evaluation and treatment plans for couples trying to conceive, including ovulation tracking and hormonal therapy.',
  },
  {
    title: 'Preventive Health Checks',
    slug: 'preventive-health-checks',
    image: '/images/gynae/hospital-preventive-health.png',
    description: 'Routine screenings like Pap smears, breast exams, and pelvic ultrasounds for early detection and better health outcomes.',
  },
];

const pediatricServices = [
  {
    title: 'Pediatric Care',
    slug: 'pediatric-care',
    image: '/images/pediatrics/care.jpg',
    description: 'Comprehensive medical care for children of all ages — from routine check-ups to treatment of common childhood illnesses.',
  },
  {
    title: 'Newborn / Neonatal Care',
    slug: 'neonatal-care',
    image: '/images/pediatrics/neonatal.jpg',
    description: 'Specialized care for newborns, including feeding support, jaundice management, and early development monitoring.',
  },
  {
    title: 'Vaccinations',
    slug: 'vaccinations',
    image: '/images/pediatrics/vaccinations.jpg',
    description: 'Timely immunizations as per recommended schedules to protect children from preventable diseases.',
  },
  {
    title: 'Hospitalization for Pediatric Illnesses',
    slug: 'pediatric-hospitalization',
    image: '/images/pediatrics/hospitalization.jpg',
    description: 'Expert care for children requiring admission due to serious infections, dehydration, or other acute conditions.',
  },
  {
    title: 'PICU / NICU Care',
    slug: 'nicu-care',
    image: '/images/pediatrics/nicu.jpg',
    description: 'Advanced care and coordination for critically ill newborns and children requiring intensive care and support.',
  },
  {
    title: 'Preventive Health Checks',
    slug: 'pediatric-health-checks',
    image: '/images/pediatrics/health-checks.jpg',
    description: 'Regular check-ups to monitor growth, development, and detect health issues early for timely intervention.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] flex flex-col">
      <Header />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">

          {/* ─── Gynaecology Section ─── */}
          <div className="text-center mb-16" id="gynaecology">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C8923C]/15 to-[#C8923C]/5 flex items-center justify-center">
                <Stethoscope size={16} className="text-[#C8923C]" />
              </div>
              <span className="text-sm font-semibold tracking-wider text-[#C8923C] uppercase">
                Department of Obstetrics & Gynaecology
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A3D] tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Our Expert Gynaecology Services
            </h1>
            <div className="flex justify-center mt-5 gap-1.5">
              <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
              <span className="w-16 h-1 bg-[#C8923C] rounded-full" />
              <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
            </div>
          </div>

          {/* Gynaecology Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {gynaecologyServices.map((service) => (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                className="group bg-white border border-[#E8DFD0] rounded-3xl overflow-hidden card-hover-lift flex flex-col"
              >
                {/* Card Image */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-bold text-[#1B2A3D] mb-3 group-hover:text-[#C8923C] transition-colors duration-300 min-h-[56px] flex items-start"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B6B7B] leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8923C] hover:text-[#A67830] transition-colors duration-300 group/link"
                  >
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ─── Divider ─── */}
          <div className="my-20 flex items-center gap-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#E8DFD0] to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#C8923C]/30" />
            <div className="w-3 h-3 rounded-full bg-[#C8923C]/50" />
            <div className="w-2 h-2 rounded-full bg-[#C8923C]/30" />
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#E8DFD0] to-transparent" />
          </div>

          {/* ─── Pediatrics Section ─── */}
          <div className="text-center mb-16" id="pediatrics">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5BA3D9]/15 to-[#5BA3D9]/5 flex items-center justify-center">
                <Baby size={16} className="text-[#5BA3D9]" />
              </div>
              <span className="text-sm font-semibold tracking-wider text-[#5BA3D9] uppercase">
                Pediatric Department
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A3D] tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Our Expert Pediatric Services
            </h2>
            <div className="flex justify-center mt-5 gap-1.5">
              <span className="w-8 h-1 bg-[#5BA3D9]/40 rounded-full" />
              <span className="w-16 h-1 bg-[#5BA3D9] rounded-full" />
              <span className="w-8 h-1 bg-[#5BA3D9]/40 rounded-full" />
            </div>
          </div>

          {/* Pediatric Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pediatricServices.map((service) => (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                className="group bg-white border border-[#E8DFD0] rounded-3xl overflow-hidden card-hover-lift flex flex-col"
              >
                {/* Card Image */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-bold text-[#1B2A3D] mb-3 group-hover:text-[#5BA3D9] transition-colors duration-300 min-h-[56px] flex items-start"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B6B7B] leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#5BA3D9] hover:text-[#3D8BC4] transition-colors duration-300 group/link"
                  >
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
