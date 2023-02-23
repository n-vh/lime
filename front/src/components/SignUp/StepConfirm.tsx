import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { useFetch } from '~/hooks/useFetch';

export function StepConfirm() {
  const [token, setToken] = useState<string | null>(null);
  const { data, refetch } = useFetch('http://localhost:6543/signup/verify', {
    method: 'POST',
    body: JSON.stringify({
      token,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    setToken(window.localStorage.getItem('token'));

    if (token) {
      refetch();
    }
  }, [token]);

  const onVerifySignup = () => {
    window.location.href = '/home';
  };

  const onSignUp = () => {
    window.location.href = '/signin';
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative flex max-w-screen-sm rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
          <div className="place-items-center px-6 py-6 lg:px-8">
            <div className="w-1/5 shrink"></div>
            {token ? (
              <>
                <h1 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
                  Account created
                </h1>
                <p className="text-center text-sm text-white">
                  Your account has been{' '}
                  <span className="text-[#E3FF7D]">successfully created!</span>
                </p>
                <Button className="mb-3" onClick={onVerifySignup}>
                  Continue
                </Button>
              </>
            ) : (
              <>
                <h1 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
                  Check your e-mail address
                </h1>
                <p className="text-center text-sm text-white">
                  <span className="text-[#E3FF7D]">
                    Please check your e-mail to subscribe
                  </span>
                </p>
                <Button className="mb-3" onClick={onSignUp}>
                  Continue
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
