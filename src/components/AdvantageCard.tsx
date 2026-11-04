import React from 'react';
import { Sparkles } from 'lucide-react';

export const AdvantageCard: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-[#f2f6f3] border border-[#e2ebe5] p-6 flex flex-col justify-between overflow-hidden shadow-xs">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#386c50]">
            The Acceleron Advantage
          </span>
          <Sparkles className="w-4 h-4 text-[#386c50]/70" />
        </div>

        {/* Heading */}
        <div className="mt-5">
          <h3 className="text-[19px] font-bold text-[#14291f] tracking-tight leading-snug">
            Different tools. <br />
            Shared ambition.
          </h3>
        </div>

        {/* Body Text */}
        <p className="text-[13px] text-slate-600 font-normal leading-relaxed mt-3 max-w-[240px]">
          Everything you need to connect, contribute and create an impact.
        </p>
      </div>

      {/* Large Decorative Sparkle in bottom right corner */}
      <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-25">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 0C50 27.6142 72.3858 50 100 50C72.3858 50 50 72.3858 50 100C50 72.3858 27.6142 50 0 50C27.6142 50 50 27.6142 50 0Z"
            fill="#2e6848"
          />
        </svg>
      </div>
    </div>
  );
};
