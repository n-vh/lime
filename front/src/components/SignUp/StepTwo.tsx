import { Dispatch, SetStateAction } from 'react';
import { ButtonTypes } from '../ButtonTypes';

interface Props {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
}

export function StepTwo({ username, setUsername, setStep }: Props) {
  return (
    <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
      <div className="place-items-center px-6 py-6 lg:px-8">
        <h1 className="mb-4 text-center text-xl font-medium text-white">
          Choose your username
        </h1>
        <div className="w-2/5 shrink"></div>
        <p className="mb-2 text-center text-sm text-white">
          Access your Lime+ account with your username
        </p>
        <div className="md:mx-8">
          <div>
            <input
              type="Username"
              name="username"
              id="Username"
              className="mt-8 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <ButtonTypes className="mb-3" onClick={() => setStep(3)}>
            Continue
          </ButtonTypes>
        </div>
      </div>
    </div>
  );
}
