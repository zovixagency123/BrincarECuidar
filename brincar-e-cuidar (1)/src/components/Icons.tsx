import React from 'react';

export const Cloud = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 17.5C4.01472 17.5 2 15.4853 2 13C2 10.5147 4.01472 8.5 6.5 8.5C6.82914 8.5 7.14999 8.5353 7.45873 8.60197C8.28186 5.9255 10.7836 4 13.75 4C17.7541 4 21 7.24594 21 11.25C21 11.4884 20.9885 11.7241 20.966 11.9567C21.5831 12.5539 22 13.4005 22 14.3333C22 16.0822 20.5822 17.5 18.8333 17.5H6.5Z" />
  </svg>
);

export const Rainbow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 17a10 10 0 0 0-20 0" stroke="#FFB6C1" strokeWidth="3" />
    <path d="M18 17a6 6 0 0 0-12 0" stroke="#FFDAB9" strokeWidth="3" />
    <path d="M14 17a2 2 0 0 0-4 0" stroke="#FDFD96" strokeWidth="3" />
  </svg>
);

export const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export const Sun = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Blocks = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
    <rect x="9" y="6" width="6" height="6" rx="1" />
    <path d="M6 16h2M16 16h2M11 8h2" />
  </svg>
);

export const Bear = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="13" r="7" />
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <circle cx="12" cy="15" r="2" />
    <circle cx="10" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="14" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);
