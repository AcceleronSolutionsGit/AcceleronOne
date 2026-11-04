import React from 'react';
import { ArrowRight, BarChart3, FileText, Users, Trophy, LayoutGrid, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  onScrollToApps?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onScrollToApps }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#162544] via-[#1c3058] to-[#111e38] text-white border border-[#273d6b] p-6 sm:p-7 shadow-sm">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Headlines */}
        <div className="lg:col-span-7 space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] uppercase tracking-[0.18em] font-semibold text-slate-200">
            <span className="w-1.5 h-1.5 rounded-xs bg-[#e31b23]" />
            Your Gateway to Everything Acceleron
          </div>

          {/* Hero Title */}
          <h1 className="text-2xl sm:text-[30px] font-bold text-white tracking-tight leading-tight">
            Great work starts <br className="hidden sm:inline" />
            with everything together.
          </h1>

          {/* Subtitle */}
          <p className="text-[13px] text-slate-300 font-normal leading-relaxed max-w-md">
            Your applications, your people, your possibilities. <br className="hidden sm:inline" />
            One workspace to make every day count.
          </p>

          {/* Action CTA */}
          <div className="pt-1">
            <button
              onClick={onScrollToApps}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white hover:text-slate-200 group transition-colors"
            >
              <span>Let's get to work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#e31b23]" />
            </button>
          </div>
        </div>

        {/* Right Column: Orbit Visual */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[190px] select-none">
          {/* Orbit Rings */}
          <div className="absolute w-52 h-52 rounded-full border border-white/10" />
          <div className="absolute w-64 h-64 rounded-full border border-white/5 hidden sm:block" />

          {/* Floating Orbit Icons */}
          {/* Analytics / Chart */}
          <div className="absolute top-1 left-10 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 shadow-xs flex items-center justify-center text-orange-400">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>

          {/* Documents */}
          <div className="absolute top-4 right-10 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 shadow-xs flex items-center justify-center text-blue-400">
            <FileText className="w-3.5 h-3.5" />
          </div>

          {/* HR / People */}
          <div className="absolute bottom-5 left-6 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 shadow-xs flex items-center justify-center text-purple-400">
            <Users className="w-3.5 h-3.5" />
          </div>

          {/* Rewards / Champ */}
          <div className="absolute bottom-3 right-10 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 shadow-xs flex items-center justify-center text-[#e31b23]">
            <Trophy className="w-3.5 h-3.5" />
          </div>

          {/* Projects / Plus */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 shadow-xs flex items-center justify-center text-teal-400">
            <LayoutGrid className="w-3.5 h-3.5" />
          </div>

          {/* Decorative Sparkles */}
          <Sparkles className="absolute top-1/2 -left-2 w-3.5 h-3.5 text-[#e31b23]/70" />
          <span className="absolute top-1/4 right-3 text-[10px] text-white/40">✦</span>

          {/* Center Card with Acceleron Branding */}
          <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0f1a30] border border-white/20 shadow-xl flex flex-col items-center justify-center p-2.5 text-center transition-transform hover:scale-105 duration-200">
            <div className="w-9 h-9 rounded-xl bg-[#162544] border border-white/10 flex items-center justify-center mb-1 shadow-inner">
              <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
                <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="3.5" fill="none" />
                <path d="M20 12 L26 18 L23.5 18 L20 14.5 L16.5 18 L14 18 Z" fill="#E31B23" />
                <path d="M20 17 L25 22 L23 22 L20 19 L17 22 L15 22 Z" fill="#E31B23" />
              </svg>
            </div>
            <span className="text-[9.5px] text-slate-300 font-medium tracking-wide">
              All together.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
