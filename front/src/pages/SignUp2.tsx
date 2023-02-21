import { Footer } from '~/components/Footer';
import { Header } from '~/components/SignInHeader';
import { ButtonTypes } from '~/components/ButtonTypes';

export function SignUp2() {
  return (
    <>
      <Header authenticated={false} profile={null} />
      <div className="flex">
        <div className="w-2/5 shrink md:w-2/5"></div>
        <div className=" border-border mt-10">
          <p className="p-1 text-sm text-white">Step 2 of 5</p>
          <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
            <div className="place-items-center px-6 py-6 lg:px-8">
              <h1 className="mb-4 text-center text-xl font-medium text-white">
                Choose your username
              </h1>
              <div className="w-2/5 shrink"></div>
              <p className="mb-2 text-center text-sm text-white">
                Access your Lime+ account with your username
              </p>
              <form className="md:mx-8" action="#">
                <div>
                  <input
                    type="Username"
                    name="username"
                    id="Username"
                    className="mt-8 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="Username"
                    required
                  />
                </div>

                <ButtonTypes className="mb-5">Continue</ButtonTypes>
              </form>
            </div>
          </div>
        </div>
        <div className="w-2/5 shrink md:w-2/5"></div>
      </div>
    </>
  );
}
