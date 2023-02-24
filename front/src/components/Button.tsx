interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  type = 'submit',
  className = '',
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`text-md mt-4 w-full rounded-2xl bg-[#e3ff7d] px-5 py-2.5 font-bold text-black dark:bg-[#e3ff7d] ${
        disabled ? 'opacity-25' : ''
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
