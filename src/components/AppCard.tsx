import React from 'react';
import { Star, ExternalLink, Link2, Settings2 } from 'lucide-react';
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
    launchApp, 
    getAppUrl, 
    setEditingAppUrl 
  } = useApp();

  const favourited = isFavourite(app.id);
  const currentUrl = getAppUrl(app);
  const isCustomUrl = currentUrl !== app.defaultUrl;

  const handleCardClick = (e: React.MouseEvent) => {
    // If user clicked the star or edit button, don't launch
    const target = e.target as HTMLElement;
    if (target.closest('button[data-action]')) {
      return;
    }
    launchApp(app);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative rounded-2xl bg-white border border-[#e8ece9] hover:border-[#cbd8d0] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      {/* Top Bar: Icon and Star Toggle */}
      <div>
        <div className="flex items-start justify-between">
          <AppIcon type={app.iconType} />
          
          <div className="flex items-center gap-1">
            {/* Quick URL config trigger */}
            <button
              type="button"
              data-action="edit-url"
              onClick={(e) => {
                e.stopPropagation();
                setEditingAppUrl(app);
              }}
              title="Edit application URL"
              className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all"
            >
              <Settings2 className="w-3.5 h-3.5" />
            </button>

            {/* Star button */}
            <button
              type="button"
              data-action="favourite"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavourite(app.id);
              }}
              title={favourited ? 'Remove from favourites' : 'Add to favourites'}
              className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
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
        </div>

        {/* Category Tag */}
        <div className="mt-5 mb-1.5">
          <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-400">
            {app.category}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-2">
          <h3 className="text-[17px] font-bold text-slate-900 tracking-tight group-hover:text-[#162544] transition-colors">
            {app.name}
          </h3>
          {isCustomUrl && (
            <span title="Custom configured URL" className="text-emerald-600">
              <Link2 className="w-3 h-3" />
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-[13px] text-slate-500 font-normal leading-relaxed mt-1.5">
          {app.description}
        </p>
      </div>

      {/* Card Footer: Metadata and Action */}
      <div className="mt-6 pt-4 border-t border-slate-100/90 flex items-center justify-between text-[12px]">
        {/* Left bullet tag */}
        <span className="text-slate-400 font-normal text-[11.5px] flex items-center gap-1.5">
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
          className="inline-flex items-center gap-1 font-semibold text-slate-700 group-hover:text-[#162544] transition-colors text-[12px]"
        >
          <span>Open application</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};
