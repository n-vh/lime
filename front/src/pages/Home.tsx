import { useEffect } from 'react';
import { Carousel } from '~/components/Home/Carousel';
import { Divider } from '~/components/Divider';
import { Navbar } from '~/components/Navbar';

export function Home() {
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/';
    }
  }, []);

  return (
    <>
      <div id="bg">
        <Navbar />
        <div className=" py-16 md:mx-20 md:py-20">
          <div className="mt-16">
            <h1 className="mb-2 pl-8 text-2xl text-white">TITLE OF THE VIDEO</h1>
            <div className="flex pl-8">
              <button className="mx-1 flex h-10 w-24 items-center rounded-full bg-[#E3FF7D]">
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

              <div className="mx-1 flex h-10 w-24 items-center rounded-full border border-[#E3FF7D] text-white">
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 29 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-2 ml-4"
                >
                  <path
                    d="M1.51513 2.2687L26.9999 17.0175L1.48472 31.7136L1.51513 2.2687Z"
                    fill="#E3FF7D"
                    stroke="#27272A"
                    stroke-width="2"
                  />
                </svg>
                11.000
              </div>

              <div className="mx-1 flex h-10 w-24 items-center justify-center rounded-full border border-[#E3FF7D] bg-[#27272A] text-[#E3FF7D]">
                10:30
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />
      <Carousel />
      <Divider />
      <Carousel />
      <Divider />
      <Carousel />
      <Divider />
      <Carousel />
      <Divider />
      <Carousel />
    </>
  );
}
