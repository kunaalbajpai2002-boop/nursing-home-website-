'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Complete Blood Count',
                'Blood Chemistry Panel',
                'Thyroid Function Tests',
                'Liver Function Tests',
                'Kidney Function Tests',
                'Lipid Profile',
                'Blood Glucose Testing',
                'Electrocardiogram (ECG)',
                'Chest X-Ray',
                'Ultrasound Imaging',
                'Coagulation Profile',
                'Urine Analysis',
              ].map((test, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-foreground font-medium">{test}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
