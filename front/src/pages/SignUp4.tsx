import { Footer } from '~/components/Footer';
import { Header } from '~/components/SignInHeader';
import { ButtonTypes } from '~/components/ButtonTypes';

export function SignUp4() {
  return (
    <>
      <Header authenticated={false} profile={null} />
      <div className="mb-9 flex">
        <div className="w-3/5 shrink md:w-2/5"></div>
        <div className=" border-border mt-10">
          <p className="p-1 text-sm text-white">Step 4 of 5</p>
        </div>
        <div className="w-3/5 shrink md:w-2/5"></div>
      </div>
    </>
  );
}
