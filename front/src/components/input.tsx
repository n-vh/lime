import React from 'react';

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};
function Input({ onChange, name, placeholder, value = '' }: Props) {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
      className="rounded-full border-2 border-[#E3FF7D] bg-zinc-600 p-2 text-white opacity-60 focus:outline-none"
    />
  );
}

export default Input;
