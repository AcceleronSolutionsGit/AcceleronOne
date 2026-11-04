import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, Menu, ShieldCheck, UserCheck, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeaderProps {
  onOpenMobileSidebar: () => void;
  onOpenHelp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileSidebar, onOpenHelp }) => {
  const { activeTab, userProfile, ssoEnabled, setActiveTab } = useApp();
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      case 'settings':
        return 'Workspace settings';
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

      {/* Right: Date, Help, Profile */}
      <div className="flex items-center gap-4">
        {/* Date */}
        <div className="hidden md:block text-[12px] text-slate-500 font-medium">
          {todayFormatted}
        </div>

        {/* Need Help Link */}
        <button
          onClick={onOpenHelp}
          className="hidden sm:flex items-center gap-1.5 text-[12.5px] text-slate-500 hover:text-[#162544] transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
          <span>Need help?</span>
        </button>

        {/* Profile Avatar & Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-7 h-7 rounded-full bg-[#162544] hover:bg-[#1a2d54] text-white font-bold text-[12px] flex items-center justify-center transition-all ring-2 ring-transparent focus:ring-slate-300 active:scale-95 shadow-2xs"
            aria-label="User Profile"
          >
            {userProfile.avatarLetter}
          </button>

          {/* Profile Dropdown Menu */}
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white border border-[#e2e8f0] shadow-xl py-3 px-3 z-50 text-[12.5px] animate-in fade-in duration-100">
              {/* User Identity Info */}
              <div className="flex items-center gap-2.5 px-2 py-2 border-b border-slate-100">
                <div className="w-9 h-9 rounded-full bg-[#162544] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                  {userProfile.avatarLetter}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 truncate">{userProfile.name}</p>
                  <p className="text-[11px] text-slate-400 truncate">{userProfile.email}</p>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="my-2 px-2 py-2 rounded-xl bg-[#edf2f8] border border-[#dce4f0]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#162544]" />
                    <span className="text-[11px] font-semibold text-[#162544]">
                      {ssoEnabled ? 'SSO Authenticated' : 'Guest Mode (Active)'}
                    </span>
                  </div>
                  <span className="text-[9.5px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-sm bg-white text-[#162544] border border-slate-200">
                    {ssoEnabled ? 'Enterprise' : 'Local'}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  {ssoEnabled 
                    ? 'Connected via Acceleron Single Sign-On.' 
                    : 'Personalized history & favourites saved in this browser.'}
                </p>
              </div>

              {/* Dropdown Actions */}
              <div className="space-y-0.5">
                <button
                  onClick={() => {
                    setActiveTab('settings');
                    setProfileOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-left"
                >
                  <Settings className="w-3.5 h-3.5 text-slate-400" />
                  <span>Workspace Settings & SSO</span>
                </button>

                <button
                  onClick={() => {
                    onOpenHelp();
                    setProfileOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-left sm:hidden"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Need help?</span>
                </button>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-100 px-2 flex items-center justify-between text-[10.5px] text-slate-400">
                <span className="flex items-center gap-1 text-[#e31b23] font-semibold">
                  <ShieldCheck className="w-3 h-3" />
                  SSO Ready
                </span>
                <span className="text-slate-400 font-mono">v1.1</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
