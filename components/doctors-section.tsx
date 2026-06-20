'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const doctors = [
  {
    id: '02',
    name: 'Dr. Manju Aggarwal',
    qualification: 'MBBS, PGDMCH',
    designation: 'Director',
    experience: ' Ex Medical Officer, Kasturba Hospital ,More than 48 years of experience ',
    hospital: 'Aggarwal Nursing Home, Delhi',
    specialization: 'Ultrasonologist, Obstetrics & Gynaecology, High-Risk Pregnancy, Maternity Care',
    image: '/manju ji .jpeg',
    description: 'Dr. Manju Aggarwal is the owner of Aggarwal Nursing Home with over 48 years of clinical excellence, specializing in high-risk pregnancy care.',
  },
  {
    id: '03',
    name: 'Dr. Sonali Aggarwal',
    qualification: 'MBBS & MD (KGMC Lucknow)',
    designation: 'Gynaecology & Obstetrics, Infertility Specialist',
    experience: 'Ex SR KGMC, SRHC Hospital, Narela DDU Delhi, More than 12 years of experience',
    hospital: 'Aggarwal Nursing Home, Delhi',
    specialization: 'Ultrasonologist,Gynaecology, Obstetrics Care, Infertility & Women\'s Wellness Specialist',
    image: '/sonali ji_cropped.jpeg',
    description: 'Dr. Sonali Aggarwal is a dynamic and dedicated obstetrician and gynaecologist with over 12 years of expertise in women\'s wellness and adolescent care.',
  },
  {
    id: '01',
    name: 'Dr. Aditya Aggarwal',
    qualification: 'MBBS, MD (Pediatrics & Neonatology Fellowship)',
    designation: 'Sr. Consultant Pediatrician & Child Specialist',
    experience: 'Ex SR Safdarjung Hospital, Ex Asst. Professor SAIMS, Hapur, More than 15 years of experience',
    hospital: 'Aggarwal Nursing Home, Delhi',
    specialization: 'Pediatrics, Neonatology Care, Vaccination & Childhood Nutrition Specialist',
    image: '/aditya.png',
    description: 'Dr. Aditya Aggarwal is a renowned medical practitioner who has been serving the community with dedication and expertise for over 15 years. Visit ',
    website: 'https://dradityaaggarwal.com',
  },
];
export default function DoctorsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden" id="doctors">
      {/* Background decorative */}
      <div
        className="absolute top-10 left-10 w-28 h-28 opacity-[0.06] pointer-events-none dotted-pattern rounded-xl"
      />
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
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
            Our Experts
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A3D] tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Meet Our Expert Healthcare Team
          </h2>
          <div className="flex justify-center mt-5 gap-1.5">
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
            <span className="w-16 h-1 bg-[#C8923C] rounded-full" />
            <span className="w-8 h-1 bg-[#C8923C]/40 rounded-full" />
          </div>
        </motion.div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group bg-[#FDF8F0] border border-[#E8DFD0] rounded-3xl overflow-hidden card-hover-lift flex flex-col h-full"
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden w-full aspect-[4/5] shrink-0">
                <div className="relative w-full h-full border-b-2 border-[#C8923C]/20">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gold frame overlay */}
                  <div className="absolute inset-4 border-2 border-[#C8923C]/30 rounded-2xl pointer-events-none" />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex-grow p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl font-bold text-[#1B2A3D] mb-1 group-hover:text-[#C8923C] transition-colors duration-300"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {doctor.name}
                  </h3>

                  <p className="text-sm font-semibold text-[#C8923C] mb-2">
                    {doctor.qualification}
                  </p>

                  <p className="text-sm text-[#6B6B7B] mb-5 leading-relaxed min-h-[72px]">
                    {doctor.description}
                    {doctor.website && (
                      <a
                        href={doctor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C8923C] hover:underline font-semibold inline-flex items-center gap-0.5"
                      >
                        {doctor.website.replace('https://', '')}
                      </a>
                    )}
                  </p>

                  <div className="space-y-2.5 mb-6 text-left">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-[#6B6B7B] uppercase tracking-wider mt-0.5 shrink-0 w-24">Designation</span>
                      <span className="text-sm text-[#1B2A3D] font-medium">{doctor.designation}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-[#6B6B7B] uppercase tracking-wider mt-0.5 shrink-0 w-24">Hospital</span>
                      <span className="text-sm text-[#C8923C] font-medium">{doctor.hospital}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-[#6B6B7B] uppercase tracking-wider mt-0.5 shrink-0 w-24">Expertise</span>
                      <span className="text-sm text-[#1B2A3D] line-clamp-2">{doctor.specialization}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[#6B6B7B] font-medium mb-6 italic border-t border-[#E8DFD0]/60 pt-4">
                    {doctor.experience}
                  </p>

                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="inline-flex items-center justify-center w-full px-7 py-3 text-sm font-bold text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C8923C]/25 hover:scale-[1.02] active:scale-98"
                    style={{
                      background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 100%)',
                    }}
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
