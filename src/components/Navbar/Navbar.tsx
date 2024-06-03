"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav className="bg-themePurple z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            JR.Web
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0 scroll-smooth"
                aria-current="page"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#tech-stack"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0 scroll-smooth"
                aria-current="page"
              >
                Tech Stack
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0 scroll-smooth"
                aria-current="page"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0 scroll-smooth"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/snippets"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent hover:scale-105 md:p-0"
              >
                snippets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
