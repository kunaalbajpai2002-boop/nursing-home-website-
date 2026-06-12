'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Microscope, Beaker, Activity, Users } from 'lucide-react';

export default function Diagnostics() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-20 pb-8 px-3 sm:px-4 lg:px-6">
        <div className="max-w-[1350px] mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">Diagnostics & Testing</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Advanced diagnostic services to ensure accurate health assessment and timely intervention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Microscope,
                title: 'Laboratory Services',
                description: 'State-of-the-art laboratory with quick turnaround for blood tests, urinalysis, and other diagnostic tests.',
              },
              {
                icon: Beaker,
                title: 'Pathology Testing',
                description: 'Expert pathology services including tissue analysis and specialized testing.',
              },
              {
                icon: Activity,
                title: 'ECG & Cardiac Monitoring',
                description: 'Advanced ECG, stress testing, and continuous cardiac monitoring capabilities.',
              },
              {
                icon: Users,
                title: 'Health Screening Camps',
                description: 'Regular health screening camps for preventive care and early disease detection.',
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-8">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Available Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                { name: 'Complete Blood Count', slug: 'complete-blood-count' },
                { name: 'Blood Chemistry Panel', slug: 'blood-chemistry-panel' },
                { name: 'Thyroid Function Tests', slug: 'thyroid-function-test' },
                { name: 'Liver Function Tests', slug: 'liver-function-test' },
                { name: 'Kidney Function Tests', slug: 'kidney-function-test' },
                { name: 'Lipid Profile', slug: 'lipid-profile' },
                { name: 'Blood Glucose Testing', slug: 'blood-glucose-test' },
                { name: 'Electrocardiogram (ECG)', slug: 'electrocardiogram' },
                { name: 'Chest X-Ray', slug: 'chest-x-ray' },
                { name: 'Ultrasound Imaging', slug: 'ultrasound-imaging' },
                { name: 'Coagulation Profile', slug: 'coagulation-profile' },
                { name: 'Urine Analysis', slug: 'urine-analysis' },
              ].map((test, index) => (
                <Link 
                  key={index} 
                  href={`/diagnostics/${test.slug}`}
                  className="flex items-center gap-3 group/item py-1 select-none"
                >
                  <span className="w-2.5 h-2.5 bg-primary rounded-full transition-transform group-hover/item:scale-125 group-hover/item:bg-[#d81b47]" />
                  <span className="text-foreground font-semibold hover:text-[#d81b47] transition-colors">
                    {test.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
