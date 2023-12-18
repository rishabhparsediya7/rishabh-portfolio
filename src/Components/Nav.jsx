import React from "react";
import image from "../images/1.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header className="fixed top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white/[0.5] text-sm py-4">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-dark"
              to="/"
            >
              <img className="w-10 h-auto" src={image} alt="Logo" />
              Brand
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-image-and-text-2"
                aria-controls="navbar-image-and-text-2"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-image-and-text-2"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <Link
                className="text-base font-medium hover:dark:bg-black p-4 text-black-600 hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/home"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className="text-base font-medium hover:dark:bg-black p-4 text-black-600 hover:text-white dark:text-black-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-base font-medium hover:dark:bg-black p-4 text-black-600 hover:text-white dark:text-black-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/service"
              >
                Work
              </Link>
              <Link
                className="text-base font-medium hover:dark:bg-black p-4 text-black-600 hover:text-white dark:text-black-400  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
