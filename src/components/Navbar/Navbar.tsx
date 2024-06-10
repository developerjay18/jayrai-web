"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`bg-themePurple z-50 ${className}`}>
      {/* for large screens  */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            JAY RAI
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none bg-gray-100"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-themeLightPurple rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-themeDarkPurple md:bg-themePurple">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0"
                aria-current="page"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0 scroll-smooth"
                aria-current="page"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#tech-stack"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0 scroll-smooth"
                aria-current="page"
                onClick={toggleMenu}
              >
                Tech Stack
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0 scroll-smooth"
                aria-current="page"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0 scroll-smooth"
                aria-current="page"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
