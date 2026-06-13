export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[680px] bg-slate-50 p-4 md:p-6 lg:p-8 pt-24 md:pt-26 lg:pt-28 flex flex-col overflow-hidden">
      {/* Inner Hero Container */}
      <div 
        className="relative flex-grow w-full rounded-[2.5rem] overflow-hidden bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url('/hospital-hero.png')` }}
      >
        {/* Overlays & Gradients */}
        {/* 1. Dark bottom-to-top gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        {/* 2. Subtle aesthetic tint overall */}
        <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />

        {/* Content Layout (Bottom Anchored) */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16 z-10">
          
          {/* Left Column: Typography */}
          <div className="flex-1 flex flex-col items-start gap-4 max-w-3xl">
            {/* Overline */}
            <div className="flex items-center gap-3">
              <span className="w-12 h-1 bg-blue-400 rounded-full" />
              <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">
                Aggarwal Nursing
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight">
              Compassionate Care for Your Loved Ones
            </h1>
            
            {/* Subheadline */}
            <p className="text-slate-100 font-light text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed opacity-95">
              CareHub provides world-class nursing care with a team of dedicated healthcare professionals committed to your family&apos;s wellbeing.
            </p>
          </div>

          {/* Right Column: Frosted Glass CTA Card */}
          <div className="w-full lg:w-72 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 flex flex-col gap-4 shrink-0">
            <p className="text-white text-sm font-semibold text-center tracking-wide">
              Ready to speak with us?
            </p>
            <button className="w-full bg-white text-slate-900 py-3.5 px-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg text-sm md:text-base">
              Schedule a Tour
            </button>
            <button className="w-full bg-transparent text-white py-3.5 px-4 rounded-xl font-bold border-2 border-white/30 hover:bg-white/10 transition-colors text-sm md:text-base">
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

