import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
    <nav className="w-full bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl font-bold">
                CODING<span className="text-blue-800">JUNK</span>
              </span>
            </a>
            <div className="md:hidden flex flex-wrap">
              <button
                className="p-2 text-gray-900700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.2707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-base">
              <li class="text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium">
                <Link href="/">Home</Link>
              </li>
              <li class="text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium">
                <Link href="/courses">Courses</Link>
              </li>
              <li class="text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li class="text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium">
                <Link href="/practice">Practice</Link>
              </li>
              <li class="text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium">
                <Link href="/interview">Interview</Link>
              </li>
              <button className="text-white bg-blue-800 hover:bg-blue-900 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">
                <Link href="/Subscribe">Subscribe</Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
       <div className="flex-grow border-t border-gray-200"></div>
      </nav>
      <header className="text-gray-600 body-font top-0 shadow-md invisible lg:visible">
      <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
        <ul class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Data Structures</Link>
        </li>
        <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Algorithms</Link>
        </li>
        <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>C++</Link>
        </li>
        <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Interview</Link>
        </li>
        <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Java</Link>
        </li>
        <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Python</Link>
        </li>
         <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Competitive</Link>
        </li>
         <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Machine Learning</Link>
        </li>
         <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Projects</Link>
        </li>
         <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Javascript</Link>
        </li>
         <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Puzzle</Link>
        </li>
    </ul>
      </div>
    </header>
    </>
  );
}
