'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, Heart } from 'lucide-react';

export default function AboutDepartment() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="about-department">
      {/* Background Decorative Circle */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8923C 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-12 right-12 w-24 h-24 opacity-[0.06] pointer-events-none dotted-pattern rounded-xl"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images Grid */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-[#C8923C]/5 rounded-3xl transform translate-x-3 translate-y-3 pointer-events-none rounded-br-[80px]" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8DFD0] aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-br-[80px]">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=900"
                alt="Healthcare professionals collaborating in premium consulting room"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Floating Legacy Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 bg-[#1B2A3D] text-white p-6 rounded-2xl shadow-2xl border border-white/10 hidden sm:flex items-center gap-4 max-w-[240px]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C8923C] flex items-center justify-center shrink-0">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Almost 100 Years</h4>
                <p className="text-xs text-white/60">Of medical and healthcare services trust</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Text & Stats */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 bg-[#C8923C] rounded-full" />
              <span className="text-[#C8923C] uppercase font-bold text-sm tracking-wider">About Our Departments</span>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A3D] leading-tight tracking-tight uppercase"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Excellence in Obstetrics, Gynaecology & Child Healthcare
            </h2>

            <div className="space-y-4 text-[#6B6B7B] leading-relaxed text-sm sm:text-base">
              <p>
                Aggarwal Nursing Home is a reputable healthcare institution with super-specialty wards and cutting-edge medical equipment. For nearly a century, we have served generations of patients with complete dedication, safety, and comfort.
              </p>
              <p>
                Our specialized department is designed to cater to all aspects of women\'s wellness and child health. From managing high-risk pregnancies and complex laparoscopic surgeries to providing advanced neonatal care in our PICU/NICU units, our focus remains on delivering a patient-first experience with zero compromise on quality and hygiene.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDF8F0] border border-[#E8DFD0] flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-[#C8923C]" />
                </div>
                <span className="text-sm font-semibold text-[#1B2A3D]">Safety & Hygiene First</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDF8F0] border border-[#E8DFD0] flex items-center justify-center shrink-0">
                  <Heart size={20} className="text-[#C8923C]" />
                </div>
                <span className="text-sm font-semibold text-[#1B2A3D]">Compassionate Staff</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 pt-6 border-t border-[#E8DFD0]/60">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C8923C] hover:text-[#A67830] transition-colors duration-300 group"
              >
                Learn More About Our Legacy
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
