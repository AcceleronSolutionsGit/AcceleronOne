import React from 'react';
import { Menu } from 'lucide-react';
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
        return 'All applications';
      case 'favourites':
        return 'Favourites';
      case 'recent':
        return 'Recently opened';
      default:
        return 'Overview';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#f6f8fb]/90 backdrop-blur-md border-b border-[#e2e8f0] px-5 py-3 flex items-center justify-between">
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
          <span className="text-slate-400 font-normal">Workspace</span>
          <span className="text-slate-300">/</span>
          <span className="text-[#162544] font-semibold">{getBreadcrumbTitle()}</span>
        </div>
      </div>

      {/* Right: Date */}
      <div className="text-[12px] text-slate-500 font-medium">
        {todayFormatted}
      </div>
    </header>
  );
};
