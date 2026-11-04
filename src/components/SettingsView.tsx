import React, { useState } from 'react';
import { 
  ShieldCheck, 
  User, 
  Save, 
  Check, 
  ArrowLeft,
  Key,
  Database,
  ExternalLink,
  Code2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppIcon } from './AppIcons';

export const SettingsView: React.FC = () => {
  const { 
    apps, 
    userProfile, 
    updateUserProfile,
    ssoEnabled,
    toggleSsoMode,
    setActiveTab,
    clearRecentApps,
    recentApps,
    favourites
  } = useApp();

  const [activeTab, setActiveTabLocal] = useState<'sso' | 'links' | 'profile' | 'storage'>('sso');
  const [userName, setUserName] = useState(userProfile.name);
  const [userEmail, setUserEmail] = useState(userProfile.email);
  const [savedSuccess, setSavedSuccess] = useState<string | null>(null);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({ name: userName, email: userEmail });
    setSavedSuccess('profile');
    setTimeout(() => setSavedSuccess(null), 2000);
  };

  return (
    <div className="space-y-4 max-w-4xl">
      {/* Header */}
      <div className="pb-3 border-b border-[#e2e8f0]">
        <button
          onClick={() => setActiveTab('overview')}
          className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-slate-500 hover:text-slate-800 mb-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </button>
        <h1 className="text-xl font-bold text-[#162544] tracking-tight">
          Workspace Settings & SSO Blueprint
        </h1>
        <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
          Overview of application integration, upcoming SSO architecture, and local preferences.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 text-[12.5px] font-medium">
        <button
          onClick={() => setActiveTabLocal('sso')}
          className={`pb-2 px-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'sso'
              ? 'border-[#162544] text-[#162544] font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#e31b23]" />
          <span>SSO Architecture</span>
        </button>

        <button
          onClick={() => setActiveTabLocal('links')}
          className={`pb-2 px-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'links'
              ? 'border-[#162544] text-[#162544] font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Hardcoded URLs</span>
        </button>

        <button
          onClick={() => setActiveTabLocal('profile')}
          className={`pb-2 px-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'profile'
              ? 'border-[#162544] text-[#162544] font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>User Profile</span>
        </button>

        <button
          onClick={() => setActiveTabLocal('storage')}
          className={`pb-2 px-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'storage'
              ? 'border-[#162544] text-[#162544] font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Database className="w-3.5 h-3.5" />
          <span>Local Storage</span>
        </button>
      </div>

      {/* TAB 1: SSO ARCHITECTURE ROADMAP */}
      {activeTab === 'sso' && (
        <div className="space-y-4">
          <div className="rounded-xl bg-white border border-[#e2e8f0] p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9.5px] font-bold tracking-[0.16em] uppercase text-[#e31b23] bg-red-50 px-2 py-0.5 rounded-md border border-red-200">
                  Next Phase Roadmap
                </span>
                <h3 className="text-[16px] font-bold text-[#162544] mt-1.5">
                  Acceleron Single Sign-On (SSO) Integration
                </h3>
                <p className="text-[12.5px] text-slate-500 mt-1 max-w-xl">
                  Currently running in Zero-Login Client mode. All favourites and recently accessed tools persist directly in each browser via <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono">localStorage</code>. Later, SSO will bind each team member's corporate identity.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="text-right">
                <button
                  onClick={toggleSsoMode}
                  className={`px-3 py-1.5 rounded-lg text-[11.5px] font-semibold border transition-all ${
                    ssoEnabled
                      ? 'bg-[#162544] text-white border-[#162544]'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {ssoEnabled ? 'SSO Mode: Preview Active' : 'SSO Mode: Guest Local'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1.5 font-bold text-[12.5px] text-[#162544]">
                  <Key className="w-3.5 h-3.5 text-blue-600" />
                  <span>SAML 2.0 / OIDC</span>
                </div>
                <p className="text-[11.5px] text-slate-500 mt-1">
                  Ready to connect with Microsoft Entra ID (Azure AD), Okta, or Google Workspace.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1.5 font-bold text-[12.5px] text-[#162544]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#e31b23]" />
                  <span>Role-Based Access</span>
                </div>
                <p className="text-[11.5px] text-slate-500 mt-1">
                  App visibility mapped to company departments (Engineering, Sales, HR, Finance).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-1.5 font-bold text-[12.5px] text-[#162544]">
                  <Database className="w-3.5 h-3.5 text-purple-600" />
                  <span>Cloud Sync</span>
                </div>
                <p className="text-[11.5px] text-slate-500 mt-1">
                  Seamlessly migrates local favourites and recents to the authenticated account.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HARDCODED URLS (READ-ONLY REFERENCE) */}
      {activeTab === 'links' && (
        <div className="space-y-3">
          <div className="rounded-xl bg-[#edf2f8] border border-[#d6e0ef] p-3.5 flex items-start gap-2.5">
            <Code2 className="w-4 h-4 text-[#162544] shrink-0 mt-0.5" />
            <div className="text-[12px] text-slate-700">
              <span className="font-semibold text-[#162544]">Code-Configured URLs: </span>
              In accordance with your requirements, application URLs are locked from frontend editing and configured directly in source code (<code className="bg-white px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-800">src/data/appsData.ts</code>). You can give us the destination URLs at any time to hardcode them.
            </div>
          </div>

          <div className="space-y-2">
            {apps.map((app) => (
              <div 
                key={app.id}
                className="rounded-xl bg-white border border-[#e2e8f0] p-3 flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <AppIcon type={app.iconType} />
                  <div>
                    <h3 className="text-[13.5px] font-bold text-slate-900 leading-tight">{app.name}</h3>
                    <p className="text-[11px] font-mono text-slate-500 truncate max-w-sm sm:max-w-md">{app.url}</p>
                  </div>
                </div>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-slate-500 hover:text-[#162544] rounded-lg hover:bg-slate-100 text-[11.5px] flex items-center gap-1 font-medium"
                >
                  <span>Test Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: USER PROFILE */}
      {activeTab === 'profile' && (
        <div className="rounded-xl bg-white border border-[#e2e8f0] p-5 max-w-md">
          <h3 className="text-[15px] font-bold text-[#162544] mb-0.5">Local Profile Display</h3>
          <p className="text-[12px] text-slate-500 mb-4">
            Customize the name displayed on the dashboard greeting.
          </p>

          <form onSubmit={handleSaveProfile} className="space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Arindam"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[12.5px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#162544]/20 focus:border-[#162544]"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Corporate Email
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="e.g. user@acceleron.com"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[12.5px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#162544]/20 focus:border-[#162544]"
                required
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-[#162544] hover:bg-[#0f1b33] text-white font-semibold text-[12px] transition-colors flex items-center gap-1.5"
            >
              {savedSuccess === 'profile' ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              <span>{savedSuccess === 'profile' ? 'Profile Updated' : 'Update Profile'}</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 4: LOCAL STORAGE STATUS */}
      {activeTab === 'storage' && (
        <div className="rounded-xl bg-white border border-[#e2e8f0] p-5 space-y-3">
          <h3 className="text-[15px] font-bold text-[#162544]">Current Browser Storage State</h3>
          <p className="text-[12px] text-slate-500">
            Your browser stores your workspace preferences locally with zero external telemetry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200">
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Favourites</span>
              <p className="text-xl font-bold text-slate-800 mt-0.5">{favourites.length} starred</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200">
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Recently Opened</span>
              <p className="text-xl font-bold text-slate-800 mt-0.5">{recentApps.length} tracked</p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={clearRecentApps}
              className="px-3.5 py-1.5 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 font-semibold text-[11.5px] transition-colors"
            >
              Clear Recent Activity
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
