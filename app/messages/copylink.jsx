"use client"
import { useState } from 'react';
import { Check, ContentCopy } from '@mui/icons-material';


export default function CopyLink({ shareLink }) {
    const [copied, setCopied] = useState(false);
    
      const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(shareLink);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      };
    return(
        <div className="flex items-center gap-3">
              <span className="hidden sm:block text-xs text-gray-500 font-medium">
                {shareLink.replace('https://', '')}
              </span>
              {/* Note: This button is static. For 'Click to Copy', move this button to a client component */}
              <button
               className="bg-[#1a1a1a] hover:bg-[#121212] text-white border border-white/10 hover:border-[#8f48ec]/50 text-sm font-medium py-2.5 px-5 rounded-xl shadow-lg transition-all flex items-center gap-2 group cursor-copy" 
               onClick={handleCopy}>
                <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-[#8f48ec] transition-colors">
                  {copied ? <Check/> : <ContentCopy/>}
                </span>
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
    );
}