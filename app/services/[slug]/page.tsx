'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Calendar, ShieldCheck, HeartPulse, Clock } from 'lucide-react';

const serviceData: Record<string, {
  title: string;
  tagline: string;
  image: string;
  description: string;
  facilities: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}> = {
  // ─── Gynaecology Services ───
  deliveries: {
    title: 'All Kinds of Deliveries (Including High-Risk)',
    tagline: 'Safe, compassionate care for normal, cesarean, and high-risk deliveries',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our maternity unit provides state-of-the-art delivery services centering on safety, comfort, and immediate neonatal support. From normal physiological births to complex high-risk conditions requiring critical monitoring, our expert obstetricians and specialized teams are here for you 24/7.',
    facilities: [
      'State-of-the-art fetal heart rate monitoring and diagnostics',
      'Fully equipped labor, delivery, and recovery suites',
      '24/7 coverage by senior obstetricians and pediatric consultants',
      'Immediate access to modern Neonatal ICU (NICU) if required',
      'Comprehensive postpartum care, nutrition advice, and lactation support'
    ],
    benefits: [
      'High safety record in managing complex maternal disorders and multiple births',
      'Tailored birth plans designed to respect and match family preferences',
      'Multi-disciplinary critical care backup for pre-eclampsia and gestational complications'
    ],
    faqs: [
      {
        q: 'What makes a delivery high-risk?',
        a: 'A delivery is considered high-risk when there are factors that could affect the mother or baby\'s health. This includes pre-existing conditions like diabetes or hypertension, advanced maternal age, multiple births, or previous obstetric complications.'
      },
      {
        q: 'Do you offer options for pain relief during labor?',
        a: 'Yes, we offer comprehensive pain relief options, including epidural analgesia (painless labor) administered by senior anesthesiologists, to ensure a comfortable delivery experience.'
      }
    ]
  },
  'gynae-surgeries': {
    title: 'All Gynae Surgeries',
    tagline: 'Comprehensive surgical care for gynaecological conditions',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'We perform a wide spectrum of surgical procedures to treat conditions such as uterine fibroids, ovarian cysts, pelvic organ prolapse, and severe endometriosis. Our focus is on clinical excellence, absolute safety, and personalized post-operative recovery support.',
    facilities: [
      'Modern modular operation theaters with strict sterilization control',
      'High-resolution ultrasound and diagnostic mapping before surgery',
      'Comfortable pre-operative prep and dedicated recovery wards',
      'Continuous post-surgical pain management and vital signs monitoring'
    ],
    benefits: [
      'Surgically led by senior consulting gynaecologists with extensive experience',
      'Strict adherence to international clinical pathways to reduce risk of infections',
      'Complete post-operative care plans including physiotherapy and follow-up mapping'
    ],
    faqs: [
      {
        q: 'What are the most common gynaecological surgeries?',
        a: 'Common surgeries include myomectomy (removal of fibroids), cystectomy (removal of ovarian cysts), and hysterectomy (removal of the uterus).'
      },
      {
        q: 'How long is the typical recovery period after surgery?',
        a: 'Recovery times vary by procedure. Major open surgeries generally require 4 to 6 weeks, while minor diagnostic surgeries allow normal activity within a few days.'
      }
    ]
  },
  'laparoscopic-robotic-surgeries': {
    title: 'Laparoscopic & Robotic Gynae Surgeries',
    tagline: 'Minimally invasive procedures for faster recovery and minimal scarring',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'We specialize in advanced minimally invasive keyhole procedures. Laparoscopic and robotic-assisted techniques allow us to perform complex surgeries through tiny incisions, offering superior precision and a much smoother recovery experience for our patients.',
    facilities: [
      'High-definition 3D laparoscopy towers and imaging equipment',
      'Specialized instruments designed for micro-surgical precision',
      'Anesthesia protocols optimized for rapid-recovery keyhole surgeries',
      'Outpatient setup for day-care laparoscopic procedures'
    ],
    benefits: [
      'Significantly less post-operative pain and reduced dependency on medication',
      'Minimal blood loss, lower infection rates, and cosmetic tiny scars',
      'Shorter hospital stays (often discharged within 24 hours) and quicker return to work'
    ],
    faqs: [
      {
        q: 'Are laparoscopic surgeries safe for complex fibroids?',
        a: 'Yes, with advanced laparoscopic instrumentation and experienced surgeons, even large fibroids and complex endometriosis can be safely treated using keyhole methods.'
      },
      {
        q: 'Do laparoscopic surgeries require general anesthesia?',
        a: 'Yes, laparoscopic procedures are performed under general anesthesia to ensure patient safety and total comfort during the surgery.'
      }
    ]
  },
  'cosmetic-gynaecology': {
    title: 'Cosmetic Gynaecology',
    tagline: 'Functional and aesthetic intimate treatments for enhanced wellness',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our cosmetic gynaecology clinic provides state-of-the-art treatments to address aesthetic and functional changes in intimate areas. We offer personalized, highly confidential care designed to restore tone, relieve discomfort, and boost self-confidence.',
    facilities: [
      'Private, highly confidential consulting and procedure suites',
      'Advanced non-surgical laser and radiofrequency rejuvenation devices',
      'Equipped units for minor surgical labiaplasty and vaginoplasty',
      'Post-treatment monitoring and recovery support'
    ],
    benefits: [
      'Safe, clinical-grade aesthetic and functional enhancement treatments',
      'Relief from local irritation and physical discomfort caused by structural changes',
      'Dedicated female healthcare team offering empathetic, private care'
    ],
    faqs: [
      {
        q: 'Is there downtime after non-surgical laser rejuvenation?',
        a: 'Non-surgical treatments have minimal to no downtime. Patients can resume light daily activities immediately, though refraining from strenuous exercise or intimate contact is advised for a few days.'
      },
      {
        q: 'Are these procedures purely cosmetic?',
        a: 'No, many procedures are functional. They address physical issues like local irritation, skin laxity, pain during exercise, and stress urinary incontinence.'
      }
    ]
  },
  'infertility-treatment': {
    title: 'Infertility Treatment',
    tagline: 'Comprehensive and compassionate support on your path to parenthood',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'We offer compassionate, comprehensive fertility assessments and treatment options. Our clinic focuses on identifying the root cause of fertility issues and designing customized solutions, including ovulation induction and intrauterine insemination (IUI).',
    facilities: [
      'Comprehensive male and female fertility evaluation services',
      'Ultrasound monitoring for follicular tracking and ovulation',
      'Advanced laboratory for Intrauterine Insemination (IUI)',
      'Hormonal assays and metabolic diagnostic testing',
      'Empathetic counseling and emotional wellness programs'
    ],
    benefits: [
      'Highly individualized treatment plans focusing on couple diagnostics',
      'Private, calm, and reassuring clinic environments',
      'Close coordination with reproductive endocrinology specialists'
    ],
    faqs: [
      {
        q: 'When should a couple seek fertility assistance?',
        a: 'We recommend scheduling a consultation after one year of regular unprotected intercourse if the female partner is under 35, or after six months if over 35.'
      },
      {
        q: 'What is Intrauterine Insemination (IUI)?',
        a: 'IUI is a fertility treatment where processed, concentrated sperm is placed directly inside the uterus around the time of ovulation to facilitate fertilization.'
      }
    ]
  },
  'preventive-health-checks': {
    title: 'Preventive Health Checks',
    tagline: 'Proactive screenings to safeguard women\'s wellness at every age',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Preventive care is key to maintaining women\'s wellness. Our specialized screening packages include routine physicals, Pap smears, breast screenings, and pelvic imaging to ensure early detection of any gynaecological conditions.',
    facilities: [
      'Comprehensive screening packages for different age groups',
      'High-resolution transvaginal and pelvic ultrasound scans',
      'Pap smear testing and high-risk HPV screening diagnostics',
      'Clinical breast examinations and bone mineral density (BMD) scans',
      'Specialized consultations for post-menopausal wellness'
    ],
    benefits: [
      'Early detection and management of silent gynaecological conditions',
      'Structured health mapping and customized preventative guidance',
      'Quick and stress-free screening setups'
    ],
    faqs: [
      {
        q: 'How often should women get a Pap smear?',
        a: 'Generally, women aged 21 to 65 are advised to have a Pap smear every three years. From age 30, co-testing with an HPV test every five years is another recommended screening pathway.'
      },
      {
        q: 'What does a gynaecological ultrasound check for?',
        a: 'A pelvic ultrasound checks the structure of the uterus, ovaries, fallopian tubes, and bladder, helping detect cysts, fibroids, polyps, or signs of infection.'
      }
    ]
  },

  // ─── Pediatric Services ───
  'pediatric-care': {
    title: 'Pediatric Care',
    tagline: 'Comprehensive medical care for children of all ages',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Pediatric Care division provides comprehensive healthcare for children from birth through adolescence. We offer preventive health services, routine developmental check-ups, immunizations, and prompt treatment for acute and chronic childhood illnesses.',
    facilities: [
      'Dedicated child-friendly consulting clinics',
      'General pediatric health screenings and assessments',
      'Asthma and childhood allergy management',
      'Growth and developmental delay mapping'
    ],
    benefits: [
      'Empathetic and highly trained senior pediatricians',
      'Child-friendly environment to reduce clinical anxiety',
      'Proactive guidelines on childhood nutrition and lifestyle'
    ],
    faqs: [
      {
        q: 'When should I take my child to a pediatrician?',
        a: 'You should visit for regular developmental check-ups (well-child visits) according to standard timelines, and whenever your child shows signs of illness, persistent fever, or developmental concerns.'
      }
    ]
  },
  'neonatal-care': {
    title: 'Newborn / Neonatal Care',
    tagline: 'Specialized medical care and nurturing for your newborn',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Neonatal Care unit specializes in the medical management and support of newborns during their first critical weeks of life. We provide supportive care for feeding guidance, jaundice monitoring, growth checks, and early neurological milestones.',
    facilities: [
      'Modern infant warming and monitoring systems',
      'Jaundice screening and photo-therapy units',
      'Expert breastfeeding and lactation counseling',
      'Newborn metabolic and hearing screening checks'
    ],
    benefits: [
      'Dedicated neonatal experts available 24/7',
      'Close coordination with the maternal delivery team',
      'Calm, warm, and highly supportive nursery environment'
    ],
    faqs: [
      {
        q: 'What is jaundice and how is it managed?',
        a: 'Newborn jaundice is a yellowing of the skin caused by high bilirubin levels. We monitor it closely and use safe phototherapy (light therapy) to help the baby\'s body clear it.'
      }
    ]
  },
  vaccinations: {
    title: 'Vaccinations',
    tagline: 'Protecting children from preventable diseases with timely immunizations',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'We provide complete vaccination services following the latest guidelines from pediatric boards and health ministries. Timely immunizations are essential to protect your child from life-threatening preventable infectious diseases.',
    facilities: [
      'Safe and temperature-controlled vaccine storage',
      'Full range of mandatory and optional immunizations',
      'Comprehensive electronic immunization record tracking',
      'Gentle administration techniques to minimize child distress'
    ],
    benefits: [
      'Genuine, clinical-grade vaccines sourced directly',
      'Expert guidance on delayed or catch-up immunization schedules',
      'Regular reminders for upcoming vaccine timelines'
    ],
    faqs: [
      {
        q: 'Are vaccines safe for newborns?',
        a: 'Yes, vaccines undergo extensive clinical safety checks before approval. The benefits of immunization in preventing severe diseases far outweigh minor temporary side effects like mild fever.'
      }
    ]
  },
  'pediatric-hospitalization': {
    title: 'Hospitalization for Pediatric Illnesses',
    tagline: 'Comfortable, round-the-clock clinical care for acute childhood conditions',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our dedicated pediatric hospitalization unit provides compassionate, round-the-clock clinical care for children requiring admission due to acute conditions like severe infections, dehydration, breathing difficulties, or recovery after pediatric procedures.',
    facilities: [
      'Comfortable pediatric inpatient rooms with parent stay-in facilities',
      '24/7 nursing care trained specifically in pediatric clinical skills',
      'Dedicated pediatric emergency response setup',
      'Advanced IV fluid management and clinical monitoring'
    ],
    benefits: [
      'Continuous medical surveillance by senior consultants',
      'Nurturing clinical environment specifically tailored for kids',
      'Empathetic care minimizing trauma and hospital anxiety'
    ],
    faqs: [
      {
        q: 'Can parents stay with the child during hospitalization?',
        a: 'Yes, we encourage and require at least one parent or guardian to stay with the hospitalized child. Rooms are fully equipped with comfortable bedding for the accompanying parent.'
      }
    ]
  },
  'nicu-care': {
    title: 'PICU / NICU Care',
    tagline: 'Advanced, intensive critical care for neonates and children',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Neonatal Intensive Care Unit (NICU) and Pediatric Intensive Care Unit (PICU) provide advanced, life-saving critical care for premature babies, low birth weight infants, and children facing critical health situations. Backed by cutting-edge life support systems, our team is ready 24/7.',
    facilities: [
      'Advanced neonatal incubators and thermal care systems',
      'Mechanical ventilation and high-frequency oscillatory support',
      'Continuous multi-parameter hemodynamic monitoring',
      'In-house arterial blood gas (ABG) and rapid lab diagnostics'
    ],
    benefits: [
      '1:1 specialized nurse-to-patient critical care ratio',
      'Highly experienced neonatologists and pediatric intensivists',
      'Maximum sterility and strict infection control guidelines'
    ],
    faqs: [
      {
        q: 'Why does a baby need NICU care?',
        a: 'Common reasons include premature birth (before 37 weeks), low birth weight, breathing difficulties, neonatal infections, or surgical conditions.'
      }
    ]
  },
  'pediatric-health-checks': {
    title: 'Preventive Health Checks',
    tagline: 'Proactive screenings to monitor growth, development, and wellness',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Routine check-ups are essential to monitor your child\'s physical growth, neurological milestones, and overall health. Our preventive checks help detect potential health issues early, allowing for timely, effective clinical intervention.',
    facilities: [
      'Complete physical examination and vitals screening',
      'Detailed growth charting (height, weight, head circumference)',
      'Developmental, speech, and behavioral milestone mapping',
      'Basic nutritional screening and deficiency checkups'
    ],
    benefits: [
      'Early detection of vision, hearing, or growth abnormalities',
      'Personalized advice on pediatric nutrition, sleep, and physical safety',
      'Complete health files for school admission and history tracking'
    ],
    faqs: [
      {
        q: 'What is checked during a well-child checkup?',
        a: 'A well-child checkup includes a full physical exam, growth measurements, milestone tracking, vaccination updates, and advice on healthy lifestyle patterns.'
      }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetail({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  const service = serviceData[slug] || serviceData.deliveries; // Fallback to deliveries

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
    <div className="min-h-screen bg-[#FDF8F0] flex flex-col">
      <Header />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">

          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#C8923C] font-semibold text-sm sm:text-base mb-8 transition-colors select-none group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>

          {/* Department Header Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-md mb-12 h-64 sm:h-80 md:h-[400px]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A3D]/95 via-[#1B2A3D]/75 to-transparent" />

            {/* Banner Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-3xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {service.title}
              </h1>
              <p className="text-[#D4A853] font-semibold text-base sm:text-lg md:text-xl mt-3 tracking-wide">
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Split Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column - Detailed Copy */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E8DFD0] p-6 sm:p-10 shadow-sm space-y-10">

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#1B2A3D] mb-4 flex items-center gap-2.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <HeartPulse className="text-[#C8923C]" size={24} />
                  Department Overview
                </h2>
                <p className="text-[#6B6B7B] leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>

              {/* Core Offerings / Facilities */}
              <div>
                <h2 className="text-2xl font-bold text-[#1B2A3D] mb-6 flex items-center gap-2.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <Clock className="text-[#C8923C]" size={24} />
                  Facilities & Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#FDF8F0] p-4 rounded-2xl border border-[#E8DFD0]">
                      <span className="w-2.5 h-2.5 bg-[#C8923C] rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="text-[#1B2A3D] text-sm sm:text-base font-medium leading-normal">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#1B2A3D] mb-4 flex items-center gap-2.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <ShieldCheck className="text-[#C8923C]" size={24} />
                  Why Choose Us?
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#6B6B7B] leading-relaxed text-sm sm:text-base">
                      <CheckCircle size={18} className="text-[#C8923C] mt-1 flex-shrink-0" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="pt-6 border-t border-[#E8DFD0]/60">
                  <h2 className="text-2xl font-bold text-[#1B2A3D] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="font-bold text-[#1B2A3D] text-base sm:text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>Q. {faq.q}</h4>
                        <p className="text-[#6B6B7B] leading-relaxed text-sm sm:text-base pl-5 border-l-2 border-[#C8923C]/40">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E8DFD0] p-6 sm:p-8 shadow-sm lg:sticky lg:top-28">

              {!isBooked ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-[#E8DFD0]">
                    <Calendar className="text-[#C8923C]" size={22} />
                    <h3 className="text-xl font-bold text-[#1B2A3D]" style={{ fontFamily: 'Outfit, sans-serif' }}>Book Consultation</h3>
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#6B6B7B] uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder=""
                      className="w-full bg-[#FDF8F0] border border-[#E8DFD0] rounded-xl py-2.5 px-4 text-sm text-[#1B2A3D] placeholder-slate-400 focus:outline-none focus:border-[#C8923C] focus:ring-1 focus:ring-[#C8923C] transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#6B6B7B] uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder=""
                      className="w-full bg-[#FDF8F0] border border-[#E8DFD0] rounded-xl py-2.5 px-4 text-sm text-[#1B2A3D] placeholder-slate-400 focus:outline-none focus:border-[#C8923C] focus:ring-1 focus:ring-[#C8923C] transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#6B6B7B] uppercase tracking-wider">Date *</label>
                      <input
                        type="date"
                        required
                        className="w-full bg-[#FDF8F0] border border-[#E8DFD0] rounded-xl py-2.5 px-3 text-xs sm:text-sm text-[#1B2A3D] focus:outline-none focus:border-[#C8923C] transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#6B6B7B] uppercase tracking-wider">Pref. Time</label>
                      <input
                        type="time"
                        className="w-full bg-[#FDF8F0] border border-[#E8DFD0] rounded-xl py-2.5 px-3 text-xs sm:text-sm text-[#1B2A3D] focus:outline-none focus:border-[#C8923C] transition-all"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#6B6B7B] uppercase tracking-wider">Additional Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Describe any symptoms or requests..."
                      className="w-full bg-[#FDF8F0] border border-[#E8DFD0] rounded-xl py-2.5 px-4 text-sm text-[#1B2A3D] placeholder-slate-400 focus:outline-none focus:border-[#C8923C] focus:ring-1 focus:ring-[#C8923C] transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-white font-bold text-sm tracking-wide rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 select-none cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #C8923C 0%, #D4A853 100%)',
                    }}
                  >
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FDF8F0] rounded-full flex items-center justify-center text-[#C8923C] mb-6 border border-[#E8DFD0] shadow-inner">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B2A3D] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Booking Confirmed!</h3>
                  <p className="text-sm text-[#6B6B7B] leading-relaxed max-w-xs mb-8">
                    Thank you, <span className="font-semibold text-[#1B2A3D]">{formData.name}</span>. Our representative will contact you shortly on <span className="font-semibold text-[#1B2A3D]">{formData.phone}</span> to confirm your appointment.
                  </p>
                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setFormData({ name: '', phone: '', date: '', time: '', message: '' });
                    }}
                    className="py-2.5 px-6 border border-[#E8DFD0] hover:bg-[#FDF8F0]/50 text-[#C8923C] rounded-xl text-sm font-semibold transition-colors"
                  >
                    Book Another
                  </button>
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
