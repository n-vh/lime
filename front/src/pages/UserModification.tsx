import { useState } from 'react';
import { UserPp } from '~/components/UserPp';

export function UserModification() {
  const [showLink1, setShowLink] = useState(false);

  function ProfilePicAction() {
    setShowLink(!showLink1);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pl-4 pr-4 pt-4 lg:grid-cols-2">
        <div className="justify-content-center">
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="felx">
              {showLink1 && (
                <div className="insert-1 absolute">
                  <input type="file" className="rounded-0" />
                </div>
              )}
              <UserPp />
            </div>
            <div className="flex w-full justify-evenly">
              {showLink1 ? (
                <>
                  <button
                    onClick={ProfilePicAction}
                    className="inline-flex items-center rounded-full border border-[#3E76E7] px-3  py-2 text-center text-[#3E76E7]"
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
      </div>
    </>
  );
}
