import { Footer } from '~/components/Footer';
import { Header } from '~/components/SignInHeader';
import { ButtonTypes } from '~/components/ButtonTypes';

export function SignUp2() {
  return (
    <>
      <Header authenticated={false} profile={null} />
      <div className="block w-20">
        <div className="w-2/5 shrink md:w-2/5"></div>
        <div className=" border-border mt-10">
          <p className="p-1 text-sm text-white">Step 2 of 5</p>
        </div>
        <div className="w-2/5 shrink md:w-2/5"></div>
      </div>
    </>
  );
}
