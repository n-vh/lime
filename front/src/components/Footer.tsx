import { Link, useParams } from 'react-router-dom';
import react from 'react';

export function Footer() {
  const footer = useParams();
  return (
    <div className="fixed inset-x-0 bottom-0 border-[#27272A] bg-[#27272A] p-4 py-4 shadow ">
      <p className="text-center text-2xl text-[#E3FF7D]">Lime+</p>
      <ul className="mt-4 flex flex-wrap place-content-center gap-8 text-sm text-white sm:mb-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Cookie Policy
          </a>
        </li>
      </ul>
      <hr className="my-4 border-[#52525B] sm:mx-auto lg:my-6" />
      <span className="block text-center text-sm text-white">
        © 2023 Lime+. All Rights Reserved.
      </span>
    </div>
  );
}
