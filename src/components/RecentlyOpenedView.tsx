import React from 'react';
import { Clock, Trash2, ExternalLink, Star, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppIcon } from './AppIcons';

export const RecentlyOpenedView: React.FC = () => {
  const { 
    recentApps, 
    apps, 
    clearRecentApps, 
    launchApp, 
    isFavourite, 
    toggleFavourite, 
    setActiveTab
  } = useApp();

  // Combine recents data with app items
  const recentItems = recentApps
    .map(entry => {
      const app = apps.find(a => a.id === entry.appId);
      return app ? { ...entry, app } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => b.lastOpenedAt - a.lastOpenedAt);

  const formatRelativeTime = (timestamp: number) => {
    const diffSeconds = Math.floor((Date.now() - timestamp) / 1000);
    if (diffSeconds < 60) return 'Just now';
    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#eaedea]">
        <div>
          <button
            onClick={() => setActiveTab('overview')}
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-500 hover:text-slate-800 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </button>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Recently opened
            </h1>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#e8ede9] text-[#27533b]">
              {recentItems.length}
            </span>
          </div>
          <p className="text-[13.5px] text-slate-500 font-normal mt-1">
            Tracked in your local browser storage. Fast access to your daily tools.
          </p>
        </div>

        {recentItems.length > 0 && (
          <button
            onClick={clearRecentApps}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12.5px] text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors self-start sm:self-auto font-medium"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear history</span>
          </button>
        )}
      </div>

      {/* Recents List */}
      {recentItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recentItems.map(({ app, lastOpenedAt, openCount }) => {
            const favourited = isFavourite(app.id);
            return (
              <div
                key={app.id}
                onClick={() => launchApp(app)}
                className="group relative rounded-2xl bg-white border border-[#e8ece9] hover:border-[#cbd8d0] p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <AppIcon type={app.iconType} />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(app.id);
                      }}
                      className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          favourited ? 'text-amber-400 fill-amber-400' : 'text-slate-300 hover:text-slate-400'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="mt-4">
                    <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-400">
                      {app.category}
                    </span>
                    <h3 className="text-[16.5px] font-bold text-slate-900 group-hover:text-[#162544] transition-colors mt-0.5">
                      {app.name}
                    </h3>
                    <p className="text-[12.5px] text-slate-500 line-clamp-2 mt-1">
                      {app.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11.5px]">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{formatRelativeTime(lastOpenedAt)}</span>
                    <span className="text-slate-300">•</span>
                    <span>{openCount} {openCount === 1 ? 'open' : 'opens'}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-semibold text-slate-700 group-hover:text-[#162544]">
                    <span>Open</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl bg-white border border-[#e8ece9] p-12 text-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-slate-300" />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            No recently opened applications
          </h3>
          <p className="text-[13px] text-slate-500 max-w-sm mx-auto mt-1">
            As you launch applications from the workspace, they will appear here automatically for quick re-access.
          </p>
          <button
            onClick={() => setActiveTab('overview')}
            className="mt-4 px-4 py-2 rounded-xl bg-[#eaf2ec] text-[#1e382b] font-semibold text-[13px] hover:bg-[#dfebe2] transition-colors"
          >
            Launch an application
          </button>
        </div>
      )}
    </div>
  );
};
