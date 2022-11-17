import React from "react";
import Head from "next/head";
import { getPosts } from "../utils/wordpress";
import Post from "../Components/Post";

export default function blogs({ posts }) {
 const jsxPosts = posts.map((post) => {
    return <Post post={post}  key={post.id} />;
  });
  return (
    <>
      <Head>
        <title>Blog | CodingJunk</title>
        <meta
          name="description"
          content="A digital programming and development blog to easily learn Python, C++, Java, Android, SQL with our easy examples, tutorials and references."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

       <div class="mt-12 space-y-2 text-center">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Read Our Amazing Blogs</h2>
    </div>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-2 ">{jsxPosts}</div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
 return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
