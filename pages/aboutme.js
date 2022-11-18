import React from "react";

const aboutme = () => {
  return (
   <div class="flex bg-gray-100 shadow-sm rounded-lg sm:mx-auto lg:mx-auto md:mx-auto sm:my-4 lg:my-4 md:my-4 max-w-md md:max-w-3xl ">
      <div class="container m-auto px-6 md:px-12 lg:px-10">
        <div class="flex items-center flex-wrap mt-0 px-2 md:px-0">
          < div className = "relative lg:w-full xl:py-10 md:py-10 lg:py-10 sm:py-10" >
          <h3 className='font-bold text-2xl md:text-center'>SUMAN BALAYAR (Founder of CodingJunk)</h3><br/>
          <figure class="mx-auto max-w-screen-md text-center">
            <svg
              aria-hidden="true"
              class="mx-auto mb-3 w-12 h-12 text-blue-800 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg" >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"></path>
            </svg>
            </figure>
            <div>
            <h1 className="text-justify font-serif text-xl font-bold">
                Why I started the CodingJunk
              </h1>
            </div>
            <div>
              <p className="text-md font-serif  text-justify">
                It was a month break after my semester exam. I was getting a
                little bored at home. Since, I love to do programming and have a
                keen interest in DSA so, I went to blogspot. I selected the
                domain programmrs(not existed now) and start uploading DSA
                articles randomly as a post. But, within a week I was getting
                remarkable views and it was continuous. Then, I have this idea
                of purchasing the domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutme;
