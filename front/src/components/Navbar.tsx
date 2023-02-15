import React from 'react';
import { Link, useParams } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="px-4 py-4 backdrop-blur-md sm:px-4">
      <div className="container mx-auto flex flex-wrap ">
        <a href="" className="flex items-center">
          <svg
            width="66"
            height="18"
            viewBox="0 0 66 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.88375 18V1.2H4.24375V15.12H9.97975V18H0.88375ZM15.6739 6V18H12.3859V6H15.6739ZM12.2659 3.768V0.48H15.7939V3.768H12.2659ZM36.1486 7.488V18H32.8606V8.688H29.3566V18H26.0686V8.688H22.5646V18H19.2766V5.88H21.9886L22.5646 6.864L24.2686 5.88H26.5726L28.8046 7.176L31.0606 5.88H33.3646L36.1486 7.488ZM49.6975 15.192V18H42.5215L39.7375 16.392V7.488L42.5215 5.88H46.9135L49.6975 7.488V13.224H43.0255V15.192H49.6975ZM43.0255 8.688V10.752H46.4095V8.688H43.0255ZM52.5878 10.152H57.2198V5.52H60.4358V10.152H65.0678V13.368H60.4358V18H57.2198V13.368H52.5878V10.152Z"
              fill="#E3FF7D"
            />
          </svg>
        </a>

        <div className="relative mx-4 hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7224 1.5L17 27L2.27757 1.5L31.7224 1.5Z"
                fill="#E3FF7D"
                stroke="#27272A"
                stroke-width="2"
              />
            </svg>
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>

            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full rounded-full p-2 pl-10 text-sm text-black placeholder-black  dark:border-gray-600 dark:bg-gray-300 dark:text-black"
            placeholder="Filter..."
          />
        </div>
        <div></div>
        <div className="relative mx-2 ml-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 40 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 14.5C27 21.9892 21.1469 28 14 28C6.85308 28 1 21.9892 1 14.5C1 7.01079 6.85308 1 14 1C21.1469 1 27 7.01079 27 14.5Z"
                fill="#E3FF7D"
                stroke="#27272A"
                stroke-width="2"
              />
            </svg>
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>

            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className=" block w-full rounded-full border-yellow-600 bg-gray-300 p-2 pl-10 text-sm text-black placeholder-black dark:text-black"
            placeholder="Search..."
          />
        </div>

        <button
          type="button"
          className="mx-2 mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 dark:focus:ring-yellow-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <img
            className="h-8 w-8 rounded-full"
            src="./images/placeholder.png"
            alt="user photo"
          />
        </button>
      </div>
    </nav>
  );
}
