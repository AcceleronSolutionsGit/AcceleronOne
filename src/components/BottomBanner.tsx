import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BottomBanner: React.FC = () => {
  const { setActiveFilterTab } = useApp();

  return (
    <div className="rounded-xl bg-white border border-[#e2e8f0] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs mt-4">
      <div className="flex items-start sm:items-center gap-3">
        {/* Sparkle Icon Container */}
        <div className="w-8 h-8 rounded-lg bg-[#edf2f8] border border-[#d6e0ef] flex items-center justify-center text-[#162544] shrink-0">
          <Sparkles className="w-4 h-4 text-[#e31b23]" />
        </div>

        {/* Text */}
        <div>
          <h4 className="text-[13.5px] font-bold text-slate-800">
            A little more you. A lot more productive.
          </h4>
          <p className="text-[12px] text-slate-500 mt-0.5">
            Star the applications you use most. Your favourites are always a click away.
          </p>
        </div>
      </div>

      {/* Action */}
      <button
        onClick={() => setActiveFilterTab('favourites')}
        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#162544] hover:text-[#0f1b33] self-end sm:self-center shrink-0 group transition-colors"
      >
        <span>Make it yours</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#e31b23]" />
      </button>
    </div>
  );
};
