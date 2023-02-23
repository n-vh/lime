import { Dispatch, SetStateAction } from 'react';
import { Button } from '../Button';

interface Props {
  setTerms: Dispatch<SetStateAction<boolean>>;
  setStep: Dispatch<SetStateAction<number>>;
}

export function StepThree({ setTerms, setStep }: Props) {
  const onClick = () => {
    setTerms(true);
    setStep(4);
  };

  return (
    <div className="relative items-center rounded-2xl border-2 border-[#52525B] bg-[#3F3F46]">
      <div className="place-items-center px-6 py-6 lg:px-8">
        <h1 className="mb-4 text-center text-xl font-medium text-white">
          General terms of subscription
        </h1>
        <div className="w-2/5 shrink"></div>
        <div className="max-h-32 overflow-y-auto text-sm text-white">
          <ol>
            <li className="pt-2">
              1. Subscription: The subscriber agrees to pay the monthly or annual fee for
              access to the Lime+ streaming replay service.
            </li>
            <li className="pt-2">
              2. Duration: The subscription will remain in effect until it is cancelled by
              the subscriber or by Lime+.
            </li>
            <li className="pt-2">
              3. Renewal: The subscription will automatically renew at the end of the
              current subscription period unless the subscriber cancels prior to the
              renewal date.
            </li>
            <li className="pt-2">
              4. Payment: The subscriber agrees to provide a valid payment method and
              authorizes Lime+ to charge the subscriber's account for the subscription
              fee.
            </li>
            <li className="pt-2">
              5. Content Availability: Lime+ reserves the right to change the content
              available through the service at any time, without notice to the subscriber.
            </li>
            <li className="pt-2">
              6. Limitations: The subscriber acknowledges that the service may be subject
              to limitations, including limitations on the number of concurrent streams
              and limitations on available content.
            </li>
            <li className="pt-2">
              7. Technical Requirements: The subscriber is responsible for having the
              necessary equipment and internet connectivity to access and use the service.
            </li>
            <li className="pt-2">
              8. Account Security: The subscriber is responsible for maintaining the
              security of their account and password and for restricting access to their
              account.
            </li>
            <li className="pt-2">
              9. Termination: Either party may terminate the subscription at any time, for
              any reason, by providing written notice to the other party.
            </li>
            <li className="pt-2">
              10. Refunds: Lime+ does not provide refunds for any subscription fees,
              except as required by law.
            </li>
            <li className="pt-2">
              11. Changes to Terms: Lime+ reserves the right to change these terms at any
              time, and the subscriber agrees to be bound by any such changes.
            </li>
          </ol>
        </div>
        <Button className="mb-5" onClick={onClick}>
          Accept and Continue
        </Button>
      </div>
    </div>
  );
}
