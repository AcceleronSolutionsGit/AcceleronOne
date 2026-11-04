import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AppItem, RecentlyOpenedEntry, UserProfile, ViewTab } from '../types';
import { INITIAL_APPS } from '../data/appsData';

interface AppContextType {
  apps: AppItem[];
  favourites: string[];
  recentApps: RecentlyOpenedEntry[];
  appUrls: Record<string, string>;
  activeTab: ViewTab;
  searchQuery: string;
  selectedCategory: string;
  activeFilterTab: 'all' | 'favourites';
  userProfile: UserProfile;
  ssoEnabled: boolean;
  editingAppUrl: AppItem | null;
  
  // Actions
  setActiveTab: (tab: ViewTab) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setActiveFilterTab: (tab: 'all' | 'favourites') => void;
  toggleFavourite: (appId: string) => void;
  isFavourite: (appId: string) => boolean;
  launchApp: (app: AppItem) => void;
  clearRecentApps: () => void;
  updateAppUrl: (appId: string, url: string) => void;
  resetAllUrls: () => void;
  getAppUrl: (app: AppItem) => string;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  toggleSsoMode: () => void;
  setEditingAppUrl: (app: AppItem | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  FAVOURITES: 'myacceleron_favourites',
  RECENTS: 'myacceleron_recent_apps',
  URLS: 'myacceleron_custom_urls',
  PROFILE: 'myacceleron_user_profile',
  SSO: 'myacceleron_sso_preview',
};

const DEFAULT_USER: UserProfile = {
  name: 'Arindam',
  email: 'arindam@acceleron.com',
  role: 'Product & Engineering',
  isGuest: true,
  avatarLetter: 'A',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ViewTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'favourites'>('all');
  const [editingAppUrl, setEditingAppUrl] = useState<AppItem | null>(null);

  // Favourites state from localStorage
  const [favourites, setFavourites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVOURITES);
      return saved ? JSON.parse(saved) : ['zoho-crm', 'darwinbox-hrms'];
    } catch {
      return ['zoho-crm', 'darwinbox-hrms'];
    }
  });

  // Recently opened apps from localStorage
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

  // Custom URLs mapped by appId
  const [appUrls, setAppUrls] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.URLS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // User profile
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? { ...DEFAULT_USER, ...JSON.parse(saved) } : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  // SSO mode preview
  const [ssoEnabled, setSsoEnabled] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.SSO) === 'true';
    } catch {
      return false;
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

  // Persist custom URLs
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.URLS, JSON.stringify(appUrls));
    } catch (e) {
      console.warn('Failed to save URLs to localStorage', e);
    }
  }, [appUrls]);

  // Persist profile
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(userProfile));
    } catch (e) {
      console.warn('Failed to save user profile to localStorage', e);
    }
  }, [userProfile]);

  // Persist SSO preview setting
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SSO, String(ssoEnabled));
    } catch (e) {
      console.warn('Failed to save SSO setting', e);
    }
  }, [ssoEnabled]);

  const toggleFavourite = (appId: string) => {
    setFavourites(prev => 
      prev.includes(appId) ? prev.filter(id => id !== appId) : [...prev, appId]
    );
  };

  const isFavourite = (appId: string) => favourites.includes(appId);

  const getAppUrl = (app: AppItem) => {
    return appUrls[app.id] && appUrls[app.id].trim() !== '' ? appUrls[app.id] : app.defaultUrl;
  };

  const launchApp = (app: AppItem) => {
    const targetUrl = getAppUrl(app);

    // Record in recently opened
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

    // Open link in new tab
    if (targetUrl && targetUrl !== '#') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const clearRecentApps = () => {
    setRecentApps([]);
    localStorage.removeItem(STORAGE_KEYS.RECENTS);
  };

  const updateAppUrl = (appId: string, url: string) => {
    setAppUrls(prev => ({
      ...prev,
      [appId]: url.trim()
    }));
  };

  const resetAllUrls = () => {
    setAppUrls({});
    localStorage.removeItem(STORAGE_KEYS.URLS);
  };

  const updateUserProfile = (profile: Partial<UserProfile>) => {
    setUserProfile(prev => {
      const updated = { ...prev, ...profile };
      if (profile.name) {
        updated.avatarLetter = profile.name.trim().charAt(0).toUpperCase() || 'A';
      }
      return updated;
    });
  };

  const toggleSsoMode = () => {
    setSsoEnabled(prev => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        apps: INITIAL_APPS,
        favourites,
        recentApps,
        appUrls,
        activeTab,
        searchQuery,
        selectedCategory,
        activeFilterTab,
        userProfile,
        ssoEnabled,
        editingAppUrl,
        setActiveTab,
        setSearchQuery,
        setSelectedCategory,
        setActiveFilterTab,
        toggleFavourite,
        isFavourite,
        launchApp,
        clearRecentApps,
        updateAppUrl,
        resetAllUrls,
        getAppUrl,
        updateUserProfile,
        toggleSsoMode,
        setEditingAppUrl,
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
