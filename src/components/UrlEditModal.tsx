import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Link2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppIcon } from './AppIcons';

export const UrlEditModal: React.FC = () => {
  const { editingAppUrl, setEditingAppUrl, getAppUrl, updateAppUrl } = useApp();
  const [urlValue, setUrlValue] = useState('');

  useEffect(() => {
    if (editingAppUrl) {
      setUrlValue(getAppUrl(editingAppUrl));
    }
  }, [editingAppUrl, getAppUrl]);

  if (!editingAppUrl) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateAppUrl(editingAppUrl.id, urlValue);
    setEditingAppUrl(null);
  };

  const handleReset = () => {
    setUrlValue(editingAppUrl.defaultUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md rounded-3xl bg-white border border-[#e8ece9] shadow-2xl p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <AppIcon type={editingAppUrl.iconType} />
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Configure {editingAppUrl.name} URL
              </h3>
              <p className="text-[12px] text-slate-400">Save custom destination link</p>
            </div>
          </div>

          <button
            onClick={() => setEditingAppUrl(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Destination URL
            </label>
            <div className="relative">
              <Link2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="url"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                placeholder="https://..."
                required
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[13px] text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2e6848]/20 focus:border-[#2e6848] font-mono transition-all"
              />
            </div>
            <p className="text-[11.5px] text-slate-400 mt-1">
              Default: <code className="text-slate-600">{editingAppUrl.defaultUrl}</code>
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-[12px] text-slate-500 hover:text-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Use default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setEditingAppUrl(null)}
                className="px-3.5 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-[12.5px] font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#2e6848] hover:bg-[#25553b] text-white text-[12.5px] font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save URL</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
