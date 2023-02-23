import { Footer } from '~/components/Footer';
import { Header } from '~/components/SignInHeader';
import { ButtonTypes } from '~/components/ButtonTypes';

export function SignUp1() {
  return (
    <>
      <Header authenticated={false} profile={null} />
      <div className="mb-9 block max-w-sm ">
        <div className="w-3/5 shrink md:w-2/5"></div>
        <div className=" border-border mt-10">
          <p className="p-1 text-sm text-white">Step 1 of 5</p>
        </div>
        {/* <div className=" w-3/5 shrink md:w-2/5"></div> */}
      </div>
    </>
  );
}
