import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-6 pb-8 border-t border-[#eaedea] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-400">
      <div>
        © 2026 Acceleron Solutions. All together, every day.
      </div>
      <div className="flex items-center gap-1.5 font-medium text-slate-500">
        <span>MyAcceleron</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
      </div>
    </footer>
  );
};
