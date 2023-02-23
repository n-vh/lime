import { Dispatch, SetStateAction } from 'react';
import { Button } from '../Button';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
}

export function StepOne({ email, setEmail, setStep }: Props) {
  return (
    <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
      <div className="place-items-center px-6 py-6 lg:px-8">
        <h1 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
          Enter your e-mail address
        </h1>
        <div className="w-1/5 shrink"></div>
        <p className="text-center text-sm text-white">
          This email address and password will allow you to log into your lime account and
          enjoy your favorite streams
        </p>
        <div className="w-2/5 shrink"></div>
        <div className="md:mx-8">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-8 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="E-mail Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-2">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="accent-[#e3ff7d]"
            />
            <label htmlFor="link-checkbox" className="px-2 text-sm text-white">
              Yes, I would like to receive special offers and updates about Lime+ by
              e-mail.
            </label>
          </div>
          <hr className="my-4 h-px border-0 bg-[#e3ff7d]"></hr>
          <div className="my-4 text-sm text-white">
            Lime+ will use your data to personalize and enhance your experience on Lime+
            and to send you information related to this service. You may change your
            communication preferences at any time. By clicking "Continue" you are
            confirming that you have read our Privacy Policy, our Cookie Policy.
          </div>

          <Button className="mb-3" onClick={() => setStep(2)}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
