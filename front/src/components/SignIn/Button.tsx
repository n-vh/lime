type User = {
  name: string;
};
type Props =
  | {
      authenticated: false;
      profile: null;
    }
  | {
      authenticated: true;
      profile: User;
    };

export function Button(props: Props) {
  return (
    <div>
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
  );
}
