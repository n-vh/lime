import React, { useState } from 'react';

import { Navbar } from '~/components/Navbar';
import { Player } from '~/components/PlayerComp';

export function PlayerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="h-screen bg-[#27272A]">
        <Navbar />
        <div className="pt-24 md:my-8 md:px-12 xl:px-80">
          <div className="z-0">
            <Player />
          </div>
        </div>
        <div>
          <h1 className="block flex-1 pt-2 text-center text-lg text-white lg:hidden">
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
          <h1 className="invisible flex-1 text-center  text-lg text-white lg:visible lg:block">
            Video Title
          </h1>

          <div className="flex justify-end">
            <button className=" flex h-8 w-12 items-center justify-center rounded-2xl border border-white bg-[#27272A] md:h-12 md:w-20">
              <img src="./images/like.svg" alt="" className="h-4 md:h-8" />
            </button>
          </div>
        </div>
        <div
          className="mt-8 flex h-12 items-center rounded-2xl bg-gray-300 pl-4 md:mx-12"
          onClick={handleDropdownClick}
        >
          <div>
            <p className="text-xs ">nombre de vues </p>
            <p className="mr-auto text-xs">date de la diffusion </p>
          </div>

          {isDropdownOpen ? null : (
            <svg
              id="arrowD"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="mr-2 ml-auto h-4 w-4 cursor-pointer"
            >
              <path d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </div>
        {isDropdownOpen && (
          <div
            className="flex h-12 items-center rounded-2xl bg-gray-300 pl-4 md:mx-12"
            onClick={handleDropdownClick}
          >
            <p className=" ">
              Hidden text goes here Hidden text goes here Hidden text goes here
            </p>
            <svg
              id="arrowU"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="mr-2 ml-auto h-4 w-4 cursor-pointer"
            >
              <path d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
