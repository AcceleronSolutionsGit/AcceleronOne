import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeroBannerProps {
  onScrollToApps?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onScrollToApps }) => {
  const { apps, launchApp } = useApp();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  // Top primary internal tools for quick 1-click jump
  const quickTools = apps.filter(a => ['acceleronplus', 'darwinbox-hrms', 'acceleron-champ'].includes(a.id));

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 border-t-3 border-t-[#162544] p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Column: Human Editorial Intro */}
        <div className="space-y-3 max-w-xl">
          {/* Subtle status badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-[11px] font-medium text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Acceleron Workspace Directory</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">5 platforms live</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-[28px] font-bold text-[#162544] tracking-tight leading-snug">
            {getGreeting()}, welcome to Acceleron One.
          </h1>

          {/* Subtitle */}
          <p className="text-[13.5px] text-slate-600 font-normal leading-relaxed">
            Your single destination for team delivery, HR essentials, rewards, and financials.
            Launch any tool below or use quick search.
          </p>

          {/* Action pills */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-[12px] text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Zap className="w-3.5 h-3.5 text-[#e31b23]" />
              Instant Launch
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-[#162544]" />
              Secure Corporate Links
            </span>
            <span className="text-slate-300">•</span>
            <button
              onClick={onScrollToApps}
              className="inline-flex items-center gap-1 font-semibold text-[#162544] hover:text-[#e31b23] transition-colors"
            >
              <span>View all tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Practical Quick Jump Widget */}
        <div className="bg-[#f8fafc] border border-slate-200/90 rounded-xl p-3.5 sm:p-4 min-w-[280px] lg:max-w-[340px] shrink-0">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Frequently Launched
            </span>
            <span className="text-[10px] text-slate-400 font-mono">1-Click</span>
          </div>

          <div className="space-y-1.5">
            {quickTools.map(tool => (
              <button
                key={tool.id}
                onClick={() => launchApp(tool)}
                className="w-full flex items-center justify-between p-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200/70 hover:border-slate-300 text-left transition-all group shadow-2xs"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#162544] group-hover:bg-[#e31b23] transition-colors shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-slate-800 truncate group-hover:text-[#162544]">
                      {tool.name}
                    </p>
                    <p className="text-[10.5px] text-slate-400 truncate">
                      {tool.tag}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#162544] shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
