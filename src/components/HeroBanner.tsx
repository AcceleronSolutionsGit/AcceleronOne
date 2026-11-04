import React from 'react';
import { ArrowRight, BarChart3, FileText, Users, Trophy, LayoutGrid, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeroBannerProps {
  onScrollToApps?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onScrollToApps }) => {
  const { userProfile } = useApp();

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f3f7f4] via-[#ecf4ee] to-[#e4eee7] border border-[#dce8e0] p-7 md:p-10 shadow-xs">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headlines & Welcome */}
        <div className="lg:col-span-7 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#e4ede7] border border-[#d2e2d7] text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[#27533b]">
            <span className="w-1.5 h-1.5 rounded-xs bg-[#2e6848]" />
            Your Gateway to Everything Acceleron
          </div>

          {/* Personalized Greeting */}
          <p className="text-[14px] text-slate-600 font-medium flex items-center gap-1.5">
            Welcome back, <span className="font-semibold text-slate-800">{userProfile.name}</span>
            <span className="text-[#3c7e5a]">✦</span>
          </p>

          {/* Hero Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#14231b] tracking-tight leading-[1.15]">
            Great work starts <br className="hidden sm:inline" />
            with everything together.
          </h1>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[15px] text-slate-600 font-normal leading-relaxed max-w-lg">
            Your applications, your people, your possibilities. <br className="hidden sm:inline" />
            One workspace to make every day count.
          </p>

          {/* Action CTA */}
          <div className="pt-2">
            <button
              onClick={onScrollToApps}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1e3c2c] hover:text-[#0f2319] group transition-colors"
            >
              <span>Let's get to work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Orbit Visual */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[220px] select-none">
          {/* Outer Orbit Rings */}
          <div className="absolute w-64 h-64 rounded-full border border-emerald-900/10" />
          <div className="absolute w-80 h-80 rounded-full border border-emerald-900/5 hidden sm:block" />

          {/* Floating Orbit Icons */}
          {/* Analytics / Chart */}
          <div className="absolute -top-1 left-12 w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 shadow-xs flex items-center justify-center text-orange-600 animate-pulse">
            <BarChart3 className="w-4 h-4" />
          </div>

          {/* Documents */}
          <div className="absolute top-4 right-10 w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 shadow-xs flex items-center justify-center text-blue-600">
            <FileText className="w-4 h-4" />
          </div>

          {/* HR / People */}
          <div className="absolute bottom-6 left-6 w-9 h-9 rounded-xl bg-purple-50 border border-purple-200/80 shadow-xs flex items-center justify-center text-purple-600">
            <Users className="w-4 h-4" />
          </div>

          {/* Rewards / Champ */}
          <div className="absolute bottom-4 right-12 w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/80 shadow-xs flex items-center justify-center text-amber-600">
            <Trophy className="w-4 h-4" />
          </div>

          {/* Projects / Plus */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-9 h-9 rounded-xl bg-teal-50 border border-teal-200/80 shadow-xs flex items-center justify-center text-teal-600">
            <LayoutGrid className="w-4 h-4" />
          </div>

          {/* Decorative Sparkles */}
          <Sparkles className="absolute top-1/2 -left-2 w-4 h-4 text-emerald-600/40" />
          <span className="absolute top-1/4 right-3 text-[10px] text-emerald-700/50">✦</span>

          {/* Center Dark Card */}
          <div className="relative z-10 w-28 h-28 rounded-2xl bg-[#193225] border border-emerald-700/30 shadow-lg flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 duration-200">
            {/* White Stylized A */}
            <div className="w-10 h-10 rounded-xl bg-[#234433] flex items-center justify-center mb-1.5 shadow-inner">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <path
                  d="M20 7L8 31H14.5L16.8 26.2H23.2L25.5 31H32L20 7ZM18.2 21.6L20 17.2L21.8 21.6H18.2Z"
                  fill="white"
                />
                <path
                  d="M20 10.5L23.5 15.5H21.2L20 13.8L18.8 15.5H16.5L20 10.5Z"
                  fill="#E31B23"
                />
              </svg>
            </div>
            <span className="text-[10px] text-emerald-200/90 font-medium tracking-wide">
              All together.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
