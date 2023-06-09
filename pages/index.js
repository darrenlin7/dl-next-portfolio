import Head from "next/head";
import FeaturedWork from "../components/featuredWork";
import Hero from "../components/hero";
import RecentPosts from "../components/recentPosts";
import { getAllPosts, getAllWork } from "../lib/api";

export async function getStaticProps() {
  const posts = getAllPosts();
  const work = getAllWork();
  return {
    props: {
      posts,
      work,
    },
  };
}

export default function Home({ posts, work }) {
  return (
    <div>
      <Head>
        <title>NextJS Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <RecentPosts posts={posts} />
      <FeaturedWork work={work}/>
    </div>
  );
}
