import { useEffect, useState } from 'react';
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

    console.log(token);
    if (token) {
      refetch();
    }
  }, [token]);

  return (
    <div className="justify-content-center rounded-2xl border-2 border-[#e3ff7d] bg-[#3F3F46]">
      <div className="align-center flex flex-col items-center rounded-2xl">
        {token ? (
          <div>Successfully Subscribed</div>
        ) : (
          <div>Please check your email to subscribe</div>
        )}
      </div>
    </div>
  );
}
