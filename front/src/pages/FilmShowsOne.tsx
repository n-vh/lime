import React from 'react';
import { ButtonTypes } from '~/components/ButtonTypes';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';

export function FilmShowsOne() {
  return (
    <>
      <div id="bg">
        <Navbar />
        <div className="mx-9 py-16 md:mx-20 md:py-20">
          <div className="mt-16">
            <h2 className="text-white">Amouranth</h2>
            <h1 className="text-2xl text-white">AMOURANTH WITH A LOLLY</h1>
            <div className="pt-2"></div>
            <span className="bg-inert mr-2 rounded-md border border-[#D9D9D9] px-2.5 py-0.5 text-xs font-medium text-white">
              Porno
            </span>
            <span className="bg-inert mr-2 rounded-md border border-[#D9D9D9] px-2.5 py-0.5 text-xs font-medium text-white">
              Porno
            </span>
            <span className="bg-inert mr-2 rounded-md border border-[#D9D9D9] px-2.5 py-0.5 text-xs font-medium text-white">
              Porno
            </span>
          </div>
        </div>
      </div>
      <div className="mx-9 grid grid-cols-3 gap-3 md:mx-20 lg:grid lg:grid-cols-6">
        <ButtonTypes className="flex -translate-y-12 place-content-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#27272A"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#27272A"
            className="h-9 w-9 justify-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </ButtonTypes>
        <div className="mt-4 flex h-16 -translate-y-12 items-center justify-center rounded-md bg-white/20 px-5 py-2.5 text-lg  text-white  backdrop-blur-sm">
          PG
          <p className="absolute left-0 origin-center -rotate-90 font-sans text-[8px] text-white">
            RATING
          </p>
        </div>
        <div className="mt-4 flex h-16 -translate-y-12 items-center justify-center rounded-md bg-white/20 px-5 py-2.5 text-lg text-white backdrop-blur-sm">
          14.03.21
          <p className="absolute left-0 origin-center -rotate-90 font-sans text-[8px] text-white">
            RELEASE
          </p>
        </div>
        <div className="mt-2 flex h-16 -translate-y-12 items-center justify-center rounded-md bg-white/20 px-5 py-2.5 text-lg text-white  backdrop-blur-sm  md:mt-4">
          2M
          <p className="absolute left-0 origin-center -rotate-90 font-sans text-[8px] text-white">
            VIEWS
          </p>
        </div>
        <div className="mt-2 flex h-16 -translate-y-12 items-center justify-center rounded-md bg-white/20 px-5 py-2.5 text-lg text-white backdrop-blur-sm md:mt-4">
          4 Min
          <p className="absolute left-0 origin-center -rotate-90 font-sans text-[8px] text-white">
            LENGTH
          </p>
        </div>
        <button className="mt-2 flex h-16 -translate-y-12 items-center justify-center rounded-md border border-[#E3FF7D] bg-white/20 px-5 py-2.5 text-lg text-white outline outline-0 outline-[#E3FF7D] backdrop-blur-sm hover:outline-2 md:mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#E3FF7D"
            className="h-7 w-7 justify-center"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          <p className="absolute left-0 origin-center -rotate-90 font-sans text-[8px] text-white">
            LIKE
          </p>
        </button>
      </div>
      <div className="mx-9 text-white md:mx-20 md:mb-16">
        <h1 className="text-xl">Description</h1>
        <p>
          Blabli blu Blabli blu Blabli blu Blabli blu Blabli blu Blabli blu Blabli blu
          Blabli blu Blabli blu Blabli blu Blabli blu Blabli blu Blabli blu{' '}
        </p>
        <h1 className="mt-9 text-xl">Streamer</h1>
        <img
          className="mt-1 mb-9 h-9 w-9 rounded-full"
          src="/images/placeholder.png"
          alt="user photo"
        />
      </div>
      <Footer />
    </>
  );
}
