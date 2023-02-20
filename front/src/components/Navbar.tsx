import { Search } from './Search';
import { Filter } from './Filter';

export function Navbar() {
  return (
    <nav className=" py-4 backdrop-blur-md sm:px-4">
      <div className="mx-auto flex flex-wrap px-8 ">
        <a href="" className="flex content-center items-center">
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

        <Search />

        <Filter />

        <div
          id="dropdown"
          className="z-10 hidden w-44 divide-y rounded-md dark:bg-gray-300"
        ></div>

        <div className="ml-auto flex items-center">
          <button
            type="button"
            className="mr-3 flex rounded-full bg-gray-600 text-sm focus:ring-4 focus:ring-[#e3ff7d] md:mr-0"
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
            className="z-50 my-4 hidden list-none divide-solid rounded-md dark:divide-gray-400 dark:bg-gray-300"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm dark:text-[#e3ff7d]">Username</span>
              <span className="block truncate text-sm font-medium dark:text-gray-400"></span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <button
            type="button"
            className=" flex rounded-full border border-gray-300 md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-gray-300"
            >
              <path d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>

          <div
            className=" my-4 hidden list-none divide-solid rounded-md dark:divide-gray-400 dark:bg-gray-400"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm dark:text-[#e3ff7d]">Username</span>
              <span className="block truncate text-sm font-medium dark:text-gray-400"></span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
