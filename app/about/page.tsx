'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* About Us Section */}
        <section className="min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute inset-0 bg-[#d81b47]/5 rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="Doctors collaborating in medical facility"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-1 bg-[#d81b47] rounded-full"></span>
                <span className="text-[#d81b47] uppercase font-bold text-sm tracking-wider">About Us</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2f41] mb-6 leading-tight tracking-tight uppercase">
                Welcome to Aggarwal Nursing Home, Narela
              </h1>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Aggarwal Nursing Home is one of the oldest and most trusted healthcare institutions in Narela, Delhi, dedicated to providing comprehensive care in Obstetrics, Gynaecology, Neonatology, and Paediatrics. Established by Dr. S.P. Aggarwal and Dr. Manju Aggarwal, the hospital has been serving the community for more than four decades with a commitment to compassionate, ethical, and patient-centered healthcare.
                </p>
                
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-[#1e2f41] mb-3">
                    Excellence in Women & Child Healthcare
                  </h3>
                  <p className="mb-4">
                    At Aggarwal Nursing Home, we specialize in:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                    {[
                      "Normal and Caesarean Deliveries",
                      "High-Risk Pregnancy Management",
                      "Gynaecological Surgeries",
                      "Pregnancy Sonography & Ultrasound",
                      "Antenatal and Postnatal Care",
                      "Neonatal Intensive Care & Newborn Services",
                      "Child Health & Vaccination Services",
                      "Paediatric Consultations and Emergency Care",
                      "Family Planning & Women’s Health Services"
                    ].map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#d81b47] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600 text-sm sm:text-base">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Our experienced team of doctors and healthcare professionals combines medical expertise with personalized care to ensure the best outcomes for mothers, newborns, and children.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Legacy Section */}
        <section className="min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-6 lg:order-1 order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-1 bg-[#d81b47] rounded-full"></span>
                <span className="text-[#d81b47] uppercase font-bold text-sm tracking-wider">Our Legacy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e2f41] mb-6 leading-tight tracking-tight uppercase">
                Narela's Most Trusted and Compassionate Care Provider.
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Founded in the late 1970s and among the first hospitals in Narela to introduce modern obstetric and gynaecological services, Aggarwal Nursing Home has played a pioneering role in advancing women’s and child healthcare in the region. Under the leadership of Dr. Manju Aggarwal, the institution has continued its tradition of excellence, serving generations of families with dedication and compassion.
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-[#1e2f41] mb-3">
                    Why Choose Aggarwal Nursing Home?
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Over 40 years of trusted healthcare service",
                      "Experienced Gynaecologists, Obstetricians, Paediatricians, and Neonatologists",
                      "Modern Labour Room and Operation Theatre Facilities",
                      "Advanced Ultrasound and Diagnostic Services",
                      "24×7 Emergency and Maternity Care",
                      "Personalized attention and affordable treatment",
                      "Clean, patient-friendly environment with comprehensive inpatient and outpatient services"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#d81b47] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 lg:order-2 order-1 relative group">
              <div className="absolute inset-0 bg-[#d81b47]/5 rounded-2xl transform -translate-x-3 translate-y-3 group-hover:-translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="Elderly caregiver smiling with senior patient"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
          <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute inset-0 bg-[#d81b47]/5 rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="Medical team working together"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-1 bg-[#d81b47] rounded-full"></span>
                <span className="text-[#d81b47] uppercase font-bold text-sm tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e2f41] mb-6 leading-tight tracking-tight uppercase">
                Delivering Compassionate Care & Advanced Health Services Daily.
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  To provide safe, affordable, and high-quality healthcare for women, newborns, and children while maintaining the highest standards of medical ethics, compassion, and patient satisfaction.
                </p>
                <p className="font-semibold text-[#1e2f41] border-l-4 border-[#d81b47] pl-4 italic">
                  Aggarwal Nursing Home – Caring for Mothers, Newborns, and Children with Trust, Expertise, and Compassion Since 1977
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
