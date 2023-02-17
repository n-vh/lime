import { Footer } from '~/components/Footer';

export function Forgot() {
  return (
    <>
      <div className="flex">
        <div className="w-3/5 shrink md:w-2/5"></div>
        <div className=" border-border mt-24 w-[550px]">
          <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
            <div className="place-items-center px-6 py-6 lg:px-8">
              <h1 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
                Reset your password{' '}
              </h1>
              <div className="flex h-[40px]">
                <div className="w-2/5 shrink"></div>
                <div className="w-2/5 shrink"></div>
              </div>
              <form className="md:mx-8" action="#">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-8 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="E-mail address"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-bold text-md mt-4 w-full rounded-2xl bg-[#e3ff7d] px-5 py-2.5 font-medium text-black dark:bg-[#e3ff7d]"
                >
                  Continue
                </button>
                <div className="mt-12 text-center text-sm font-medium text-gray-500 underline dark:text-gray-300">
                  Check your email inbox{' '}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-3/5 shrink md:w-2/5"></div>
      </div>
      <Footer />
    </>
  );
}
