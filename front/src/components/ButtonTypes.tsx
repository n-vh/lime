import react from 'react';

import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  processing?: boolean;
  children: React.ReactNode;
}

export function ButtonTypes({
  type = 'submit',
  className = '',
  processing = false,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out active:bg-gray-900 ${
        processing ? 'opacity-25' : ''
      } ${className}`}
      disabled={processing}
    >
      {children}
    </button>
  );
}
