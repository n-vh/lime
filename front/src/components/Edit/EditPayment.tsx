import { useState } from 'react';

export function EditPayment() {
  const [showLink1, setShowLink] = useState(false);

  function ProfilePicAction() {
    setShowLink(!showLink1);
  }
  return (
    <div className="justify-content-center h-[190px] rounded-2xl border-2 border-[#e3ff7d] bg-[#3F3F46]">
      <div className="align-center flex flex-col items-center rounded-2xl">
        {showLink1 ? (
          <input className="mt-[45px] flex h-10 items-center rounded-full px-2" />
        ) : (
          <h1 className="mt-12 flex items-center text-4xl text-white">Payment method</h1>
        )}
        <div className="flex w-full translate-y-[5rem] justify-evenly ">
          {showLink1 ? (
            <>
              <button
                onClick={ProfilePicAction}
                className="inline-flex items-center rounded-full border border-[#3E76E7] bg-[#3F3F46] px-3 py-2 text-center text-[#3E76E7]"
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
              className="inline-flex items-center rounded-full bg-[#e3ff7d] px-3 py-2 text-center "
            >
              Change Payment method
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
