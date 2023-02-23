import { Carousel } from '~/components/Home/Carousel';
import { Divider } from '~/components/Divider';
import { Navbar } from '~/components/Navbar';

export function Home() {
  return (
    <>
      <Navbar />
      <div className="absolute top-0 z-0 h-2/6 w-full rounded-b-2xl bg-gray-200">
        <div className="right-0 left-0 h-3/6 rounded-lg ">
          <div className="h4/6 w-full bg-slate-300"></div>
          <h1 className="mb-2 pl-8 pt-[160px] md:pt-[240px] lg:pt-[250px]">
            TITLE OF THE VIDEO
          </h1>
          <div className="flex pl-8">
            <button className="flex h-8 w-24 items-center rounded-full bg-[#E3FF7D]">
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-2 ml-4"
              >
                <path
                  d="M9.92219 6.46154L0.234053 12.0727L0.230343 0.880951L9.92219 6.46154Z"
                  fill="#27272A"
                />
              </svg>
              Watch
            </button>

            <div className="flex h-8 w-24 items-center rounded-full border border-[#E3FF7D]">
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-2 ml-4"
              >
                <path
                  d="M9.92219 6.46154L0.234053 12.0727L0.230343 0.880951L9.92219 6.46154Z"
                  fill="#27272A"
                />
              </svg>
              11.000
            </div>

            <div className="flex h-8 w-24 items-center rounded-full border border-[#E3FF7D]">
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-2 ml-4"
              >
                <path
                  d="M9.92219 6.46154L0.234053 12.0727L0.230343 0.880951L9.92219 6.46154Z"
                  fill="#27272A"
                />
              </svg>
              10.000
            </div>
          </div>
        </div>
      </div>

      <div className="ml-4 mt-[285px] md:mt-[395px] lg:mt-[365px]"></div>

      <Divider />

      <Carousel />
      <Divider />

      <Carousel />
    </>
  );
}
