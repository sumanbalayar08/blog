import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>CodingJunk: Learn Coding for Free</title>
      </Head>

      <section class="body-font">
        <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-blue-800 font-sans">
              Learn Programming For Free
            </h1>
            <p class="mb-8 leading-relaxed text-gray-700">
              Want to learn programming for free ? Browse our blogs and 
              courses. Coding Junk is a platform where you can easily apply your programming knowledge to create real-world application projects such as web, app, ML, and game development.
            </p>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                 
                  <button
                    class="btn px-4 py-2.5 bg-gray-800 text-white font-medium  leading-tight rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    placeholder="Subscribe"
                    type="submit"
                    id="button-addon2"><Link href='/courses'>Free Courses</Link></button>

                    <button
                    class="btn px-4 py-2.5 ml-8 bg-blue-800 text-white font-medium  leading-tight rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    placeholder="Subscribe"
                    type="submit"
                    id="button-addon2"><Link href='/blog'>Explore</Link></button>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/programmer.png"
              alt="Picture of the author"
              width={480}
              height={390}
            />
          </div>
        </div>
      </section>
    </>
  );
}
