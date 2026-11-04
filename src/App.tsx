import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ApplicationsSection } from './components/ApplicationsSection';
import { BottomBanner } from './components/BottomBanner';
import { Footer } from './components/Footer';
import { RecentlyOpenedView } from './components/RecentlyOpenedView';
import { SettingsView } from './components/SettingsView';
import { HelpModal } from './components/HelpModal';

const MainLayout: React.FC = () => {
  const { activeTab } = useApp();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const handleScrollToApps = () => {
    const el = document.getElementById('applications-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] flex text-slate-800">
      {/* Sidebar */}
      <Sidebar 
        mobileOpen={mobileSidebarOpen} 
        setMobileOpen={setMobileSidebarOpen}
        onOpenHelp={() => setHelpModalOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header 
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)} 
          onOpenHelp={() => setHelpModalOpen(true)}
        />

        {/* Dynamic Body Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-5 max-w-6xl w-full mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <HeroBanner onScrollToApps={handleScrollToApps} />
              <ApplicationsSection />
              <BottomBanner />
              <Footer />
            </div>
          )}

          {activeTab === 'all' && (
            <div className="space-y-4">
              <ApplicationsSection />
              <Footer />
            </div>
          )}

          {activeTab === 'favourites' && (
            <div className="space-y-4">
              <ApplicationsSection />
              <Footer />
            </div>
          )}

          {activeTab === 'recent' && (
            <div className="space-y-4">
              <RecentlyOpenedView />
              <Footer />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-4">
              <SettingsView />
              <Footer />
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      <HelpModal 
        isOpen={helpModalOpen} 
        onClose={() => setHelpModalOpen(false)} 
      />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
