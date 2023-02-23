import { useEffect, useState } from 'react';
import { StepSwitch } from '~/components/SignIn/StepSwitch';
import { useFetch } from '~/hooks/useFetch';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const { data, refetch } = useFetch('http://localhost:6543/signin', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    if (step === 3) {
      refetch();
    }
  }, [step]);

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem('token', data.token);
      window.location.href = '/home';
    }
  }, [data]);

  return (
    <>
      <div className="flex">
        <div className="w-3/5 shrink md:w-2/5"></div>
        <div className=" border-border mt-24">
          <StepSwitch
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            setStep={setStep}
            step={step}
          />
        </div>
        <div className="w-3/5 shrink md:w-2/5"></div>
      </div>
    </>
  );
}
