'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-12 px-3 sm:px-4 lg:px-6">
        <div className="max-w-[1350px] mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore our state-of-the-art facilities and the compassionate care we provide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Modern Patient Rooms',
              'Physical Therapy Center',
              'Recreational Activities',
              'Dining Facilities',
              'Medical Equipment',
              'Garden Area',
              'Staff Meeting Room',
              'Visitor Lounge',
              'Emergency Ward',
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Virtual Tour</h2>
            <p className="text-muted-foreground mb-6">
              Can&apos;t visit in person? Schedule a virtual tour with our team to explore our facilities from the comfort of your home.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Virtual Tour
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
