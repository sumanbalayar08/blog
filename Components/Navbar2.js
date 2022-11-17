import React from 'react'
import Link from 'next/link'

const Navbar2 = () => {
  return (
    <header className="text-gray-600 body-font top-0 shadow-md">
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
         <li class=" hover:text-green-700 font-serif text-black md:mr-5">
            <Link href='/'>Hacks</Link>
        </li>
    </ul>
      </div>
    </header>
  );
}

export default Navbar2