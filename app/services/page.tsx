'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'All Kinds of Deliveries (Including High-Risk)',
    slug: 'deliveries',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Safe and expert management of normal, cesarean, and high-risk deliveries to ensure the well-being of both mother and baby.',
  },
  {
    title: 'All Gynae Surgeries',
    slug: 'gynae-surgeries',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Comprehensive surgical care for fibroids, cysts, endometriosis, and other gynaecological conditions using advanced techniques.',
  },
  {
    title: 'Laparoscopic & Robotic Gynae Surgeries',
    slug: 'laparoscopic-robotic-surgeries',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Minimally invasive procedures for faster recovery, less pain, and minimal scarring in complex gynae cases.',
  },
  {
    title: 'Cosmetic Gynaecology',
    slug: 'cosmetic-gynaecology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Aesthetic and functional procedures like vaginal rejuvenation and labiaplasty to enhance confidence and comfort.',
  },
  {
    title: 'Infertility Treatment',
    slug: 'infertility-treatment',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Personalized evaluation and treatment plans for couples trying to conceive, including advanced reproductive care.',
  },
  {
    title: 'Preventive Health Checks',
    slug: 'preventive-health-checks',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Routine screenings like Pap smears, breast exams, and pelvic ultrasounds for early detection and wellness.',
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
          {/* Header Title */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-wider text-[#C8923C] uppercase mb-3">
              Department of Obstetrics & Gynaecology
            </span>
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

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
