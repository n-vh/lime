import { Dispatch, SetStateAction, useEffect } from 'react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepFive } from './StepFive';

interface Props {
  email: string;
  username: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setUsername: Dispatch<SetStateAction<string>>;
  terms: boolean;
  setTerms: Dispatch<SetStateAction<boolean>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  payment: boolean;
  setPayment: Dispatch<SetStateAction<boolean>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export function StepSwitch({
  email,
  setEmail,
  username,
  setUsername,
  terms,
  setTerms,
  password,
  setPassword,
  payment,
  setPayment,
  step,
  setStep,
}: Props) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      setStep(6);
      window.localStorage.setItem('token', token);
    }
  });

  switch (step) {
    case 1:
      return <StepOne email={email} setEmail={setEmail} setStep={setStep} />;
    case 2:
      return <StepTwo username={username} setUsername={setUsername} setStep={setStep} />;
    // case 3:
    //   return <StepThree />;
    // case 4:
    //   return <StepFour />;
    case 5:
      return (
        <StepFive
          email={email}
          username={username}
          terms={terms}
          password={password}
          payment={payment}
          setPayment={setPayment}
        />
      );
    default:
      return <StepOne email={email} setEmail={setEmail} setStep={setStep} />;
  }
}
