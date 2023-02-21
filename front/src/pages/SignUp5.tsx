import { Footer } from '~/components/Footer';
import { Header } from '~/components/SignInHeader';
import { ButtonTypes } from '~/components/ButtonTypes';

export function SignUp5() {
  return (
    <>
      <Header authenticated={false} profile={null} />
      <div className="mb-9 flex">
        <div className="w-3/5 shrink md:w-2/5"></div>
        <div className=" border-border mt-10">
          <p className="p-1 text-sm text-white">Step 5 of 5</p>
          <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
            <div className="place-items-center px-6 py-6 lg:px-8">
              <h1 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
                Subscribe and start enjoying the service today!
              </h1>
              <div className="flex">
                <div className="w-2/5 shrink"></div>
                <p className="text-center text-sm text-white">
                  Streaming entertainment for only €9.99 per month.
                </p>
                <div className="w-2/5 shrink"></div>
              </div>
              <p className="mx-2 mt-4 text-sm text-white">Name Of the card Holder</p>
              <form action="#">
                <div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder=""
                    required
                  />
                </div>
                <p className="mx-2 mt-6 text-sm text-white">Card number</p>
                <form action="#">
                  <div>
                    <div className="relative">
                      <img
                        src="/images/mastercard.svg"
                        className="absolute right-3 top-2.5 h-5 w-5"
                        alt="mastercard"
                      />
                      <img
                        src="/images/visa.svg"
                        className="absolute right-9 top-2.5 h-5 w-5"
                        alt="mastercard"
                      />
                      <img
                        src="/images/Ae.svg"
                        className="absolute right-16 top-2.5 h-5 w-5"
                        alt="mastercard"
                      />
                      <input
                        type="name"
                        name="name"
                        id="name"
                        className="mt-1 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <p className="mx-2 mt-6 text-sm text-white">Expiry date</p>
                  <form action="#">
                    <div>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        className="mt-1 block w-full rounded-2xl border border-gray-500 bg-gray-600 p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                        placeholder=""
                        required
                      />
                    </div>
                    <p className="mx-2 mt-6 text-sm text-white">Security code</p>
                    <form action="#">
                      <div>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          className="mt-1 block w-full rounded-2xl border border-gray-500 bg-gray-600 p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="my-4 mx-1 text-sm text-white">
                        By clicking on "Accept and subscribe", you agree that your
                        subscription starts immediately and you will not be able to
                        withdraw from the contract or obtain a refund from the first use
                        of the service. The standard annual or monthly fee will be billed
                        to you on a recurring basis depending on the payment method you
                        choose. Cancellation is possible at any time and takes effect at
                        the end of the billing period. Months or years already started
                        cannot be refunded or credited.
                      </div>
                      <ButtonTypes>Accept and Subscribe</ButtonTypes>
                    </form>
                  </form>
                </form>
              </form>
            </div>
          </div>
        </div>
        <div className="w-3/5 shrink md:w-2/5"></div>
      </div>
    </>
  );
}
