import react from 'react';

interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  processing?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function ButtonTypes({
  type = 'submit',
  className = '',
  processing = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`text-md mt-4 w-full rounded-lg bg-[#e3ff7d] px-5 py-2.5 font-bold text-black dark:bg-[#e3ff7d] ${
        processing ? 'opacity-25' : ''
      } ${className}`}
      disabled={processing}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
