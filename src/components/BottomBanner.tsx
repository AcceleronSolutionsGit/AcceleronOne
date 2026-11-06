import React from 'react';
import { Keyboard, Star, ExternalLink } from 'lucide-react';

export const BottomBanner: React.FC = () => {
  return (
    <div className="rounded-xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12px] text-slate-500 shadow-2xs mt-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
        <span className="font-semibold text-slate-700 flex items-center gap-1.5">
          <Keyboard className="w-3.5 h-3.5 text-[#162544]" />
          Keyboard Shortcuts:
        </span>
        <span className="flex items-center gap-1">
          Press <kbd className="px-1.5 py-0.2 bg-slate-100 border border-slate-200 rounded text-[11px] font-mono text-slate-700 shadow-2xs">/</kbd> to jump to search
        </span>
        <span className="text-slate-300 hidden sm:inline">•</span>
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          Star apps to pin to your Favourites
        </span>
      </div>

      <div className="flex items-center gap-1 text-[11.5px] text-slate-400 self-end sm:self-auto shrink-0 font-medium">
        <ExternalLink className="w-3 h-3" />
        <span>Direct Single-Click Access</span>
      </div>
    </div>
  );
};
