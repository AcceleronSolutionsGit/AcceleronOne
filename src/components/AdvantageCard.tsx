import React from 'react';
import { Mail, HelpCircle } from 'lucide-react';

export const AdvantageCard: React.FC = () => {
  return (
    <div className="relative rounded-xl bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-slate-200/90 border-dashed p-4 sm:p-5 flex flex-col justify-between shadow-2xs">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#162544]" />
            <span>Need More Tools?</span>
          </span>
          <span className="text-[10px] font-medium text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
            IT Helpdesk
          </span>
        </div>

        {/* Heading */}
        <div className="mt-3">
          <h3 className="text-[15.5px] font-bold text-[#162544] tracking-tight leading-snug">
            Can't find your tool? <br />
            Request software access.
          </h3>
        </div>

        {/* Body Text */}
        <p className="text-[12px] text-slate-500 font-normal leading-relaxed mt-2">
          Reach out to the Acceleron IT & Operations team to provision credentials or connect a new corporate service.
        </p>
      </div>

      {/* Action */}
      <div className="mt-4 pt-3 border-t border-slate-200/70">
        <a
          href="mailto:support@acceleronsolutions.io?subject=Acceleron%20Tool%20Access%20Request"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#162544] hover:bg-[#0f1b33] text-white font-semibold text-[11.5px] transition-colors shadow-2xs"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Contact IT Support</span>
        </a>
      </div>
    </div>
  );
};
