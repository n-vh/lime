import react from 'react';
import { ButtonTypes } from './ButtonTypes';

type User = {
  name: string;
};

type Props =
  | { authenticated: false; profile: null }
  | { authenticated: true; profile: User };

function Header(props: Props) {
  return (
    <header className=" relative bg-zinc-800">
      <div className="flex p-4">
        <p className="pl-8 text-2xl text-[#E3FF7D]">Lime+</p>
        {props.authenticated ? (
          props.profile.name
        ) : (
          <a
            className="absolute top-3 right-0 mr-9 flex rounded-xl border-2 border-zinc-600 bg-zinc-700 py-1.5 px-4 text-center text-[#E3FF7D]"
            href="/signin"
          >
            Sign in
          </a>
        )}
      </div>
    </header>
  );
}
export default Header;
