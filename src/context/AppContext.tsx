import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AppItem, RecentlyOpenedEntry, ViewTab } from '../types';
import { INITIAL_APPS } from '../data/appsData';

interface AppContextType {
  apps: AppItem[];
  favourites: string[];
  recentApps: RecentlyOpenedEntry[];
  activeTab: ViewTab;
  searchQuery: string;
  selectedCategory: string;
  activeFilterTab: 'all' | 'favourites';
  
  // Actions
  setActiveTab: (tab: ViewTab) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setActiveFilterTab: (tab: 'all' | 'favourites') => void;
  toggleFavourite: (appId: string) => void;
  isFavourite: (appId: string) => boolean;
  launchApp: (app: AppItem) => void;
  clearRecentApps: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  FAVOURITES: 'acceleron_favourites',
  RECENTS: 'acceleron_recent_apps',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ViewTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'favourites'>('all');

  // Favourites in browser localStorage
  const [favourites, setFavourites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVOURITES);
      return saved ? JSON.parse(saved) : ['zoho-crm', 'darwinbox-hrms'];
    } catch {
      return ['zoho-crm', 'darwinbox-hrms'];
    }
  });

  // Recently opened apps in browser localStorage
  const [recentApps, setRecentApps] = useState<RecentlyOpenedEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RECENTS);
      return saved ? JSON.parse(saved) : [
        { appId: 'zoho-crm', lastOpenedAt: Date.now() - 1000 * 60 * 25, openCount: 14 },
        { appId: 'darwinbox-hrms', lastOpenedAt: Date.now() - 1000 * 60 * 120, openCount: 8 },
        { appId: 'acceleronplus', lastOpenedAt: Date.now() - 1000 * 60 * 300, openCount: 5 },
      ];
    } catch {
      return [];
    }
  });

  // Persist favourites
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVOURITES, JSON.stringify(favourites));
    } catch (e) {
      console.warn('Failed to save favourites to localStorage', e);
    }
  }, [favourites]);

  // Persist recent apps
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RECENTS, JSON.stringify(recentApps));
    } catch (e) {
      console.warn('Failed to save recents to localStorage', e);
    }
  }, [recentApps]);

  const toggleFavourite = (appId: string) => {
    setFavourites(prev => 
      prev.includes(appId) ? prev.filter(id => id !== appId) : [...prev, appId]
    );
  };

  const isFavourite = (appId: string) => favourites.includes(appId);

  const launchApp = (app: AppItem) => {
    // Record into browser localStorage
    setRecentApps(prev => {
      const existing = prev.find(item => item.appId === app.id);
      const now = Date.now();
      if (existing) {
        return [
          { appId: app.id, lastOpenedAt: now, openCount: existing.openCount + 1 },
          ...prev.filter(item => item.appId !== app.id)
        ];
      } else {
        return [{ appId: app.id, lastOpenedAt: now, openCount: 1 }, ...prev];
      }
    });

    // Directly open hardcoded URL in new tab
    if (app.url && app.url !== '#') {
      window.open(app.url, '_blank', 'noopener,noreferrer');
    }
  };

  const clearRecentApps = () => {
    setRecentApps([]);
    localStorage.removeItem(STORAGE_KEYS.RECENTS);
  };

  return (
    <AppContext.Provider
      value={{
        apps: INITIAL_APPS,
        favourites,
        recentApps,
        activeTab,
        searchQuery,
        selectedCategory,
        activeFilterTab,
        setActiveTab,
        setSearchQuery,
        setSelectedCategory,
        setActiveFilterTab,
        toggleFavourite,
        isFavourite,
        launchApp,
        clearRecentApps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
