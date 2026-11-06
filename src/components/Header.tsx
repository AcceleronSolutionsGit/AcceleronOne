import React from 'react';
import { Menu, Layers } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeaderProps {
  onOpenMobileSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileSidebar }) => {
  const { activeTab } = useApp();

  const todayFormatted = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date());

  const getBreadcrumbTitle = () => {
    switch (activeTab) {
      case 'overview':
        return 'Overview';
      case 'all':
        return 'All Applications';
      case 'favourites':
        return 'Favourites';
      case 'recent':
        return 'Recently Opened';
      default:
        return 'Overview';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-5 py-3 flex items-center justify-between">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[13px]">
          <span className="flex items-center gap-1.5 text-slate-400 font-medium">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span>Workspace</span>
          </span>
          <span className="text-slate-300">/</span>
          <span className="text-[#162544] font-semibold">{getBreadcrumbTitle()}</span>
        </div>
      </div>

      {/* Right: Operational Status & Date */}
      <div className="flex items-center gap-4 text-[12px]">
        <div className="hidden sm:flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 font-medium text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Operational</span>
        </div>
        <div className="text-slate-500 font-medium">
          {todayFormatted}
        </div>
      </div>
    </header>
  );
};
