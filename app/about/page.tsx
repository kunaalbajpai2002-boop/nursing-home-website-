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
                A Trusted Healthcare Facility, Providing the Best Medical Services.
              </h1>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Aggarwal Nursing Home is a reputable healthcare institution with super-Specialities wards and cutting-edge medical equipment to ensure that all patients are treated completely, effectively, and on time.
                </p>
                <p>
                  We have been providing medical and healthcare services for almost 100 years, treating generations of patients. Aggarwal Nursing Home is a center of excellence, with the greatest doctors and medical practitioners in the country. We offer the most up-to-date medical equipment and apparatus for rapid diagnosis and treatment of ailments.
                </p>
                <p>
                  The availability of testing facilities on hospital grounds guarantees that patients receive immediate lab reports and findings, relieving them and providing a hassle-free experience.
                </p>
                <p>
                  Aggarwal Nursing Home represents the pinnacle of trust and compassion. We treat our patients like family members. Our doctors, medical team, technicians, and other staff members are always accessible to assist patients in any manner possible. We ensure that our patients always receive the greatest medical care and services. We ensure that all of our patients leave with complete satisfaction and a grin on their faces.
                </p>
                <p>
                  When it comes to infrastructure and hygiene, we make sure that hygiene is not compromised. Our hospital premises are Cleaned numerous times every day to eliminate the chance of disease transmission. Aggarwal Nursing Home features all The latest equipment, including digital X-ray and CT Scan, ECG, EEG, Echo, TMT, Holter and ABPM.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-6 lg:order-1 order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-1 bg-[#d81b47] rounded-full"></span>
                <span className="text-[#d81b47] uppercase font-bold text-sm tracking-wider">Our Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e2f41] mb-6 leading-tight tracking-tight uppercase">
                To Be the Region's Most Trusted and Compassionate Care Provider.
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  At Aggarwal Nursing Home , we envision a future where senior years are filled with joy, health, and dignity. We strive to pioneer new standards in geriatric care, incorporating advanced medical research, customized therapies, and a nurturing environment to ensure a fulfilling experience for our residents.
                </p>
                <p>
                  We are dedicated to building a community that values the wisdom of elders, providing them with top-tier amenities and round-the-clock medical attention. Our goal is to expand our footprint while maintaining the boutique, high-touch quality of care that makes our residents feel at home.
                </p>
                <p>
                  By cultivating strong bonds between our residents, their families, and our medical teams, we aspire to be a glowing beacon of reliability and modern medical compassion in the healthcare space.
                </p>
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

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Our mission is to offer comprehensive healthcare services that address the physical, emotional, and social needs of seniors. Through our team of dedicated medical professionals and state-of-the-art facilities, we guarantee specialized care plans that promote independent living and recovery.
                </p>
                <p>
                  We prioritize hygiene, nutrition, and mental wellness to foster an environment where residents can thrive. By collaborating closely with families, we ensure peace of mind and create a supportive system that feels like family.
                </p>
                <p>
                  Every resident represents a sacred trust, and we work tirelessly to honor their dignity by upholding the highest ethical and professional standards in modern medical service delivery.
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
