import { useState } from 'react';
import SignInButton from '~/components/SignInButton';
import { Footer } from '~/components/Footer';
import { ButtonTypes } from '~/components/ButtonTypes';

import '../index.css';

export function Index() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 mx-9 flex items-center justify-center">
          <div className="relative z-10 my-24 mx-auto place-items-center rounded-md bg-zinc-700/30 p-9 text-center backdrop-blur-sm sm:my-20">
            <h1 className="text-5xl text-[#E3FF7D]">Lime+</h1>
            <h2 className="pt-2 text-xl text-white">
              Relive all your gaming adventures in replay, with no limits!
            </h2>
            <p className="text-md pt-2 text-white">
              Enter your email address to start or reactivate your subscription.
            </p>
            <form className="md:mx-8" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-8 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="E-mail Address"
                  required
                />
              </div>
              <ButtonTypes className="mb-3">Continue</ButtonTypes>
              <p className="text-sm text-white">
                Get 12 months of Lime+ at the price of 10 with an annual subscription!
                Save compared to a monthly subscription over the course of a year.
              </p>
            </form>
          </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <div id="bg" className="absolute inset-0 overflow-hidden"></div>
          <SignInButton authenticated={false} profile={null} />
        </div>
      </div>
      <div className="mx-9 text-center text-white">
        <h1 className="mt-9 text-3xl">
          Exclusively on <span className="text-[#E3FF7D]">Lime+</span>
        </h1>
        <p className="pt-2 text-lg">
          Relive the best gaming moments and immerse yourself in endless entertainment
          with exclusive replay streams, top gaming content and much more, not available
          on any other streaming service.
        </p>
      </div>
      <div className=" mx-9 my-5 grid grid-cols-3 gap-3">
        <div className="flex justify-center">
          <img className="rounded-md sm:h-fit sm:w-6/12" src="../images/lol.jpg"></img>
        </div>
        <div className="flex justify-center">
          <img className="rounded-md sm:h-fit sm:w-6/12" src="../images/lol.jpg"></img>
        </div>
        <div className="flex justify-center">
          <img className="rounded-md sm:h-fit sm:w-6/12" src="../images/lol.jpg"></img>
        </div>
      </div>
      <br></br>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex justify-center">
          <img className="rounded-md sm:h-fit sm:w-6/12" src="../images/lol.jpg"></img>
        </div>
        <div className="flex justify-center">
          <img className="rounded-md sm:h-fit sm:w-6/12" src="../images/lol.jpg"></img>
        </div>
        <div className="flex justify-center">
          <img className="rounded-md sm:h-fit sm:w-6/12" src="../images/lol.jpg"></img>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
