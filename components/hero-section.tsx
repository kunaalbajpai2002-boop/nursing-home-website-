import { Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-22 min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hospital-hero.png"
          alt="Aggarwal Nursing Home - Modern healthcare facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1500px] mx-auto px-3 sm:px-4 lg:px-6 py-14 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Heart size={16} className="text-red-300" />
            Trusted by 10,000+ families
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Compassionate Care for Your Loved Ones
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
            CareHub provides world-class nursing care with a team of dedicated healthcare professionals committed to your family&apos;s wellbeing.
          </p>
          <p className="text-base text-white/75 mb-10 leading-relaxed max-w-xl">
            Our state-of-the-art facilities, experienced staff, and personalized care plans ensure every resident receives the attention and support they deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Schedule a Tour
            </button>
            <button className="border-2 border-white/70 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 backdrop-blur-sm transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-white">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
