import react from 'react';

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
      className={`text-md mt-4 w-full rounded-2xl bg-[#e3ff7d] px-5 py-2.5 font-bold text-black dark:bg-[#e3ff7d] ${
        processing ? 'opacity-25' : ''
      } ${className}`}
      disabled={processing}
    >
      {children}
    </button>
  );
}
