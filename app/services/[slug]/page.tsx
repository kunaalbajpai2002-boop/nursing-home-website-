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
  anesthesiology: {
    title: 'Anesthesiology',
    tagline: 'Ensuring Pain-Free, Secure, and Compassionate Surgical Care',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Anesthesiology department provides state-of-the-art anesthesia care, centering on patient comfort, safety, and rapid recovery. From diagnostic consultations to complex operations, our anesthesiologists supervise every step of your surgical journey.',
    facilities: [
      'Pre-anesthesia checkups and consultation',
      'Advanced general and regional anesthesia techniques',
      'State-of-the-art vitals monitoring systems',
      'Specialized post-anesthesia recovery units (PACU)',
      'Acute pain management services'
    ],
    benefits: [
      '100% safety record with certified senior anesthesiologists',
      'Minimally invasive regional blocks to reduce systemic medication',
      'Personalized recovery plans targeting minimal downtime'
    ],
    faqs: [
      {
        q: 'Is it necessary to fast before anesthesia?',
        a: 'Yes, fasting is critical to prevent complications during surgery. Generally, no solid food is allowed for 6 hours prior, and clear fluids must stop 2 hours prior.'
      },
      {
        q: 'How long does regional anesthesia last?',
        a: 'Regional blocks typically last between 4 to 24 hours depending on the specific anesthetic used, offering continuous pain control post-surgery.'
      }
    ]
  },
  cardiology: {
    title: 'Cardiology (Non-Invasive)',
    tagline: 'Comprehensive Cardiac Diagnostic Solutions For A Healthy Heart',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Non-Invasive Cardiology unit utilizes cutting-edge medical diagnostics to assess and manage heart diseases. We focus on preventive screening, rapid diagnosis, and detailed outpatient management schemes.',
    facilities: [
      '2D/3D Echocardiography & Color Doppler',
      'Treadmill Testing (TMT) and Stress Tests',
      '24-hour Holter monitoring and Ambulatory BP checks',
      'Preventive cardiac health screening packages',
      'Pediatric and adult cardiac consultations'
    ],
    benefits: [
      'Early detection of silent cardiovascular risks',
      'Completely non-invasive procedures with zero discomfort',
      'Highly trained cardiologists interpreting patient data'
    ],
    faqs: [
      {
        q: 'What should I wear for a Treadmill Test (TMT)?',
        a: 'Wear comfortable, loose clothing and running shoes. Avoid large meals or caffeine at least 3 hours before the test.'
      },
      {
        q: 'How long does a standard echocardiogram take?',
        a: 'A standard echo test takes roughly 30 to 45 minutes and is completely painless.'
      }
    ]
  },
  'critical-care': {
    title: 'Critical Care',
    tagline: 'Round-the-Clock Intensive Support for Critical Patient Needs',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'The Critical Care Unit at CareHub is built to handle severe illnesses, post-surgical recovery complications, and medical emergencies. Supported by our 24/7 staff, our ICU stands ready to deliver prompt, life-saving therapies.',
    facilities: [
      'Advanced ventilators and respiratory therapy systems',
      'Dedicated 1:1 nurse-to-patient care ratio for severe cases',
      'Continuous hemodynamics and cardiac output monitors',
      'Sterile, climate-controlled intensive care unit (ICU)',
      'Instant access to pathology labs and diagnostic imaging'
    ],
    benefits: [
      'Emergency response team active 24 hours a day',
      'Zero compromise on sterilization and infection control protocols',
      'Highly qualified intensive care specialists (intensivists) on-site'
    ],
    faqs: [
      {
        q: 'What are the visiting hours for the Critical Care Unit?',
        a: 'To maintain a quiet and sterile environment, visits are restricted. Usually, visits are permitted from 11:00 AM - 12:00 PM and 5:00 PM - 6:00 PM.'
      },
      {
        q: 'How is patient comfort managed in the ICU?',
        a: 'We use continuous sedation monitoring and specialized air-mattresses to alleviate pain and prevent secondary issues like pressure sores.'
      }
    ]
  },
  'dental-care': {
    title: 'Dental Care',
    tagline: 'Restoring Healthy Smiles with Advanced Dental Technologies',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'We offer comprehensive dental services ranging from preventive care to cosmetic dentistry. Our focus is on maintaining long-term oral hygiene and functional teeth, particularly optimized for senior and geriatric needs.',
    facilities: [
      'Digital RVG X-ray diagnostics',
      'Advanced root canal treatments (RCT)',
      'Dental implants, crowns, and bridges',
      'Custom geriatric dentures and denture care',
      'Oral scaling, polishing, and cosmetic whitening'
    ],
    benefits: [
      'Pain-free dental procedures with modern equipment',
      'Customized geriatric care plans targeting comfortable chewing',
      'Strict sterilization standards meeting ISO certifications'
    ],
    faqs: [
      {
        q: 'How often should seniors visit the dentist?',
        a: 'Seniors should visit the dentist at least twice a year to check for gum issues, fitment of dentures, and early signs of oral diseases.'
      },
      {
        q: 'What is the lifespan of custom dentures?',
        a: 'With proper cleaning and care, quality dentures last between 5 to 7 years before needing adjustments.'
      }
    ]
  },
  dermatology: {
    title: 'Dermatology',
    tagline: 'Clinical and Cosmetic Skincare Solutions Tailored to You',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Dermatology department treats conditions affecting the skin, hair, and nails. We combine medical expertise with aesthetic therapy to offer diagnostic testing, medical management, and minor cosmetic enhancements.',
    facilities: [
      'Chronic eczema, acne, and psoriasis management',
      'Skin allergy patch testing',
      'Minor clinical surgeries (cyst and mole removal)',
      'Geriatric skin dryness and irritation management',
      'Anti-aging and cosmetic skincare plans'
    ],
    benefits: [
      'Board-certified clinical dermatologists',
      'Advanced FDA-approved diagnostic equipment',
      'Structured long-term management programs for chronic eczema'
    ],
    faqs: [
      {
        q: 'Are minor mole removals painful?',
        a: 'No, we apply local numbing creams or injections so the entire procedure is completely painless.'
      },
      {
        q: 'How can seniors prevent severe dry skin?',
        a: 'Use lukewarm water for baths, apply heavy medical moisturizers within 3 minutes of bathing, and keep hydrated.'
      }
    ]
  },
  physiotherapy: {
    title: 'Physiotherapy & Rehab',
    tagline: 'Reclaiming Mobility and Strength Through Custom Rehabilitation',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Physiotherapy and Rehabilitation division helps patients recover physical mobility, manage chronic pain, and recover after major bone or muscle surgeries. We offer tailored physical coaching.',
    facilities: [
      'Post-operative orthopedic rehabilitation',
      'Ultrasonic, shortwave diathermy, and laser therapy',
      'Post-stroke and cardiac rehab therapy',
      'Osteoarthritis and back pain management clinics',
      'Balance and fall-prevention training for seniors'
    ],
    benefits: [
      'Dedicated personalized physical therapy coaches',
      'State-of-the-art gym equipment for rehabilitation',
      'Continuous progress mapping and balance assessments'
    ],
    faqs: [
      {
        q: 'How many sessions of physiotherapy will I need?',
        a: 'The sessions vary. A mild joint strain might require 3-5 sessions, while stroke or post-surgical rehab can span 4-12 weeks.'
      },
      {
        q: 'Do you offer home-based physiotherapy services?',
        a: 'Yes, we have specialized physiotherapists who can visit your home for patients facing extreme mobility challenges.'
      }
    ]
  },

  'onco-surgery': {
    title: 'Onco Surgery',
    tagline: 'Advanced Surgical Care for Cancer Treatment',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',

    description:
      'Onco Surgery focuses on the surgical management of cancer. Our team uses advanced techniques to remove tumors safely while preserving maximum healthy tissue and improving patient outcomes.',

    facilities: [
      'Cancer diagnosis and surgical evaluation',
      'Tumor removal surgeries',
      'Minimally invasive oncological procedures',
      'Post-surgery cancer care',
      'Multidisciplinary tumor board consultation'
    ],

    benefits: [
      'Expert oncology surgeons',
      'Advanced surgical technology',
      'Personalized cancer treatment plans'
    ],

    faqs: [
      {
        q: 'Is surgery always required for cancer treatment?',
        a: 'No, treatment depends on cancer type and stage. Surgery is one of several treatment options.'
      },
      {
        q: 'How long is recovery after onco surgery?',
        a: 'Recovery varies depending on the type of surgery and patient condition.'
      }
    ]
  },

  ophthalmology: {
    title: 'Ophthalmology',
    tagline: 'Advanced Eye Care for Better Vision and Healthy Eyes',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&q=80&w=800&h=500',
    description:
      'Our Ophthalmology department provides comprehensive eye care including diagnosis, treatment, and surgical management of eye disorders with advanced technology.',

    facilities: [
      'Vision testing and eye screening',
      'Cataract and glaucoma evaluation',
      'Retinal disease management',
      'Diabetic eye care screening',
      'Prescription and corrective lenses guidance'
    ],

    benefits: [
      'Early detection of vision problems',
      'Advanced diagnostic imaging tools',
      'Expert ophthalmologists'
    ],

    faqs: [
      {
        q: 'How often should I get my eyes checked?',
        a: 'Adults should have a full eye exam every 1–2 years depending on age and risk factors.'
      }
    ]
  },

  'obstetrics-gynecology': {
    title: 'Obstetrics & Gynecology',
    tagline: 'Complete Women’s Health and Pregnancy Care',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800&h=500',
    description:
      'We provide complete care for women including pregnancy management, childbirth, fertility care, and gynecological treatments.',

    facilities: [
      'Pregnancy monitoring and delivery care',
      'High-risk pregnancy management',
      'Fertility consultation',
      'Menstrual disorder treatment',
      'Gynecological surgeries'
    ],

    benefits: [
      'Experienced gynecologists',
      'Safe maternity care',
      'Advanced fetal monitoring'
    ],

    faqs: [
      {
        q: 'When should I first visit during pregnancy?',
        a: 'As soon as pregnancy is confirmed or within the first 8 weeks.'
      }
    ]
  },

  'respiratory-medicine': {
    title: 'Respiratory Medicine',
    tagline: 'Expert Care for Lung and Breathing Disorders',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=800&h=500',
    description:
      'We diagnose and treat diseases affecting the lungs and respiratory system including chronic and acute conditions.',

    facilities: [
      'Asthma and COPD management',
      'Lung function testing',
      'Sleep apnea diagnosis',
      'Chest infection treatment',
      'Pulmonary rehabilitation'
    ],

    benefits: [
      'Advanced lung testing equipment',
      'Specialized respiratory care team',
      'Long-term disease management'
    ],

    faqs: [
      {
        q: 'Can asthma be completely cured?',
        a: 'Asthma cannot be cured but can be effectively controlled with treatment.'
      }
    ]
  },

  'pediatric-neonatology': {
    title: 'Pediatric Neonatology',
    tagline: 'Specialized Care for Newborns and Children',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800&h=500',
    description:
      'We provide specialized medical care for newborns, infants, and children including intensive neonatal support.',

    facilities: [
      'NICU (Neonatal Intensive Care Unit)',
      'Premature baby care',
      'Child development monitoring',
      'Vaccination programs',
      'Pediatric emergency care'
    ],

    benefits: [
      'Expert pediatricians',
      'Advanced NICU support',
      'Child-friendly environment'
    ],

    faqs: [
      {
        q: 'When should newborns first visit a doctor?',
        a: 'Usually within 3–5 days after birth for initial assessment.'
      }
    ]
  },

  'general-medicine-emergency-geriatrics': {
    title: 'General Medicine, Emergency & Geriatrics',
    tagline: 'Complete Healthcare for All Ages & Emergencies',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500',
    description:
      'Comprehensive care covering routine illnesses, emergency treatments, and specialized elderly care.',

    facilities: [
      '24/7 emergency care',
      'Chronic disease management',
      'Geriatric health care',
      'Infection treatment',
      'Preventive health checkups'
    ],

    benefits: [
      'Round-the-clock doctors',
      'Fast emergency response',
      'Senior citizen care programs'
    ],

    faqs: [
      {
        q: 'Do you provide emergency services 24/7?',
        a: 'Yes, emergency care is available round the clock.'
      }
    ]
  },
  'plastic-surgery': {
    title: 'Plastic & Reconstructive Surgery',
    tagline: 'Restoring Form, Function, and Confidence',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Plastic & Reconstructive Surgery department offers a wide spectrum of restorative, aesthetic, and reconstructive services. From post-trauma reconstruction to advanced cosmetic procedures, our skilled surgeons use the latest techniques to prioritize safety, precision, and patient satisfaction.',
    facilities: [
      'Reconstructive microsurgery',
      'Post-burn scar revision',
      'Cosmetic facial and body contouring',
      'Hand and maxillofacial surgery',
      'Advanced wound healing therapies'
    ],
    benefits: [
      'Highly experienced certified plastic surgeons',
      'State-of-the-art sterile operating theaters',
      'Comprehensive post-operative recovery support'
    ],
    faqs: [
      {
        q: 'How long is the recovery period for cosmetic surgery?',
        a: 'Recovery times depend entirely on the procedure. Minor procedures may take a few days, while major surgeries can require 2-6 weeks of rest.'
      }
    ]
  },
  'infertility-treatment': {
    title: 'Infertility Treatment',
    tagline: 'Supporting Your Journey to Parenthood',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Infertility and Reproductive Medicine department provides comprehensive diagnostic services and state-of-the-art treatment options for couples seeking to start a family. We combine advanced clinical science with compassionate care to guide you through every step of this journey.',
    facilities: [
      'Advanced fertility evaluation for couples',
      'Ovulation induction and tracking',
      'Intrauterine Insemination (IUI)',
      'Semen analysis and preparation',
      'Counseling and psychological support'
    ],
    benefits: [
      'High success rates with tailored treatments',
      'Compassionate and confidential care environments',
      'Experienced reproductive endocrinologists and gynecologists'
    ],
    faqs: [
      {
        q: 'When should we consult a fertility specialist?',
        a: 'We recommend consulting a specialist if you have been trying to conceive for over a year (or six months if the female partner is over 35).'
      }
    ]
  },
  'orthopedic-care': {
    title: 'Orthopedic Care',
    tagline: 'Restoring Joint Health, Mobility, and Vitality',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Orthopedics department provides expert care for disorders of the bones, joints, ligaments, tendons, and muscles. From treating sports injuries to performing advanced joint replacement surgeries, we help patients of all ages regain pain-free mobility.',
    facilities: [
      'Joint replacement therapies (hip and knee)',
      'Arthroscopic sports medicine',
      'Fracture and trauma management',
      'Osteoporosis screening and bone health clinics',
      'Rheumatology and arthritis management'
    ],
    benefits: [
      'Expert orthopedic surgeons and physical therapists',
      'Advanced minimally invasive surgical options',
      'Integrated rehabilitation and physiotherapy pipelines'
    ],
    faqs: [
      {
        q: 'What is the recovery time for a total knee replacement?',
        a: 'Most patients start walking with assistance within 24 hours. Full return to normal, low-impact daily activities usually takes 4 to 6 weeks.'
      }
    ]
  },
  'neurology': {
    title: 'Neurology',
    tagline: 'Advanced Care for the Brain, Spine, and Nervous System',
    image: 'https://images.unsplash.com/photo-1559757175-7b315e3406a7?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'The Neurology department specializes in diagnosing and treating complex disorders of the central and peripheral nervous systems. We offer advanced diagnostic investigations and personalized management programs for acute and chronic neurological conditions.',
    facilities: [
      'Stroke identification and post-stroke management',
      'Comprehensive epilepsy care clinics',
      'Movement disorders and Parkinson\'s disease care',
      'Electromyography (EMG) and nerve conduction studies',
      'Headache and chronic pain management'
    ],
    benefits: [
      'Experienced board-certified neurologists',
      'Sophisticated neuro-diagnostic technologies',
      'Care coordination for neurological rehabilitation'
    ],
    faqs: [
      {
        q: 'What are common signs of neurological issues?',
        a: 'Symptoms include persistent headaches, numbness, muscle weakness, coordination issues, unexplained dizziness, and memory lapses.'
      }
    ]
  },
  'urology': {
    title: 'Urology',
    tagline: 'Specialized Care for Renal and Genitourinary Health',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Our Urology department offers comprehensive medical and surgical solutions for disorders of the kidneys, urinary bladder, ureters, and male reproductive organs. We focus on minimally invasive procedures and modern therapies to treat infections, stones, and oncology cases.',
    facilities: [
      'Kidney stone management (laser lithotripsy)',
      'Prostate disorder treatments',
      'Urinary tract infection (UTI) clinics',
      'Uro-oncology evaluations',
      'Incontinence and bladder health programs'
    ],
    benefits: [
      'Certified senior urologists on panel',
      'Minimally invasive keyhole and laser procedures',
      'Rapid diagnostic evaluations and quick recovery timelines'
    ],
    faqs: [
      {
        q: 'How can I prevent kidney stones?',
        a: 'Stay well-hydrated by drinking at least 2.5 to 3 liters of water daily, reduce sodium intake, and maintain a balanced diet.'
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
  const service = serviceData[slug] || serviceData.cardiology; // Fallback to cardiology

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

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">

          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#d81b47] font-semibold text-sm sm:text-base mb-8 transition-colors select-none group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>

          {/* Department Header Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-md mb-12 h-64 sm:h-80 md:h-[400px]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e2f41]/90 via-[#1e2f41]/70 to-transparent" />

            {/* Banner Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-3xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                {service.title}
              </h1>
              <p className="text-pink-300 font-semibold text-base sm:text-lg md:text-xl mt-3 tracking-wide">
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Split Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column - Detailed Copy */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-10">

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-4 flex items-center gap-2.5">
                  <HeartPulse className="text-[#d81b47]" size={24} />
                  Department Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>

              {/* Core Offerings / Facilities */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-6 flex items-center gap-2.5">
                  <Clock className="text-[#d81b47]" size={24} />
                  Facilities & Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <span className="w-2.5 h-2.5 bg-[#8cb069] rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm sm:text-base font-medium leading-normal">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e2f41] mb-4 flex items-center gap-2.5">
                  <ShieldCheck className="text-[#d81b47]" size={24} />
                  Why Choose Us?
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                      <CheckCircle size={18} className="text-[#8cb069] mt-1 flex-shrink-0" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h2 className="text-2xl font-bold text-[#1e2f41] mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq, idx) => (
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

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm lg:sticky lg:top-28">

              {!isBooked ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                    <Calendar className="text-[#d81b47]" size={22} />
                    <h3 className="text-xl font-bold text-[#1e2f41]">Book Consultation</h3>
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

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Additional Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Describe any symptoms or requests..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#d81b47] focus:ring-1 focus:ring-[#d81b47] transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#d81b47] hover:bg-[#b01338] text-white font-bold text-sm tracking-wide rounded-lg shadow-sm hover:shadow transition-all duration-300 select-none cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-100 shadow-inner">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e2f41] mb-2">Booking Confirmed!</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-8">
                    Thank you, <span className="font-semibold text-slate-700">{formData.name}</span>. Our representative will contact you shortly on <span className="font-semibold text-slate-700">{formData.phone}</span> to confirm your appointment.
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

        </div>
      </main>

      <Footer />
    </div>
  );
}
