import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BottomBanner: React.FC = () => {
  const { setActiveFilterTab } = useApp();

  return (
    <div className="rounded-2xl bg-white border border-[#e8ece9] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs mt-6">
      <div className="flex items-start sm:items-center gap-4">
        {/* Sparkle Icon Container */}
        <div className="w-10 h-10 rounded-xl bg-[#f0f5f2] border border-[#dce8e0] flex items-center justify-center text-[#2e6848] shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Text */}
        <div>
          <h4 className="text-[14.5px] font-bold text-slate-800">
            A little more you. A lot more productive.
          </h4>
          <p className="text-[12.5px] text-slate-500 mt-0.5">
            Star the applications you use most. Your favourites are always a click away.
          </p>
        </div>
      </div>

      {/* Action */}
      <button
        onClick={() => setActiveFilterTab('favourites')}
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-700 hover:text-[#162544] self-end sm:self-center shrink-0 group transition-colors"
      >
        <span>Make it yours</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};
