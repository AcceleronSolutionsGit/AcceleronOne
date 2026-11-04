import React, { useState } from 'react';
import { 
  Link2, 
  ShieldCheck, 
  User, 
  RotateCcw, 
  Save, 
  Check, 
  ExternalLink, 
  ArrowLeft,
  Key,
  Database,
  Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppIcon } from './AppIcons';

export const SettingsView: React.FC = () => {
  const { 
    apps, 
    appUrls, 
    updateAppUrl, 
    resetAllUrls, 
    getAppUrl, 
    userProfile, 
    updateUserProfile,
    ssoEnabled,
    toggleSsoMode,
    setActiveTab,
    clearRecentApps,
    recentApps,
    favourites
  } = useApp();

  const [activeTab, setActiveTabLocal] = useState<'urls' | 'sso' | 'profile' | 'storage'>('urls');
  const [localUrls, setLocalUrls] = useState<Record<string, string>>(() => {
    const map: Record<string, string> = {};
    apps.forEach(app => {
      map[app.id] = getAppUrl(app);
    });
    return map;
  });

  const [userName, setUserName] = useState(userProfile.name);
  const [userEmail, setUserEmail] = useState(userProfile.email);
  const [savedSuccess, setSavedSuccess] = useState<string | null>(null);

  const handleUrlChange = (appId: string, value: string) => {
    setLocalUrls(prev => ({
      ...prev,
      [appId]: value
    }));
  };

  const saveUrl = (appId: string) => {
    updateAppUrl(appId, localUrls[appId] || '');
    setSavedSuccess(appId);
    setTimeout(() => setSavedSuccess(null), 2000);
  };

  const saveAllUrls = () => {
    Object.entries(localUrls).forEach(([id, url]) => {
      updateAppUrl(id, url);
    });
    setSavedSuccess('all');
    setTimeout(() => setSavedSuccess(null), 2500);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({ name: userName, email: userEmail });
    setSavedSuccess('profile');
    setTimeout(() => setSavedSuccess(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="pb-4 border-b border-[#eaedea]">
        <button
          onClick={() => setActiveTab('overview')}
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-500 hover:text-slate-800 mb-2 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </button>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Workspace Settings & Configuration
        </h1>
        <p className="text-[13.5px] text-slate-500 font-normal mt-1">
          Manage application URLs, configure SSO roadmap, and customize your local profile.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 text-[13px] font-medium">
        <button
          onClick={() => setActiveTabLocal('urls')}
          className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'urls'
              ? 'border-[#2e6848] text-[#1e382b] font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Link2 className="w-4 h-4" />
          <span>Application URLs</span>
        </button>

        <button
          onClick={() => setActiveTabLocal('sso')}
          className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'sso'
              ? 'border-[#2e6848] text-[#1e382b] font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>SSO Architecture</span>
        </button>

        <button
          onClick={() => setActiveTabLocal('profile')}
          className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'profile'
              ? 'border-[#2e6848] text-[#1e382b] font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <User className="w-4 h-4" />
          <span>User Profile</span>
        </button>

        <button
          onClick={() => setActiveTabLocal('storage')}
          className={`pb-2.5 px-3 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'storage'
              ? 'border-[#2e6848] text-[#1e382b] font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Local Storage</span>
        </button>
      </div>

      {/* TAB 1: APPLICATION URLS */}
      {activeTab === 'urls' && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#f2f7f4] border border-[#dce8e0] p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#2e6848] shrink-0 mt-0.5" />
            <div className="text-[13px] text-slate-700">
              <span className="font-semibold text-[#1e382b]">Configure your destination links: </span>
              All URLs set below will be instantly saved to your browser's local storage and used when clicking "Open application". You can update them at any time.
            </div>
          </div>

          <div className="space-y-4">
            {apps.map((app) => {
              const currentVal = localUrls[app.id] ?? '';
              const isDefault = currentVal === app.defaultUrl;
              const isSaved = savedSuccess === app.id || savedSuccess === 'all';

              return (
                <div 
                  key={app.id}
                  className="rounded-2xl bg-white border border-[#e8ece9] p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AppIcon type={app.iconType} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[15px] font-bold text-slate-900">{app.name}</h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            isDefault ? 'bg-slate-100 text-slate-500' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}>
                            {isDefault ? 'Default URL' : 'Custom URL'}
                          </span>
                        </div>
                        <p className="text-[12px] text-slate-400">{app.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {currentVal && (
                        <a
                          href={currentVal}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 text-[12px] flex items-center gap-1"
                          title="Test open link"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="hidden sm:inline">Test</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => saveUrl(app.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12.5px] font-semibold transition-all ${
                          isSaved
                            ? 'bg-[#2e6848] text-white'
                            : 'bg-[#eaf2ec] text-[#1e382b] hover:bg-[#dfebe2]'
                        }`}
                      >
                        {isSaved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
                        <span>{isSaved ? 'Saved' : 'Save'}</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Destination URL
                    </label>
                    <input
                      type="url"
                      value={currentVal}
                      onChange={(e) => handleUrlChange(app.id, e.target.value)}
                      placeholder={`e.g. ${app.defaultUrl}`}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[13px] text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2e6848]/20 focus:border-[#2e6848] font-mono transition-all"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={resetAllUrls}
              className="inline-flex items-center gap-1.5 text-[12.5px] text-slate-500 hover:text-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset all URLs to defaults</span>
            </button>

            <button
              onClick={saveAllUrls}
              className="px-5 py-2.5 rounded-xl bg-[#162544] hover:bg-[#0f1b33] text-white font-semibold text-[13px] transition-all flex items-center gap-2 shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save all changes</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: SSO ARCHITECTURE ROADMAP */}
      {activeTab === 'sso' && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-white border border-[#e8ece9] p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Phase 2 Roadmap
                </span>
                <h3 className="text-[18px] font-bold text-slate-900 mt-2">
                  Acceleron Single Sign-On (SSO) Integration
                </h3>
                <p className="text-[13px] text-slate-500 mt-1 max-w-xl">
                  Currently, all users access the workspace as guests without credentials; favourites and recent tools are persisted per-browser via <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[11px] font-mono">localStorage</code>. When you are ready, enterprise SSO will bind each user's corporate identity.
                </p>
              </div>

              {/* Interactive toggle */}
              <div className="text-right">
                <button
                  onClick={toggleSsoMode}
                  className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold border transition-all ${
                    ssoEnabled
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {ssoEnabled ? 'SSO Mode: Active' : 'SSO Mode: Guest'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-[13.5px] text-slate-800">
                  <Key className="w-4 h-4 text-blue-600" />
                  <span>SAML 2.0 / OIDC</span>
                </div>
                <p className="text-[12px] text-slate-500 mt-1">
                  Ready to plug into Microsoft Entra ID (Azure AD), Okta, Google Workspace, or Ping Identity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-[13.5px] text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Role-Based Access</span>
                </div>
                <p className="text-[12px] text-slate-500 mt-1">
                  App visibility and permissions mapped to corporate directory groups (Engineering, Sales, HR, Finance).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-[13.5px] text-slate-800">
                  <Database className="w-4 h-4 text-purple-600" />
                  <span>Cloud Sync</span>
                </div>
                <p className="text-[12px] text-slate-500 mt-1">
                  Smooth migration: User favourites and recents automatically migrate from browser local storage to cloud profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: USER PROFILE */}
      {activeTab === 'profile' && (
        <div className="rounded-2xl bg-white border border-[#e8ece9] p-6 max-w-lg">
          <h3 className="text-[17px] font-bold text-slate-900 mb-1">Local Profile Customization</h3>
          <p className="text-[13px] text-slate-500 mb-5">
            Personalize the name displayed on the dashboard header and hero banner.
          </p>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-slate-700 mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Arindam"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[13.5px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2e6848]/20 focus:border-[#2e6848]"
                required
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-slate-700 mb-1">
                Corporate Email (Simulated)
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="e.g. user@acceleron.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[13.5px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2e6848]/20 focus:border-[#2e6848]"
                required
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#2e6848] hover:bg-[#25553b] text-white font-semibold text-[13px] transition-colors flex items-center gap-2"
            >
              {savedSuccess === 'profile' ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedSuccess === 'profile' ? 'Profile Updated' : 'Update Profile'}</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 4: LOCAL STORAGE STATUS */}
      {activeTab === 'storage' && (
        <div className="space-y-4">
          <div className="rounded-2xl bg-white border border-[#e8ece9] p-6 space-y-4">
            <h3 className="text-[17px] font-bold text-slate-900">Current Browser Storage State</h3>
            <p className="text-[13px] text-slate-500">
              Your browser stores your workspace preferences locally with zero external tracking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#f8faf9] border border-slate-200">
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Favourites</span>
                <p className="text-2xl font-bold text-slate-800 mt-1">{favourites.length} apps</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8faf9] border border-slate-200">
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Recently Opened</span>
                <p className="text-2xl font-bold text-slate-800 mt-1">{recentApps.length} tracked</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8faf9] border border-slate-200">
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Custom URLs</span>
                <p className="text-2xl font-bold text-slate-800 mt-1">{Object.keys(appUrls).length} set</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <button
                onClick={clearRecentApps}
                className="px-4 py-2 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 font-semibold text-[12.5px] transition-colors"
              >
                Clear Recent Activity
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
