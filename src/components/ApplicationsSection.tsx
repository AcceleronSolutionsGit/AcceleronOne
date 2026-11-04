import React, { useRef, useEffect } from 'react';
import { Search, Star, Filter, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppCard } from './AppCard';
import { AdvantageCard } from './AdvantageCard';
import { CATEGORIES } from '../data/appsData';

export const ApplicationsSection: React.FC = () => {
  const {
    apps,
    favourites,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    activeFilterTab,
    setActiveFilterTab,
  } = useApp();

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter apps based on search, category, and activeFilterTab
  const filteredApps = apps.filter((app) => {
    // Favourites filter
    if (activeFilterTab === 'favourites' && !favourites.includes(app.id)) {
      return false;
    }

    // Category filter
    if (selectedCategory !== 'All categories' && app.category !== selectedCategory) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      const matchName = app.name.toLowerCase().includes(query);
      const matchDesc = app.description.toLowerCase().includes(query);
      const matchCat = app.category.toLowerCase().includes(query);
      const matchTag = app.tag.toLowerCase().includes(query);
      return matchName || matchDesc || matchCat || matchTag;
    }

    return true;
  });

  const isDefaultView = searchQuery === '' && selectedCategory === 'All categories' && activeFilterTab === 'all';

  return (
    <section id="applications-section" className="mt-10 space-y-6">
      {/* Section Header: Title & View Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Your applications
            </h2>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#e8ede9] text-[#27533b]">
              {String(apps.length).padStart(2, '0')}
            </span>
          </div>
          <p className="text-[13.5px] text-slate-500 font-normal mt-1">
            A connected toolkit for everything you do.
          </p>
        </div>

        {/* View Switch Pill (All apps | Favourites) */}
        <div className="flex items-center p-1 rounded-xl bg-[#eef2ef] border border-[#dce5df] self-start sm:self-auto">
          <button
            onClick={() => setActiveFilterTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
              activeFilterTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All apps
          </button>
          <button
            onClick={() => setActiveFilterTab('favourites')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
              activeFilterTab === 'favourites'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${activeFilterTab === 'favourites' ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
            <span>Favourites</span>
            {favourites.length > 0 && (
              <span className="text-[11px] ml-0.5 px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-600 font-mono">
                {favourites.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="md:col-span-7 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find your application..."
            className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-white border border-[#e2e8e4] text-[13.5px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e6848]/20 focus:border-[#2e6848] transition-all shadow-2xs"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-[12px] font-medium"
            >
              Clear
            </button>
          ) : (
            <kbd className="hidden sm:inline-block absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded">
              /
            </kbd>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="md:col-span-3 relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full appearance-none pl-3.5 pr-8 py-2.5 rounded-xl bg-white border border-[#e2e8e4] text-[13px] text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#2e6848]/20 focus:border-[#2e6848] transition-all shadow-2xs cursor-pointer"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All categories' ? 'All categories' : cat.charAt(0) + cat.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Results Counter */}
        <div className="md:col-span-2 text-right">
          <span className="text-[12.5px] text-slate-400 font-medium">
            {filteredApps.length} {filteredApps.length === 1 ? 'application' : 'applications'}
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}

          {/* Show Advantage card on default overview */}
          {isDefaultView && <AdvantageCard />}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl bg-white border border-[#e8ece9] p-12 text-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center mx-auto mb-3">
            {activeFilterTab === 'favourites' ? (
              <Star className="w-6 h-6 text-slate-300" />
            ) : (
              <Filter className="w-6 h-6 text-slate-300" />
            )}
          </div>
          <h3 className="text-base font-bold text-slate-800">
            {activeFilterTab === 'favourites' ? 'No favourite applications yet' : 'No applications found'}
          </h3>
          <p className="text-[13px] text-slate-500 max-w-sm mx-auto mt-1">
            {activeFilterTab === 'favourites'
              ? 'Click the star icon on any card in the overview to add it to your favourites list.'
              : 'Try clearing your search query or selecting "All categories" to see all applications.'}
          </p>
          {activeFilterTab === 'favourites' && (
            <button
              onClick={() => setActiveFilterTab('all')}
              className="mt-4 px-4 py-2 rounded-xl bg-[#eaf2ec] text-[#1e382b] font-semibold text-[13px] hover:bg-[#dfebe2] transition-colors"
            >
              Browse all applications
            </button>
          )}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-[13px] hover:bg-slate-200 transition-colors"
            >
              Clear search
            </button>
          )}
        </div>
      )}
    </section>
  );
};
