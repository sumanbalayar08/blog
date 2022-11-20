import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div class="py-6">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="lg:w-3/4 xl:w-2/4 lg:mx-auto">
          <Link href={`/posts/${post.slug}`}>

          <div class="group relative bg-slate-300 cursor-pointer -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
            <div class="sm:p-2 sm:pl-0 sm:w-4/6">
              <span class="mt-1 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                {post.date}
              </span>
              <Link href={`/posts/${post.slug}`}>
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  {post.title.rendered}
                </h2>
              </Link>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
