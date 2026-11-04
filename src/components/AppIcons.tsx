import React from 'react';

export const AcceleronLogoImage: React.FC<{ className?: string; height?: number }> = ({ 
  className = '', 
  height = 36 
}) => {
  return (
    <img 
      src="/acceleron-logo.png" 
      alt="Acceleron Solutions" 
      className={`h-auto object-contain select-none ${className}`}
      style={{ maxHeight: height }}
    />
  );
};

export const AcceleronMark: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-xl bg-[#162544] text-white shadow-xs flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 40 40" width={size * 0.72} height={size * 0.72} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Navy squircle base */}
        <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="3.5" fill="none" />
        {/* Double Red Chevron */}
        <path d="M20 12 L26 18 L23.5 18 L20 14.5 L16.5 18 L14 18 Z" fill="#E31B23" />
        <path d="M20 17 L25 22 L23 22 L20 19 L17 22 L15 22 Z" fill="#E31B23" />
      </svg>
    </div>
  );
};

export const AppIcon: React.FC<{ type: string; className?: string }> = ({ type, className = '' }) => {
  switch (type) {
    case 'zoho-crm':
      return (
        <div className={`w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 p-1.5 flex items-center justify-center shadow-2xs ${className}`}>
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
            <span className="bg-[#E42527] rounded-xs"></span>
            <span className="bg-[#2FA036] rounded-xs"></span>
            <span className="bg-[#007AC2] rounded-xs"></span>
            <span className="bg-[#F8B124] rounded-xs"></span>
          </div>
        </div>
      );

    case 'zoho-books':
      return (
        <div className={`w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 p-1.5 flex items-center justify-center shadow-2xs ${className}`}>
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6m-6 4h4" />
          </svg>
        </div>
      );

    case 'darwinbox':
      return (
        <div className={`w-9 h-9 rounded-xl bg-purple-50 border border-purple-200/60 p-1.5 flex items-center justify-center shadow-2xs ${className}`}>
          <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.999-3.199a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
      );

    case 'champ':
      return (
        <div className={`w-9 h-9 rounded-xl bg-red-50 border border-red-200/60 p-1.5 flex items-center justify-center shadow-2xs ${className}`}>
          <svg className="w-5 h-5 text-[#E31B23]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75c-.621 0-1.125.504-1.125 1.125v3.375m9 0H7.5M12 3v11.25m-6.75-9.75h13.5a2.25 2.25 0 012.25 2.25v2.25a6 6 0 01-6 6h-1.5a6 6 0 01-6-6V6.75A2.25 2.25 0 015.25 4.5z" />
          </svg>
        </div>
      );

    case 'plus':
      return (
        <div className={`w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 p-1.5 flex items-center justify-center shadow-2xs ${className}`}>
          <svg className="w-5 h-5 text-[#162544]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
        </div>
      );

    default:
      return (
        <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 p-1.5 flex items-center justify-center">
          <span className="text-slate-600 font-bold text-xs">App</span>
        </div>
      );
  }
};
