import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../images/1.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(true);
  const navigations = [
    { name: "Home", href: "/" },
    { name: "about", href: "/about" },
    { name: "service", href: "/service" },
    { name: "contact", href: "/contact" },
  ];
  const handleNavigation = () => {
    setOpen(!open);
    setOpenHamburger(!openHamburger);
  };
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
                className="p-2 inline-flex justify-center items-center rounded-lg border border-gray-900 text-gray-800 shadow-sm"
                onClick={() => handleNavigation()}
              >
                {openHamburger ? (
                  <i className="bi bi-justify text-xl font-extrabold"></i>
                ) : (
                  <i className="bi bi-arrow-bar-up text-xl font-extrabold"></i>
                )}
              </button>
            </div>
          </div>
          <div
            id="navbar-image-and-text-2"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            {!open ? (
              <div className="flex capitalize flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                {navigations.map((e, index) => {
                  return (
                    <Link
                      key={index}
                      className="text-base font-medium hover:dark:bg-black p-4 text-black-600 hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      to={e.href}
                      aria-current="page"
                    >
                      {e.name}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
          {open ? (
            <div className="flex capitalize flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0">
              {navigations.map((e, index) => {
                return (
                  <Link
                    key={index}
                    className="text-base hover:bg-gray-300 rounded-md font-medium p-4 text-black-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to={e.href}
                    aria-current="page"
                  >
                    {e.name}
                  </Link>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
