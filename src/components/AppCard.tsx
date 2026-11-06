import React, { useState } from 'react';
import { Star, ExternalLink, Copy, Check } from 'lucide-react';
import type { AppItem } from '../types';
import { AppIcon } from './AppIcons';
import { useApp } from '../context/AppContext';

interface AppCardProps {
  app: AppItem;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const { 
    isFavourite, 
    toggleFavourite, 
    launchApp 
  } = useApp();

  const [copied, setCopied] = useState(false);
  const favourited = isFavourite(app.id);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button[data-action]')) {
      return;
    }
    launchApp(app);
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(app.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract clean hostname for display
  const getHostname = (urlStr: string) => {
    try {
      const parsed = new URL(urlStr);
      return parsed.hostname;
    } catch {
      return urlStr;
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative rounded-xl bg-white border border-slate-200/90 hover:border-[#162544]/30 hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top Header: Brand Icon, Category Badge & Favorite Star */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <AppIcon type={app.iconType} />
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 group-hover:text-[#162544] transition-colors">
                {app.category}
              </span>
              <h3 className="text-[15.5px] font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#162544] transition-colors">
                {app.name}
              </h3>
            </div>
          </div>

          {/* Star favorite toggle */}
          <button
            type="button"
            data-action="favourite"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavourite(app.id);
            }}
            title={favourited ? 'Remove from favourites' : 'Star as favourite'}
            className="p-1 rounded-md text-slate-300 hover:text-amber-500 hover:bg-slate-50 transition-colors"
          >
            <Star 
              className={`w-4 h-4 transition-transform active:scale-125 ${
                favourited 
                  ? 'text-amber-400 fill-amber-400' 
                  : 'text-slate-300 hover:text-slate-400'
              }`} 
            />
          </button>
        </div>

        {/* Description */}
        <p className="text-[12.5px] text-slate-500 font-normal leading-relaxed mt-3">
          {app.description}
        </p>

        {/* Destination Hostname */}
        <div className="mt-2.5">
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
            {getHostname(app.url)}
          </span>
        </div>
      </div>

      {/* Footer: Tag & Actions */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11.5px]">
        {/* Tag pill */}
        <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#162544] transition-colors" />
          {app.tag}
        </span>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          {/* Copy Link Button */}
          <button
            type="button"
            data-action="copy"
            onClick={handleCopyLink}
            title={copied ? 'Link copied!' : 'Copy link'}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Launch Link */}
          <button
            type="button"
            data-action="launch"
            onClick={(e) => {
              e.stopPropagation();
              launchApp(app);
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 group-hover:bg-[#162544] text-slate-700 group-hover:text-white font-semibold transition-all text-[11.5px]"
          >
            <span>Open</span>
            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
