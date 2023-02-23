import { Dispatch, SetStateAction } from 'react';
import { ButtonTypes } from '../ButtonTypes';

interface Props {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
}

export function StepFour({ password, setPassword, setStep }: Props) {
  return (
    <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
      <div className="place-items-center px-6 py-6 lg:px-8">
        <h1 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
          Create a password
        </h1>
        <div className="w-2/5 shrink"></div>
        <p className="mb-2 text-center text-sm text-white">
          This e-mail address and password will allow you to log into your Lime+ account
          to enjoy your favorite replays
        </p>
        <div className="w-2/5 shrink"></div>
        <div className="md:mx-8">
          <div>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-8 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="py-3 px-1 text-sm text-white">
            Use a minimum of 6 characters, including a number or special character.
          </div>
          <ButtonTypes className="mb-3" onClick={() => setStep(5)}>
            Continue
          </ButtonTypes>
        </div>
      </div>
    </div>
  );
}
