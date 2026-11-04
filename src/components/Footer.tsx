import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 pt-4 pb-6 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11.5px] text-slate-400">
      <div>
        © 2026 Acceleron Solutions. All together, every day.
      </div>
      <div className="flex items-center gap-1.5 font-semibold text-[#162544]">
        <span>Acceleron One</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] inline-block" />
      </div>
    </footer>
  );
};
