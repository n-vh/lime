import { useState } from 'react';

export function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="absolute top-16 left-12 right-12 h-8">
          <div
            className="h-full w-full rounded-lg text-center
            backdrop-contrast-50 "
            placeholder="Filter"
          >
            <button className=" lg-text-lg mx-2 rounded-full bg-[#e3ff7d] px-4 ">
              MMORP
            </button>
            <button className=" lg-text-lg mx-2 rounded-full bg-[#e3ff7d] px-4 ">
              MMORP
            </button>
            <button className=" lg-text-lg mx-2 rounded-full bg-[#e3ff7d] px-4 ">
              MMORP
            </button>
            <button className=" lg-text-lg mx-2 rounded-full bg-[#e3ff7d] px-4 ">
              MMORP
            </button>
            <button className=" lg-text-lg mx-2 rounded-full bg-[#e3ff7d] px-4 ">
              MMORP
            </button>
            <button className=" lg-text-lg mx-2 rounded-full bg-[#e3ff7d] px-4 ">
              MMORP
            </button>
          </div>
        </div>
      )}
      <button
        id="setting-button"
        data-dropdown-toggle="dropdown"
        className="ml-[1px] inline-flex items-center rounded-r-full bg-gray-300 px-1"
        type="button"
        onClick={toggleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 "
        >
          <path d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
        </svg>{' '}
        <p className="hidden md:mr-8 md:inline lg:mr-28 xl:mr-36">Filter</p>
        <svg
          className="ml-2 mr-[6px] h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </>
  );
}
