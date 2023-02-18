import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { Player } from '~/components/Player';

export function PlayerPage() {
  return (
    <>
      <Navbar />
      <div className="md:my-8 md:px-12 xl:px-80">
        <Player />
      </div>
      <div></div>
      <div className="flex h-16 items-center  md:mx-12">
        <img
          className="h-12 w-12 rounded-full pl-1"
          src="/images/placeholder.png"
          alt="user photo"
        />
        <div className=" px-4">
          <h3 className="my-1">Streamer</h3>
          <p className="my-1">number of sub</p>
        </div>
        <h1 className="flex-1 text-center text-lg">Video Title</h1>
        <button className="mx-2 flex h-12 w-16 items-center justify-center rounded-2xl border border-white bg-gray-900">
          <img src="./images/like.svg" alt="" className="" />
        </button>
        <button className="mx-2 flex h-12 w-16 items-center justify-center rounded-2xl border border-white bg-gray-900">
          <img src="./images/like.svg" alt="" className="" />
        </button>{' '}
      </div>
      <div className="mt-8 flex h-8 items-center rounded-2xl border border-black pl-4 md:mx-12">
        <p className="text-xs">nombre de vues </p>
        <p className="text-xs">date de la diffusion </p>
        <svg
          className="mr-2 ml-auto h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </>
  );
}
