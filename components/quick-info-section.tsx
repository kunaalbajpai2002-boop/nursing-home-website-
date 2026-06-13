'use client';

import Link from 'next/link';

export default function QuickInfoSection() {
  return (
    <section className="min-h-screen flex items-center bg-slate-50 py-24 relative z-10">
      <div className="w-full max-w-[1500px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-3xl overflow-hidden">
          {/* Emergency Care Card */}
          <div className="bg-[#1a2633] text-white py-16 px-8 sm:px-12 flex flex-col items-center text-center relative overflow-hidden group min-h-[380px]">
            {/* Siren Watermark */}
            <div className="absolute right-[-20px] bottom-[-20px] w-52 h-52 text-white/[0.03] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2a6 6 0 0 0-6 6v5H4v3h16v-3h-2V8a6 6 0 0 0-6-6z" />
              </svg>
            </div>

            {/* Circular Icon Header */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200 mb-8 transition-transform duration-300 group-hover:scale-105">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
                <path d="M12 2a5 5 0 0 0-5 5v5H5v3h14v-3h-2V7a5 5 0 0 0-5-5z" fill="#d81b47" stroke="#333" strokeWidth="1.5" />
                <path d="M12 18v3" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 21h8" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 9h2M20 9h2M4.5 5.5l1.5 1.5M19.5 5.5l-1.5 1.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4 tracking-tight">Emergency Care</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
              Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give complete
            </p>

            <Link
              href="/contact"
              className="text-[#00c853] hover:text-[#00e676] font-bold text-sm tracking-wider uppercase flex items-center gap-1 transition-colors mt-auto relative z-10"
            >
              + CONTACT
            </Link>
          </div>

          {/* Medical Care Card */}
          <div className="bg-[#243649] text-white py-16 px-8 sm:px-12 flex flex-col items-center text-center relative overflow-hidden group min-h-[380px]">
            {/* Heart Watermark */}
            <div className="absolute right-[-20px] bottom-[-20px] w-52 h-52 text-white/[0.03] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Circular Icon Header */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200 mb-8 transition-transform duration-300 group-hover:scale-105">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#d81b47" stroke="#333" strokeWidth="1.5" />
                <path d="M12 6.5v6M9 9.5h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4 tracking-tight">Medical Care</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
              Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give complete
            </p>

            <Link
              href="/contact"
              className="text-[#00c853] hover:text-[#00e676] font-bold text-sm tracking-wider uppercase flex items-center gap-1 transition-colors mt-auto relative z-10"
            >
              + CONTACT
            </Link>
          </div>

          {/* OPD Timings Card */}
          <div className="bg-[#d81b47] text-white py-16 px-10 sm:px-14 flex flex-col relative overflow-hidden group min-h-[380px]">
            {/* Briefcase Watermark */}
            <div className="absolute right-[-10px] bottom-[-10px] w-52 h-52 text-white/[0.04] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <rect x="3" y="6" width="18" height="14" rx="2" />
              </svg>
            </div>

            {/* Circular Icon Header */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200 mb-8 self-center transition-transform duration-300 group-hover:scale-105">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="13" rx="2" fill="#d81b47" stroke="#333" strokeWidth="1.5" />
                <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 9.5v6M9 12.5h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-6 tracking-tight self-start">OPD Timings</h3>

            <div className="space-y-4 text-sm sm:text-base mt-2 relative z-10">
              <div>
                <div className="font-semibold text-white">Monday - Saturday</div>
                <div className="text-white/85 text-sm mt-1">
                  Morning : <span className="font-medium">09:00am - 01:00pm</span>
                </div>
                <div className="text-white/85 text-sm">
                  Evening : <span className="font-medium">05:00pm - 07:00pm</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/20">
                <div className="font-semibold text-white">Emergency services :</div>
                <div className="text-white/90 font-medium text-sm mt-1">Available 24x7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
