import React from 'react';
import { Sparkles } from 'lucide-react';

export const AdvantageCard: React.FC = () => {
  return (
    <div className="relative rounded-xl bg-gradient-to-br from-[#162544] to-[#1d3159] text-white p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-2xs">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <span className="text-[9.5px] font-bold tracking-[0.16em] uppercase text-slate-300">
            The Acceleron Advantage
          </span>
          <Sparkles className="w-4 h-4 text-[#e31b23]" />
        </div>

        {/* Heading */}
        <div className="mt-3.5">
          <h3 className="text-[17px] font-bold text-white tracking-tight leading-snug">
            Different tools. <br />
            Shared ambition.
          </h3>
        </div>

        {/* Body Text */}
        <p className="text-[12px] text-slate-300 font-normal leading-relaxed mt-2 max-w-[220px]">
          Everything you need to connect, contribute and create an impact.
        </p>
      </div>

      {/* Large Decorative Sparkle in bottom right corner */}
      <div className="absolute -bottom-5 -right-5 pointer-events-none opacity-15">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 0C50 27.6142 72.3858 50 100 50C72.3858 50 50 72.3858 50 100C50 72.3858 27.6142 50 0 50C27.6142 50 50 27.6142 50 0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
};
