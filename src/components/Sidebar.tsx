import React from 'react';
import { 
  Home, 
  LayoutGrid, 
  Star, 
  Clock, 
  HelpCircle, 
  Settings, 
  Sparkles,
  ExternalLink,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AcceleronMark } from './AppIcons';
import type { ViewTab } from '../types';

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onOpenHelp: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, setMobileOpen, onOpenHelp }) => {
  const { 
    activeTab, 
    setActiveTab, 
    apps, 
    favourites, 
    recentApps 
  } = useApp();

  const navItems: { id: ViewTab; label: string; icon: React.ReactNode; count?: number }[] = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: <Home className="w-4 h-4" /> 
    },
    { 
      id: 'all', 
      label: 'All applications', 
      icon: <LayoutGrid className="w-4 h-4" />, 
      count: apps.length 
    },
    { 
      id: 'favourites', 
      label: 'Favourites', 
      icon: <Star className="w-4 h-4" />, 
      count: favourites.length 
    },
    { 
      id: 'recent', 
      label: 'Recently opened', 
      icon: <Clock className="w-4 h-4" />, 
      count: recentApps.length 
    },
  ];

  const handleNavClick = (id: ViewTab) => {
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-[#fbfbfa] border-r border-[#eaedea] flex flex-col justify-between p-5 transition-transform duration-200 ease-in-out
        ${mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Top: Logo & Brand */}
        <div>
          <div className="flex items-center justify-between pb-7">
            <div className="flex items-center gap-3">
              <AcceleronMark size={38} />
              <div className="flex flex-col">
                <span className="font-bold text-[17px] tracking-tight text-[#162544] leading-tight">
                  MyAcceleron
                </span>
                <span className="text-[8.5px] uppercase tracking-[0.14em] text-slate-400 font-semibold mt-0.5">
                  Your Connected Workspace
                </span>
              </div>
            </div>

            {/* Close button for mobile */}
            <button 
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Section */}
          <div className="mt-2">
            <div className="text-[10px] uppercase font-bold tracking-[0.18em] text-slate-400 px-3 mb-2.5">
              Workspace
            </div>
            
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all group
                      ${isActive 
                        ? 'bg-[#eaf2ec] text-[#1b3a2a] font-semibold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-[#f2f5f2]'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`transition-colors ${isActive ? 'text-[#2e6848]' : 'text-slate-400 group-hover:text-slate-600'}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.count !== undefined && (
                        <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                          isActive ? 'text-[#2e6848] font-bold' : 'text-slate-400'
                        }`}>
                          {item.count}
                        </span>
                      )}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2e6848]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Middle / Bottom Content */}
        <div className="space-y-4 pt-4">
          {/* Motivation Box */}
          <div className="relative rounded-2xl bg-[#f2f6f3] border border-[#e2ece5] p-3.5 overflow-hidden">
            <div className="pr-4">
              <p className="text-[12px] text-slate-500 font-normal leading-tight">One team.</p>
              <p className="text-[13px] text-[#1e382b] font-bold mt-0.5 leading-tight">Many possibilities.</p>
            </div>
            <Sparkles className="w-4 h-4 text-[#4a8a65] absolute top-3 right-3 opacity-80" />
          </div>

          {/* Utility links */}
          <div className="space-y-0.5 border-t border-[#eaedea] pt-3">
            <button
              onClick={onOpenHelp}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[13px] text-slate-600 hover:text-slate-900 hover:bg-[#f2f5f2] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                <span>Help & support</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => handleNavClick('settings')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-[#eaf2ec] text-[#1b3a2a] font-semibold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#f2f5f2]'
              }`}
            >
              <Settings className={`w-4 h-4 ${activeTab === 'settings' ? 'text-[#2e6848]' : 'text-slate-400'}`} />
              <span>Workspace settings</span>
            </button>
          </div>

          {/* Acceleron Solutions Brand Tagline */}
          <div className="border-l-2 border-[#162544] pl-2.5 py-0.5 mt-2">
            <p className="text-[12px] font-bold text-[#162544] tracking-tight leading-tight">
              Acceleron Solutions
            </p>
            <p className="text-[9.5px] text-slate-400 leading-tight mt-0.5">
              Connected. Empowered. Together.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
