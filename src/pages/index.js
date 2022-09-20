import React from 'react';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import FeatureCard from '../components/FeatureCard';
// import Tab from '../components/Tab';
import Team from '../components/Team';
import BlogItem from '../components/BlogItem';
import CallToAction from '../components/Invite';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

export default function Home({ posts }) {
  return (
    <Layout>
      <HomeHero />
      <About />
      {/* <Tab /> */}
      <FeatureCard />
      <CallToAction />
      <Team />
      <div className="flex flex-col items-cent">
        {posts &&
          posts.map((item) => (
            <BlogItem
              key={item.filePath}
              item={item.data}
              filePath={item.filePath}
            />
          ))}
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
