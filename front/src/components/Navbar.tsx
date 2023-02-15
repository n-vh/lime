export function Navbar() {
  return (
    <nav className="px-4 py-4 backdrop-blur-md sm:px-4">
      <div className="container mx-auto flex flex-wrap ">
        <a href="" className="mr-4 flex items-center">
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

        <div className="relative ml-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center">
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
          </div>
          <input
            type="text"
            id="search-navbar"
            className=" block w-28 rounded-l-full border-yellow-600 bg-gray-300 p-2 pl-10 text-sm text-black placeholder-black dark:text-black md:w-full"
            placeholder="Search..."
          />
        </div>

        <div className="relative ml-[1px]">
          <div className=" absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>

            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </div>
          <input
            type="text"
            id="search-navbar"
            className=" block w-5 rounded-r-full border-yellow-600 bg-gray-300 p-2 pl-10 text-sm text-black placeholder-black dark:text-black"
            placeholder="Search..."
          />
        </div>

        <div className="ml-auto flex items-center">
          <button
            type="button"
            className="mr-3 flex rounded-full bg-gray-600 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400 md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-9 w-9 rounded-full"
              src="/images/placeholder.png"
              alt="user photo"
            />
          </button>

          <div
            className="z-50 my-4 hidden list-none divide-solid rounded-md dark:divide-gray-400 dark:bg-gray-400"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm dark:text-white">Username</span>
              <span className="block truncate text-sm font-medium dark:text-gray-400"></span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center border-black hover:border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
