'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    relation: '',
    rating: 5,
    text: 'The care my sister received at Aggarwal Nursing Home was exceptional. The staff treated her with such dignity and compassion. The doctors were always available and kept us informed about every step of his treatment.',
    image: '/images/testimonials/user-1.jpg',
  },
  {
    name: 'Priya Sharma',
    relation: '',
    rating: 5,
    text: 'I cannot thank the Aggarwal nursing Home team enough for their incredible support during my neice recovery. The nursing staff was attentive, the facilities were top-notch, and the environment felt like home.',
    image: '/images/testimonials/user-2.jpg',
  },
  {
    name: 'Amit Verma',
    relation: 'Patient',
    rating: 5,
    text: 'After my surgery, the post-operative care I received was outstanding. The physiotherapy team helped me regain mobility much faster than expected. Truly a world-class nursing facility.',
    image: '/images/testimonials/user-3.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decorative */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8923C 0%, transparent 70%)' }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-wider text-[#C8923C] uppercase mb-3">
            Patient Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A3D] tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What Our Patients Say
          </h2>
          <div className="flex justify-center mt-5 gap-1.5">
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
            <span className="w-16 h-1 bg-[#C8923C] rounded-full" />
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="group bg-white border border-[#E8DFD0] rounded-3xl p-8 card-hover-lift relative"
            >
              {/* Gold quote mark */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-[#C8923C]/10 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#C8923C"
                    className="text-[#C8923C]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-[#6B6B7B] leading-relaxed mb-7 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-4 pt-5 border-t border-[#E8DFD0]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C8923C]/20"
                />
                <div>
                  <h4
                    className="text-base font-bold text-[#1B2A3D]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#C8923C] font-medium mt-0.5">
                    {testimonial.relation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
