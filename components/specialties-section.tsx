const specialties = [
  'Geriatric Care',
  'Cardiac Management',
  'Diabetes Care',
  'Orthopedic Recovery',
  'Dementia Support',
  'Post-Surgery Rehabilitation',
  'Respiratory Care',
  'Physical Therapy',
  'Mental Health Support',
];

export default function SpecialtiesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Specialties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offering comprehensive healthcare services across multiple specialized departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-primary"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{specialty}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
