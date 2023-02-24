import { Dispatch, SetStateAction } from 'react';
import { Button } from '../Button';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
}

export function StepOne({ email, setEmail, setStep }: Props) {
  const onClick = () => {
    setStep(2);
  };

  return (
    <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
      <div className="place-items-center px-6 py-6 lg:px-8">
        <h1 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
          Enter your e-mail address
        </h1>
        <div className="flex">
          <div className="w-2/5 shrink"></div>
          <p className="px-auto mb-4 text-center text-sm text-white">
            This e-mail address and password will allow you to log into your Lime+ account
            to enjoy your favorite replays
          </p>
          <div className="w-2/5 shrink"></div>
        </div>
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
          <Button onClick={onClick} disabled={!email}>
            Continue
          </Button>
          <div className="mt-12 text-center text-sm font-medium text-gray-500 dark:text-gray-300">
            New on Lime+?{' '}
            <a href="/signup" className=" text-[#e3ff7d] underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
