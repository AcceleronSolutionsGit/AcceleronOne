import React from 'react';
import { 
  Home, 
  LayoutGrid, 
  Star, 
  Clock, 
  Sparkles,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AcceleronLogoImage } from './AppIcons';
import type { ViewTab } from '../types';

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, setMobileOpen }) => {
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
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-2xs z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-60 bg-white border-r border-[#e2e8f0] flex flex-col justify-between p-4 transition-transform duration-200 ease-in-out shrink-0 select-none
        ${mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Top: Logo & Brand */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <div className="flex flex-col">
              <AcceleronLogoImage height={32} />
              <span className="text-[9px] uppercase tracking-[0.16em] text-slate-400 font-semibold mt-1.5 pl-0.5">
                Connected Workspace
              </span>
            </div>

            {/* Close button for mobile */}
            <button 
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Section */}
          <div className="mt-4">
            <div className="text-[9.5px] uppercase font-bold tracking-[0.18em] text-slate-400 px-2.5 mb-2">
              Workspace
            </div>
            
            <nav className="space-y-0.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-[13px] font-medium transition-all group
                      ${isActive 
                        ? 'bg-[#162544] text-white shadow-xs font-semibold' 
                        : 'text-slate-600 hover:text-[#162544] hover:bg-[#edf2f8]'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`transition-colors ${isActive ? 'text-[#e31b23]' : 'text-slate-400 group-hover:text-[#162544]'}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.count !== undefined && (
                        <span className={`text-[10.5px] px-1.5 py-0.2 rounded-md font-mono ${
                          isActive ? 'bg-white/20 text-white font-bold' : 'text-slate-400'
                        }`}>
                          {item.count}
                        </span>
                      )}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="space-y-3 pt-3">
          {/* Motivation Box */}
          <div className="relative rounded-xl bg-gradient-to-br from-[#162544] to-[#1f335c] text-white p-3 overflow-hidden shadow-xs">
            <div className="pr-4 relative z-10">
              <p className="text-[11px] text-slate-300 font-normal leading-tight">One team.</p>
              <p className="text-[12px] text-white font-bold mt-0.5 leading-tight flex items-center gap-1">
                <span>Many possibilities.</span>
              </p>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-[#e31b23] absolute top-2.5 right-2.5" />
          </div>

          {/* Acceleron Solutions Brand Tagline */}
          <div className="border-l-2 border-[#e31b23] pl-2 py-0.5">
            <p className="text-[11px] font-bold text-[#162544] tracking-tight leading-tight">
              Acceleron Solutions
            </p>
            <p className="text-[9px] text-slate-400 leading-tight mt-0.5">
              Connected. Empowered. Together.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
