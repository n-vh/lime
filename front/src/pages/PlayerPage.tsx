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
      <div className="h-screen bg-[#27272A]">
        <Navbar />
        <div className="md:my-8 md:px-12 xl:px-80">
          <Player />
        </div>
        <div>
          <h1
            className="block flex-1 text-center text-lg text-white sm:hidden"
            id="title small screen"
          >
            Video Title
          </h1>
        </div>
        <div className="flex items-center pl-1 sm:h-16 md:mx-12 md:h-24">
          <img
            className="h-12 w-12 rounded-full"
            src="/images/placeholder.png"
            alt="user photo"
          />
          <div className=" px-4">
            <p className="my-1 text-white">Streamer</p>
            <p className="my-1 text-white">number of sub</p>
          </div>
          <h1
            className="invisible flex-1 text-center  text-lg text-white sm:visible sm:block"
            id="title big screen"
          >
            Video Title
          </h1>
          <div className="justify-end lg:flex">
            <button className=" flex h-12 w-20 items-center justify-center rounded-2xl border border-white bg-[#27272A]">
              <img src="./images/like.svg" alt="" className="" />
            </button>
            <button className=" flex h-12 w-20 items-center justify-center rounded-2xl border border-white bg-[#27272A]">
              <img src="./images/like.svg" alt="" className="" />
            </button>
          </div>
        </div>
        <div
          className="relative mt-8 flex h-8 items-center rounded-2xl bg-gray-400 pl-4 md:mx-12"
          onClick={handleDropdownClick}
        >
          <p className="text-xs text-white">nombre de vues </p>
          <p className="text-xs text-white">date de la diffusion </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="mr-2 ml-auto h-4 w-4 cursor-pointer"
          >
            <path d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
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
