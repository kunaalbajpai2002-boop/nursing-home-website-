import { Heart, Stethoscope, Users, Award, Pill, Activity } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Customized care plans tailored to each resident\u0027s unique health needs and preferences.',
  },
  {
    icon: Stethoscope,
    title: '24/7 Medical Support',
    description: 'Round-the-clock medical supervision with qualified nursing staff and physicians on call.',
  },
  {
    icon: Users,
    title: 'Community Activities',
    description: 'Engaging social programs and recreational activities to promote physical and mental wellness.',
  },
  {
    icon: Award,
    title: 'Award-Winning Facility',
    description: 'Recognized excellence in senior care with state-of-the-art equipment and amenities.',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Strict protocols for medication administration and health monitoring.',
  },
  {
    icon: Activity,
    title: 'Wellness Programs',
    description: 'Comprehensive fitness and wellness initiatives to maintain quality of life.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose CareHub?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine professional healthcare expertise with compassionate personal attention to create the perfect environment for senior living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
