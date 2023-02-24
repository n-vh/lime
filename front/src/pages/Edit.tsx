import { EditEmail } from '~/components/Edit/EditEmail';
import { EditPassword } from '~/components/Edit/EditPassword';
import { EditPayment } from '~/components/Edit/EditPayment';
import { EditProfilePicture } from '~/components/Edit/EditProfilePicture';
import { EditUsername } from '~/components/Edit/EditUsername';

export function Edit() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 pl-8 pr-8 pt-8 lg:grid-cols-2">
        <EditProfilePicture />
        <EditUsername />
        <EditEmail />
        <EditPassword />
        <EditPayment />
      </div>
    </>
  );
}
