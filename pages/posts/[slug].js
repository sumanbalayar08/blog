import Link from "next/link";
import Head from 'next/head';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  InstagramShareButton,
  InstagramIcon
} from 'next-share';

import { getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ post }) {
  return (
<>
    <Head>
      <title>{post.title.rendered}</title>

    </Head>

    <div class="flex md:bg-gray-100 shadow-sm rounded-lg sm:mx-auto lg:mx-auto md:mx-auto sm:my-4 lg:my-4 md:my-4 max-w-md md:max-w-5xl">
      <div className="container m-auto px-6 md:px-12 lg:px-10">
        <div className="flex items-center flex-wrap mt-0 px-2 md:px-0">
          <div className="relative lg:w-full xl:py-10 md:py-10 lg:py-10 sm:py-10">
            <h1 className="text-center pb-5 font-bold text-4xl">
              {post.title.rendered}
            </h1>
            <div
              className="card-text pb-5 font-serif"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
          </div>

          <div>
      <h1>Social Share - GeeksforGeeks</h1>
      <FacebookShareButton
        
        url={'http://localhost:3000/events/linear-searching-algorithm'} 
        quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton
        
        url={'http://localhost:3000/events/linear-searching-algorithm'} >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton
        
        url={'http://localhost:3000'} >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
        
        url={'http://localhost:3000'} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        
        url={'http://localhost:3000/posts/[slug]'} 
        quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>


        </div>
      </div>
    </div>
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
