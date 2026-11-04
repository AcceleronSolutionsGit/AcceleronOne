import React from 'react';
import { X, HelpCircle, Keyboard, Star, Link2, Shield, Mail } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white border border-[#e8ece9] shadow-2xl p-6 sm:p-7 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eaf2ec] text-[#2e6848] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">MyAcceleron Help & Guides</h3>
              <p className="text-[12.5px] text-slate-400">Everything you need to know about your workspace</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Guides Grid */}
        <div className="space-y-3.5 text-[13px]">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
            <Keyboard className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Quick Search Shortcut</p>
              <p className="text-slate-500 text-[12px] mt-0.5">
                Press the <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-mono shadow-2xs">/</kbd> key anywhere on the dashboard to immediately focus the search bar.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
            <Star className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Star Your Favourites</p>
              <p className="text-slate-500 text-[12px] mt-0.5">
                Click the star icon in the top right of any app card to pin it to your Favourites tab for 1-click access.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
            <Link2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Configurable Links</p>
              <p className="text-slate-500 text-[12px] mt-0.5">
                Need to link to a custom company subdomain or intranet tool? Head to <strong>Workspace settings</strong> to plug in your custom URLs anytime.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">No Login Required (SSO Coming)</p>
              <p className="text-slate-500 text-[12px] mt-0.5">
                Your favourites and recently opened applications are saved locally to your browser storage. Later, this portal will seamlessly switch to corporate Single Sign-On (SSO).
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[12px]">
          <span className="text-slate-500 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-slate-400" />
            IT Support: <a href="mailto:support@acceleron.com" className="text-[#2e6848] font-medium hover:underline">support@acceleron.com</a>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
