'use client';

const doctors = [
  {
    id: '01',
    name: 'Dr. A. K. Agarwal',
    designation: 'Senior Consultant & Director',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=600',
  },
  {
    id: '02',
    name: 'Dr. Veena Agarwal',
    designation: 'Gynaecologist & Obstetrician',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600&h=600',
  },
  {
    id: '03',
    name: 'Dr. Saurabh Agarwal',
    designation: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=600',
  },
  {
    id: '04',
    name: 'Dr. Ritu Agarwal',
    designation: 'Paediatrician',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=600',
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-20 px-3 sm:px-4 lg:px-6 bg-white">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            Experts
          </span>
          <h2 className="text-4xl font-bold text-[#1e2f41] mt-2 tracking-tight">
            Our Doctors
          </h2>
          <div className="flex justify-center mt-4 gap-1.5">
            <span className="w-6 h-1 bg-[#d81b47] rounded-full"></span>
            <span className="w-12 h-1 bg-[#d81b47] rounded-full"></span>
            <span className="w-6 h-1 bg-[#d81b47] rounded-full"></span>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 xl:gap-10">
          {doctors.map((doc) => (
            <div key={doc.id} className="flex flex-col items-center text-center group">
              {/* Circular Frame Container */}
              <div className="relative w-64 h-64 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full flex items-center justify-center p-2.5 transition-all duration-300">
                {/* Dashed Border Overlay */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#b8c9b3]/80 group-hover:border-[#d81b47] group-hover:rotate-12 transition-all duration-500 pointer-events-none" />

                {/* Red/Pink Numeric Badge */}
                <div className="absolute top-2 right-4 w-9 h-9 rounded-full bg-[#d81b47] text-white flex items-center justify-center text-sm font-bold shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
                  {doc.id}
                </div>

                {/* Inner Image Mask */}
                <div className="w-full h-full rounded-full overflow-hidden aspect-square border border-slate-100 shadow-sm">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Metadata */}
              <h3 className="text-xl font-bold text-[#1e2f41] mt-6 transition-colors duration-300 group-hover:text-[#d81b47]">
                {doc.name}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-1.5">
                {doc.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
