import { Dispatch, SetStateAction, useEffect } from 'react';
import { Button } from '../Button';
import { useFetch } from '~/hooks/useFetch';

interface Props {
  email: string;
  username: string;
  terms: boolean;
  password: string;
  payment: boolean;
  setStep: Dispatch<SetStateAction<number>>;
  setPayment: Dispatch<SetStateAction<boolean>>;
}

export function StepFive({
  email,
  username,
  terms,
  password,
  payment,
  setStep,
  setPayment,
}: Props) {
  const { data, refetch } = useFetch('http://localhost:6543/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const onSubscribe = () => {
    // todo payment system
    setPayment(true);
    setStep(6);
    console.log(email, username, terms, password, payment);

    if (email && username && terms && password && payment) {
      refetch();
    }
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
      <div className="place-items-center px-6 py-6 lg:px-8">
        <h1 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
          Subscribe and start enjoying the service today!
        </h1>
        <div className="flex">
          <div className="w-2/5 shrink"></div>
          <p className="text-center text-sm text-white">
            Streaming entertainment for only €9.99 per month.
          </p>
          <div className="w-2/5 shrink"></div>
        </div>
        <p className="mx-2 mt-4 text-sm text-white">Card Holder</p>
        <div>
          <input
            type="name"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder=""
            required
          />
        </div>
        <p className="mx-2 mt-6 text-sm text-white">Card Number</p>
        <div>
          <div className="relative">
            <img
              src="/images/mastercard.svg"
              className="absolute right-3 top-2.5 h-5 w-5"
              alt="mastercard"
            />
            <img
              src="/images/visa.svg"
              className="absolute right-9 top-2.5 h-5 w-5"
              alt="mastercard"
            />
            <img
              src="/images/Ae.svg"
              className="absolute right-16 top-2.5 h-5 w-5"
              alt="mastercard"
            />
            <input
              type="name"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder=""
              required
            />
          </div>
        </div>
        <p className="mx-2 mt-6 text-sm text-white">Expiry Date</p>
        <div>
          <input
            type="name"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-2xl border border-gray-500 bg-gray-600 p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
            placeholder=""
            required
          />
        </div>
        <p className="mx-2 mt-6 text-sm text-white">Security Code</p>
        <div>
          <input
            type="name"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-2xl border border-gray-500 bg-gray-600 p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
            placeholder=""
            required
          />
        </div>
        <div className="my-4 mx-1 text-sm text-white">
          By clicking on "Accept and subscribe", you agree that your subscription starts
          immediately and you will not be able to withdraw from the contract or obtain a
          refund from the first use of the service. The standard annual or monthly fee
          will be billed to you on a recurring basis depending on the payment method you
          choose. Cancellation is possible at any time and takes effect at the end of the
          billing period. Months or years already started cannot be refunded or credited.
        </div>
        <Button onClick={onSubscribe}>Accept and Subscribe</Button>
      </div>
    </div>
  );
}
