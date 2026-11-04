import React from 'react';
import { X, HelpCircle, Keyboard, Star, Shield, Mail, Code2 } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-2xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md rounded-2xl bg-white border border-[#e2e8f0] shadow-2xl p-5 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#162544] text-white flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#162544] leading-tight">Acceleron One Help</h3>
              <p className="text-[11.5px] text-slate-400">Everything you need to know about your workspace</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Guides Grid */}
        <div className="space-y-2.5 text-[12.5px]">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <Keyboard className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Quick Search Shortcut</p>
              <p className="text-slate-500 text-[11.5px] mt-0.5">
                Press the <kbd className="px-1.5 py-0.2 bg-white border border-slate-200 rounded text-[10.5px] font-mono shadow-2xs">/</kbd> key anywhere to immediately focus the search bar.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Star Your Favourites</p>
              <p className="text-slate-500 text-[11.5px] mt-0.5">
                Click the star icon on any card to pin it to your Favourites tab for 1-click access.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <Code2 className="w-4 h-4 text-[#162544] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Hardcoded Application URLs</p>
              <p className="text-slate-500 text-[11.5px] mt-0.5">
                Application links are securely maintained in code and updated as production URLs are provisioned.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-[#e31b23] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">No Login Required (SSO Coming)</p>
              <p className="text-slate-500 text-[11.5px] mt-0.5">
                Your favourites and recents are saved locally in your browser storage. Later, this portal will seamlessly switch to corporate Single Sign-On (SSO).
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11.5px]">
          <span className="text-slate-500 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            Support: <a href="mailto:support@acceleron.com" className="text-[#162544] font-medium hover:underline">support@acceleron.com</a>
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-[#162544] text-white font-medium hover:bg-[#0f1b33] transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
