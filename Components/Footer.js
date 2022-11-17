import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
   <footer class="text-white bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <span class="ml-3 font-bold text-2xl">CODING<span className="text-blue-900">JUNK</span></span>
      </a>
      <p class="mt-2 text-xl font-semibold text-white">Start your programming journey now!!</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-lg text-white tracking-widest mb-3">LEARN TUTORIALS</h2>
        <nav class="list-none mb-10 space-y-2 font-medium">
          <li>
            <a>Learn JAVA</a>
          </li>
          <li>
            <a>Learn C++</a>
          </li>
          <li>
            <a>Learn PYTHON</a>
          </li>
          <li>
            <a>Learn JAVASCRIPT</a>
          </li>
          <li>
            <a>Learn ALGORITHMS</a>
          </li>
          <li>
            <a>Learn DSA</a>
          </li>
          <li>
            <a>Learn HTML</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-lg text-white tracking-widest mb-3">OUR SERVICES</h2>
        <nav class="list-none mb-10 space-y-2 font-medium">
          <li>
            <a>Web Designing</a>
          </li>
          <li>
            <a>Website Development</a>
          </li>
          <li>
            <a>App Development</a>
          </li>
          <li>
            <a>Digital Marketing</a>
         </li>
         <li>
            <a>SEO Optimization</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-lg text-white tracking-widest mb-3">TERMS</h2>
        <nav class="list-none mb-10 space-y-2 font-medium">
          <li>
            <Link href='/terms'>Terms of Use</Link>
          </li>
          <li>
            <Link href='/privacy'>Privacy Policy</Link>
          </li>
          <li>
            <Link href='/aboutus'>About Us</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full pr-4 space-y-2">
        <h2 class="title-font text-white font-semibold text-lg tracking-widest mb-3">CONTACT</h2>
            <p>Address: Chakupat, Pulchowk</p>
            <p>Lalitpur, 44600, Nepal</p>
            <p>Contact No: (+977) 9880691680</p>
            <p>Sitemaps</p>
            <Link href='/aboutme'><p className='cursor-pointer'>About Me</p></Link>

         
      </div>
    </div>
  </div>
  <div class="bg-gray00">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-white text-sm text-center sm:text-left">Copyrights © 2022 Coding Junk
        <a class="text-white ml-1" target="_blank">| All Rights Reserved</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href="https://www.facebook.com/codingjunk"><a class="text-blue-500" target="_blank">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a></Link>
        
        <Link href="https://www.instagram.com/codingjunk/">
        <a class="ml-3 text-pink-500" target="_blank">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a></Link>

        <Link href="https://www.linkedin.com/in/balayar07/">
        <a class="ml-3 text-sky-500" target="_blank">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a></Link>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer;