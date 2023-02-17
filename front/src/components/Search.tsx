import React, { useState } from 'react';

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        id="search-button"
        className=" ml-auto inline-flex items-center rounded-l-full bg-gray-300 px-1"
        type="button"
        onClick={togglePopup}
      >
        <svg
          className="mr-2 ml-[6px] h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        <p className="hidden md:mr-8 md:inline lg:mr-24 xl:mr-32">Search</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" h-6 w-6"
        >
          <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
      {isOpen && (
        <div className="z-100 absolute top-36 left-8 right-8 h-16 rounded-lg border-2 border-[#e3ff7d] backdrop-blur-md lg:left-72 lg:right-72">
          <input
            className=" h-full w-full rounded-lg

            text-center"
            type="text"
            placeholder="Search"
          />
        </div>
      )}
    </>
  );
}
