import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
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

  const favourited = isFavourite(app.id);

  const handleCardClick = (e: React.MouseEvent) => {
    // If user clicked the star button, don't trigger launch
    const target = e.target as HTMLElement;
    if (target.closest('button[data-action="favourite"]')) {
      return;
    }
    launchApp(app);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative rounded-xl bg-white border border-[#e2e8f0] hover:border-[#162544]/30 p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      {/* Top Bar: Icon and Star Toggle */}
      <div>
        <div className="flex items-start justify-between">
          <AppIcon type={app.iconType} />
          
          {/* Star button */}
          <button
            type="button"
            data-action="favourite"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavourite(app.id);
            }}
            title={favourited ? 'Remove from favourites' : 'Add to favourites'}
            className="p-1 rounded-lg hover:bg-slate-100 transition-colors"
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

        {/* Category Tag */}
        <div className="mt-3.5 mb-1">
          <span className="text-[9.5px] font-bold tracking-[0.16em] uppercase text-slate-400 group-hover:text-[#162544] transition-colors">
            {app.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[15.5px] font-bold text-slate-900 tracking-tight group-hover:text-[#162544] transition-colors">
          {app.name}
        </h3>

        {/* Description */}
        <p className="text-[12px] text-slate-500 font-normal leading-relaxed mt-1 line-clamp-2">
          {app.description}
        </p>
      </div>

      {/* Card Footer: Metadata and Action */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11.5px]">
        {/* Left bullet tag */}
        <span className="text-slate-400 font-normal flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          {app.tag}
        </span>

        {/* Right launch link */}
        <button
          type="button"
          data-action="launch"
          onClick={(e) => {
            e.stopPropagation();
            launchApp(app);
          }}
          className="inline-flex items-center gap-1 font-semibold text-slate-700 group-hover:text-[#162544] transition-colors text-[11.5px]"
        >
          <span>Open application</span>
          <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};
