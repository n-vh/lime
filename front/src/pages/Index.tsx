import { useEffect, useState } from 'react';
import { Button as SignInButton } from '~/components/SignIn/Button';
import { Footer } from '~/components/Footer';
import { Button } from '~/components/Button';
import { useFetch } from '~/hooks/useFetch';
import '../index.css';

export function Index() {
  const [email, setEmail] = useState('');
  const { data, loading, refetch } = useFetch('http://localhost:6543/check', {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      window.location.href = '/home';
    }

    if (data?.exists === true) {
      window.location.href = '/signin';
    } else if (data?.exists === false) {
      window.location.href = '/signup';
    }
  }, [data]);

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
            <div className="md:mx-8">
              <input
                type="email"
                name="email"
                id="email"
                className="mt-8 block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="E-mail Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="mb-3" onClick={refetch}>
                Continue
              </Button>
              <p className="text-sm text-white">
                Get 12 months of Lime+ at the price of 10 with an annual subscription!
                Save compared to a monthly subscription over the course of a year.
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <div id="bg" className="absolute inset-0 overflow-hidden"></div>
          <SignInButton authenticated={false} profile={null} />
        </div>
      </div>
      <div className="mx-9 mt-32 text-center text-white">
        <h1 className="text-3xl sm:text-4xl">
          Exclusively on <span className="text-[#E3FF7D]">Lime+</span>
        </h1>
        <p className="py-5 text-center text-lg sm:mx-8">
          Relive the best gaming moments and immerse yourself in endless entertainment
          with exclusive replay streams, top gaming content and much more, not available
          on any other streaming service.
        </p>
      </div>
      <div className="mx-9 mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:mx-24">
        <div className="flex justify-center">
          <img className="rounded-md" src="../images/lol.webp"></img>
        </div>
        <div className="flex justify-center">
          <img className="rounded-md" src="../images/hogwart.webp"></img>
        </div>
        <div className="flex justify-center">
          <img className="rounded-md" src="../images/minecraft.webp"></img>
        </div>
        <div className="hidden justify-center sm:flex">
          <img className="rounded-md" src="../images/fifa.webp"></img>
        </div>
      </div>
      <br></br>
      <div className="mx-9 grid grid-cols-3 gap-3 sm:mt-5 sm:grid-cols-4 sm:gap-4 lg:mx-24">
        <div className="flex justify-center">
          <img className="rounded-md" src="../images/valorant.webp"></img>
        </div>
        <div className="flex justify-center">
          <img className="rounded-md" src="../images/rocket.webp"></img>
        </div>
        <div className="flex justify-center">
          <img className="rounded-md" src="../images/gta.webp"></img>
        </div>
        <div className="hidden justify-center sm:flex ">
          <img className="rounded-md" src="../images/cs.webp"></img>
        </div>
      </div>
      <div className="mx-9 mt-32 text-center text-white">
        <h1 className="text-3xl sm:text-4xl">Replay anywhere</h1>
        <p className="py-5 text-center text-lg sm:mx-8">
          Never miss a beat and immerse yourself in the world of gaming anytime, anywhere
          with <span className="text-[#E3FF7D]">Lime+</span>. Enjoy watching the replays
          of your favorite streamers, relive the most epic moments and stay up-to-date
          with the latest content.
        </p>
      </div>
      <div className="mt-9 flex place-content-center justify-center">
        <img src="../images/undraw.svg"></img>
      </div>
      <div className="gap-4 lg:mx-24 lg:grid lg:grid-cols-3">
        <div className="mx-9 mt-32 flex place-content-center lg:mt-40">
          <div className="place-content-center place-items-center justify-center text-center text-white">
            <div className="inline-block h-20 w-20 items-center justify-center rounded-full border-2 border-[#E3FF7D]">
              <img
                className="my-3.5 ml-2 inline-flex w-12"
                src="../images/film.svg"
                alt="film icon"
              ></img>
            </div>
            <p className="mt-4 text-3xl sm:text-2xl">Endless entertainment</p>
            <p className="mt-4 text-xl sm:text-xl">
              Discover thousands of hours of gaming replays, featuring your favorite
              moments and players.
            </p>
          </div>
        </div>
        <div className="mx-9 mt-16 flex place-content-center lg:mt-40 ">
          <div className="place-content-center place-items-center justify-center text-center text-white">
            <div className="inline-block h-20 w-20 items-center justify-center rounded-full border-2 border-[#E3FF7D]">
              <img
                className="my-4 inline-flex w-12"
                src="../images/update.svg"
                alt="film icon"
              ></img>
            </div>
            <p className="mt-4 text-3xl sm:text-2xl">Up-to-date content</p>
            <p className="mt-4 text-xl sm:text-xl">
              Stay ahead of the curve with the latest gaming news, updates, and insights.
            </p>
          </div>
        </div>
        <div className="mx-9 mt-16 mb-32 flex place-content-center lg:mt-40">
          <div className="place-content-center place-items-center justify-center text-center text-white">
            <div className="inline-block h-20 w-20 items-center justify-center rounded-full border-2 border-[#E3FF7D]">
              <img
                className="my-3.5 inline-flex w-12"
                src="../images/gaming.svg"
                alt="film icon"
              ></img>
            </div>
            <p className="mt-4 text-3xl sm:text-2xl">100% gaming</p>
            <p className="mt-4 text-xl sm:text-xl">
              Immerse yourself in our gaming world, and be part of a world dedicated
              solely to gaming.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
