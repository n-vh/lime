import { Link, useParams } from 'react-router-dom';
import react from 'react';

export function Footer() {
  const footer = useParams();
  return (
    <div className="inset-x-0 bottom-0 border-[#27272A] bg-[#27272A] p-4 py-4 shadow ">
      <hr className="my-4 border-[#52525B] sm:mx-auto lg:my-6" />
      <p className="text-center text-2xl text-[#E3FF7D] lg:text-2xl">Lime+</p>
      <ul className="mt-4 flex flex-wrap place-content-center gap-8 text-sm text-white sm:mb-0">
        <li>
          <a href="#" className="sm:text-md mr-4 hover:underline md:mr-6 ">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-md mr-4 hover:underline md:mr-6 ">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-md mr-4 hover:underline md:mr-6 ">
            Cookie Policy
          </a>
        </li>
      </ul>
      <p className="sm:text-md mt-4 block text-center text-sm text-white ">
        © 2023 Lime+. All Rights Reserved.
      </p>
    </div>
  );
}
