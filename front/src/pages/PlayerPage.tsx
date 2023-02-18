import React, { useState } from 'react';

import { Navbar } from '~/components/Navbar';
import { Player } from '~/components/Player';

export function PlayerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="bg-[#27272A]">
        <Navbar />
        <div className="md:my-8 md:px-12 xl:px-80">
          <Player />
        </div>
        <div></div>
        <div className="flex h-16 items-center pl-1 md:mx-12">
          <img
            className="h-12 w-12 rounded-full"
            src="/images/placeholder.png"
            alt="user photo"
          />
          <div className=" px-4">
            <h3 className="my-1 text-white">Streamer</h3>
            <p className="my-1 text-white">number of sub</p>
          </div>
          <h1 className="flex-1 text-center text-lg text-white">Video Title</h1>
          <button className=" flex h-12 w-20 items-center justify-center rounded-2xl border border-white bg-[#27272A]">
            <img src="./images/like.svg" alt="" className="" />
          </button>
          <button className=" flex h-12 w-20 items-center justify-center rounded-2xl border border-white bg-[#27272A]">
            <img src="./images/like.svg" alt="" className="" />
          </button>{' '}
        </div>
        <div className="relative mt-8 flex h-8 items-center rounded-2xl bg-gray-400 pl-4 md:mx-12">
          <p className="text-xs text-white">nombre de vues </p>
          <p className="text-xs text-white">date de la diffusion </p>
          <svg
            className="mr-2 ml-auto h-4 w-4 cursor-pointer"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleDropdownClick}
          >
            <path strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {isDropdownOpen && (
          <div className="relative flex h-8 items-center rounded-2xl bg-gray-400 pl-4 md:mx-12">
            <p className="text-xs text-white">Hidden text goes here</p>
          </div>
        )}
      </div>
    </>
  );
}
