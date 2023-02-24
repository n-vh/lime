import { Dispatch, SetStateAction, useEffect } from 'react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export function StepSwitch({
  email,
  setEmail,
  password,
  setPassword,
  step,
  setStep,
}: Props) {
  switch (step) {
    case 1:
      return <StepOne email={email} setEmail={setEmail} setStep={setStep} />;
    case 2:
      return (
        <StepTwo
          email={email}
          password={password}
          setPassword={setPassword}
          setStep={setStep}
        />
      );
    case 3:
      console.log(3);
      break;
    default:
      return <StepOne email={email} setEmail={setEmail} setStep={setStep} />;
  }
}
