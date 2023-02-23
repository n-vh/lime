import { useContext, useState } from 'react';
import { Header } from '~/components/SignInHeader';
import { StepSwitch } from '~/components/SignUp/StepSwitch';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [terms, setTerms] = useState(false);
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState(true);
  // const [email, setEmail] = useState('nils.vanhee@protonmail.com');
  // const [username, setUsername] = useState('hello');
  // const [terms, setTerms] = useState(true);
  // const [password, setPassword] = useState('password');
  // const [payment, setPayment] = useState(true);
  // const [step, setStep] = useState(5);

  return (
    <>
      <Header authenticated={false} profile={null} />
      <div className="mb-9 flex">
        <div className="w-3/5 shrink md:w-2/5"></div>
        <div className=" border-border mt-10">
          <p className="p-1 text-sm text-white">Step {step} of 5</p>
          <StepSwitch
            email={email}
            setEmail={setEmail}
            username={username}
            setUsername={setUsername}
            terms={terms}
            setTerms={setTerms}
            password={password}
            setPassword={setPassword}
            payment={payment}
            setPayment={setPayment}
            step={step}
            setStep={setStep}
          />
        </div>
        <div className=" w-3/5 shrink md:w-2/5"></div>
      </div>
    </>
  );
}
