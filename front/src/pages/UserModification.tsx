import { ChangeEmailComp } from '~/components/ChangeEmailComp';
import { ChangePasswordComp } from '~/components/ChangePasswordComp';
import { ChangePaymentComp } from '~/components/ChangePaymentComp';
import { ChangePpComp } from '~/components/ChangePpComp';
import { ChangeUsernameComp } from '~/components/ChangeUsernameComp';

export function UserModification() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 pl-8 pr-8 pt-8 lg:grid-cols-2">
        <ChangePpComp />
        <ChangeUsernameComp />
        <ChangeEmailComp />
        <ChangePasswordComp />
        <ChangePaymentComp />
      </div>
    </>
  );
}
