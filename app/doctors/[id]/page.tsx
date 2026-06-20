'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle,
  Calendar,
  Award,
  Clock,
  HeartPulse,
  Languages,
  GraduationCap,
  Briefcase
} from 'lucide-react';

interface DoctorInfo {
  name: string;
  designation: string;
  image: string;
  qualifications: string;
  experience: string;
  bio: string;
  expertise: string[];
  timings: string;
  languages: string[];
  faqs: { q: string; a: string }[];
}

const doctorsData: Record<string, DoctorInfo> = {
  '01': {
    name: 'Dr. Aditya Aggarwal',
    designation: 'Sr. Consultant Pediatrician & Child Specialist',
    image: '/aditya.png',
    qualifications: 'MBBS, MD (Pediatrics & Neonatology)',
    experience: '15+ Years of Clinical Excellence',
    bio: 'Dr. Aditya Aggarwal is a highly respected pediatrician and child specialist in Delhi with over 15 years of trusted experience. He specializes in comprehensive child healthcare, advanced pediatric treatments, immunization calendars, and neonatal intensive care. He is dedicated to supporting child development and ensuring the well-being of children from infancy through adolescence. You can learn more and book consultations directly via his website: [dradityaaggarwal.com](https://dradityaaggarwal.com).',
    expertise: [
      'General Pediatrics & Developmental Milestones',
      'Neonatal Care & Newborn Resuscitation',
      'Childhood Asthma & Allergy Control',
      'Pediatric Vaccinations & Nutritional Guidance'
    ],
    timings: 'Mon – Sat: 11:00 AM – 2:00 PM, 6:00 PM – 8:30 PM',
    languages: ['English', 'Hindi'],
    faqs: [
      {
        q: 'Does Dr. Aditya Aggarwal offer online consultation bookings?',
        a: 'Yes, patients can book consults via the Aggarwal Nursing Home portal, or read more details directly on his personal site: dradityaaggarwal.com.'
      },
      {
        q: 'What age groups does Dr. Aditya Aggarwal treat?',
        a: 'He provides comprehensive healthcare services for newborns, infants, toddlers, children, and young adolescents up to 18 years of age.'
      }
    ]
  },
  '02': {
    name: 'Dr. Manju Aggarwal',
    designation: 'Sr. Consultant & Unit Head (Obs & Gynae)',
    image: '/manju ji .jpeg',
    qualifications: 'MBBS, MS (Obs & Gynae)',
    experience: '48+ Years of Clinical Excellence',
    bio: 'Dr. Manju Aggarwal is the owner of Aggarwal Nursing Home with over 48 years of clinical excellence, specializing in high-risk pregnancy care. Specialized in high-risk pregnancy management and maternity care, she provides comprehensive, compassionate care to women at all stages of life, from adolescent health to menopausal support.',
    expertise: [
      'High-Risk Pregnancy Care & Deliveries',
      'Obstetric Emergencies & Maternity Services',
      'Infertility Evaluation & Reproductive Health',
      'Geriatric Gynaecology & Menopause Support'
    ],
    timings: 'Mon – Sat: 11:00 AM – 2:00 PM, 6:00 PM – 8:00 PM',
    languages: ['English', 'Hindi'],
    faqs: [
      {
        q: 'Are fertility counseling sessions private?',
        a: 'Absolutely. We maintain 100% confidentiality for all fertility evaluations, testing, and treatment consultations.'
      },
      {
        q: 'Do you offer routine screening tests on-site?',
        a: 'Yes, ultrasound scanning, Pap smears, and general hormonal screenings are conducted in-house for your convenience.'
      }
    ]
  },
  '03': {
    name: 'Dr. Sonali Aggarwal',
    designation: 'Consultant Obstetrician & Gynaecologist',
    image: '/sonali ji_cropped.jpeg',
    qualifications: 'MBBS, MS (Obs & Gynae)',
    experience: '12+ Years of Clinical Excellence',
    bio: 'Dr. Sonali Aggarwal is a dynamic and dedicated gynaecologist and obstetrician with over 12 years of expertise. Specializing in high-risk pregnancies, adolescent gynaecological health, and women\'s wellness, she is committed to providing comprehensive healthcare services. Dr. Sonali takes a holistic and supportive approach to treatment, empowering women through education and highly personalized medical care.',
    expertise: [
      'Obstetrics Care & High-Risk Pregnancies',
      'Adolescent Gynaecological Care & PCOD/PCOS',
      'Infertility & Reproductive Endocrinology',
      'Preventative Health & Women\'s Wellness'
    ],
    timings: 'Mon – Sat: 10:00 AM – 2:00 PM, 5:00 PM – 7:00 PM',
    languages: ['English', 'Hindi'],
    faqs: [
      {
        q: 'What services does Dr. Sonali Aggarwal provide for high-risk pregnancy?',
        a: 'Dr. Sonali offers personalized prenatal monitoring, regular screenings, advanced ultrasound coordination, and comprehensive delivery plans tailored to safeguard both mother and child.'
      },
      {
        q: 'How can I consult for PCOS or PCOD concerns?',
        a: 'You can book a consultation during her regular timing. Dr. Sonali provides complete diagnostic tests, lifestyle counseling, and medical management options for PCOD/PCOS.'
      }
    ]
  },
  //  '04': {
  //     name: 'Dr. Ritu Agarwal',
  //     designation: 'Paediatrician',
  //     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=600',
  //     qualifications: 'MBBS, MD (Paediatrics), Fellowship in Neonatology',
  //     experience: '10+ Years of Warm Care',
  //     bio: 'Dr. Ritu Agarwal is a gentle and caring paediatrician and neonatologist. She specializes in newborn care, developmental assessments, childhood vaccinations, and managing acute and chronic paediatric illnesses, ensuring the health and happiness of children from infancy through adolescence.',
  //     expertise: [
  //       'Neonatal Intensive Care & Newborn Resuscitation',
  //       'Childhood Immunization & Vaccine Counseling',
  //       'Pediatric Asthma, Allergies, & Chronic Care',
  //       'Developmental Milestones & Nutrition Assessments'
  //     ],
  //     timings: 'Mon – Sat: 10:00 AM – 1:00 PM, 5:00 PM – 7:00 PM',
  //     languages: ['English', 'Hindi'],
  //     faqs: [
  //       {
  //         q: 'Can I follow up via telephone in case of minor concerns?',
  //         a: 'Yes, for established patients, brief follow-ups or clarifications on dosage can be guided via our nursing line, but major symptoms require physical assessment.'
  //       },
  //       {
  //         q: 'Do you offer a vaccination calendar?',
  //         a: 'Yes, we provide and manage the complete national and international vaccination schedule for infants and growing children.'
  //       }
  //     ]
  //   }
};

interface PageProps {
  params: Promise<{ id: string }>;
}

// Helper to render markdown links as active HTML links
const renderBioWithLinks = (text: string) => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, index) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return (
        <a
          key={index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C8923C] hover:underline font-semibold"
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
};

export default function DoctorDetail({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;

  // Find doctor or fallback to the first one (Dr. A. K. Agarwal)
  const doctor = doctorsData[id] || doctorsData['01'];

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill in Name, Phone Number, and Date.');
      return;
    }
    setIsBooked(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col">
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#d81b47] font-semibold text-sm sm:text-base mb-8 transition-colors select-none group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column: Picture, Key Stats, Booking Card */}
            <div className="lg:col-span-4 space-y-8">

              {/* Doctor Quick Profile Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col items-center text-center">

                {/* Circular Portrait Frame */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full flex items-center justify-center p-2 border-2 border-dashed border-[#b8c9b3]/80 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden aspect-square border border-slate-100 shadow-inner">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h1 className="text-2xl font-extrabold text-[#1e2f41]">
                  {doctor.name}
                </h1>
                <p className="text-sm font-semibold text-muted-foreground mt-1.5 uppercase tracking-wider">
                  {doctor.designation}
                </p>

                <div className="w-full border-t border-slate-100 my-6" />

                {/* Quick Info Grid */}
                <div className="w-full space-y-4 text-left">

                  {/* Experience */}
                  <div className="flex gap-3">
                    <Award className="text-[#d81b47] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase">Experience</h4>
                      <p className="text-sm font-semibold text-slate-700">{doctor.experience}</p>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex gap-3">
                    <Clock className="text-[#d81b47] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase">Consultation Timings</h4>
                      <p className="text-sm font-semibold text-slate-700">{doctor.timings}</p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex gap-3">
                    <Languages className="text-[#d81b47] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase">Languages Spoken</h4>
                      <p className="text-sm font-semibold text-slate-700">{doctor.languages.join(', ')}</p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Booking Consultation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                {!isBooked ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                      <Calendar className="text-[#d81b47]" size={22} />
                      <h3 className="text-xl font-bold text-[#1e2f41]">Book Appointment</h3>
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder=""
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#d81b47] focus:ring-1 focus:ring-[#d81b47] transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder=""
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#d81b47] focus:ring-1 focus:ring-[#d81b47] transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Date & Time Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date *</label>
                        <input
                          type="date"
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#d81b47] transition-all"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pref. Time</label>
                        <input
                          type="time"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#d81b47] transition-all"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Additional Notes</label>
                      <textarea
                        rows={3}
                        placeholder="State reason for visit..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#d81b47] focus:ring-1 focus:ring-[#d81b47] transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#d81b47] hover:bg-[#b01338] text-white font-bold text-sm tracking-wide rounded-lg shadow-sm hover:shadow transition-all duration-300 select-none cursor-pointer"
                    >
                      Book Consultation
                    </button>
                  </form>
                ) : (
                  <div className="py-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-100 shadow-inner">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e2f41] mb-2">Booking Confirmed!</h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-8">
                      Thank you, <span className="font-semibold text-slate-700">{formData.name}</span>. Our representative will contact you shortly on <span className="font-semibold text-slate-700">{formData.phone}</span> to confirm your session with <span className="font-semibold text-slate-700">{doctor.name}</span>.
                    </p>
                    <button
                      onClick={() => {
                        setIsBooked(false);
                        setFormData({ name: '', phone: '', date: '', time: '', message: '' });
                      }}
                      className="py-2.5 px-6 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Book Another
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Detailed Biography, Expertise, FAQs */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-10">

              {/* Doctor Bio */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-4 flex items-center gap-2.5">
                  <GraduationCap className="text-[#d81b47]" size={24} />
                  Professional Biography
                </h2>
                <div className="space-y-3">
                  <p className="text-sm font-bold text-slate-500">
                    Qualifications: <span className="text-slate-700 font-semibold">{doctor.qualifications}</span>
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {renderBioWithLinks(doctor.bio)}
                  </p>
                </div>
              </div>

              {/* Areas of Clinical Expertise */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-6 flex items-center gap-2.5">
                  <HeartPulse className="text-[#d81b47]" size={24} />
                  Clinical Focus & Specialties
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {doctor.expertise.map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <span className="w-2.5 h-2.5 bg-[#8cb069] rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm sm:text-base font-semibold leading-normal">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Work Experience Summary */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-4 flex items-center gap-2.5">
                  <Briefcase className="text-[#d81b47]" size={24} />
                  Clinical Standards & Practice
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  All clinical treatments directed by our medical experts adhere strictly to global healthcare safety standards, clinical sanitation protocols, and compassionate ethical guidelines. We utilize advanced medical systems to ensure patient diagnostics are precise, leading to higher care satisfaction and comfort.
                </p>
              </div>

              {/* Doctor FAQs */}
              {doctor.faqs.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h2 className="text-2xl font-bold text-[#1e2f41] mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {doctor.faqs.map((faq, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="font-bold text-[#1e2f41] text-base sm:text-lg">Q. {faq.q}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base pl-5 border-l-2 border-slate-200">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
