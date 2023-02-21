import { useState } from 'react';
import { UserPp } from '~/components/UserPp';
export function ChangePpComp() {
  const [showLink1, setShowLink] = useState(false);

  function ProfilePicAction() {
    setShowLink(!showLink1);
  }
  return (
    <div className="justify-content-center rounded-2xl border-2 border-[#e3ff7d] bg-[#3F3F46]">
      <div className="flex flex-col rounded-2xl  p-6 shadow">
        <div className="felx">
          {showLink1 && (
            <div className="insert-1 absolute">
              <input type="file" className="rounded-0" />
            </div>
          )}
          <UserPp />
        </div>
        <div className="flex w-full translate-y-[2.8rem] justify-evenly	">
          {showLink1 ? (
            <>
              <button
                onClick={ProfilePicAction}
                className="inline-flex items-center rounded-full border border-[#3E76E7] bg-[#3F3F46] px-3  py-2 text-center text-[#3E76E7]"
              >
                Cancel changes
              </button>
              <button
                onClick={ProfilePicAction}
                className="inline-flex items-center rounded-full bg-[#e3ff7d] px-3 py-2 text-center"
              >
                Save changes
              </button>
            </>
          ) : (
            <button
              onClick={ProfilePicAction}
              className="inline-flex items-center rounded-full bg-[#e3ff7d] px-3 py-2 text-center"
            >
              Change profile picture
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
