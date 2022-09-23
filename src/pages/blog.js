import React from 'react';
import Layout from '../components/Layout';
import BlogItem from '../components/BlogItem';
import Blog from '../components/Blog';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

const blog = ({ posts }) => {
  return (
    <Layout>
      <Blog />
      <div className="container mx-auto px-7 py-5 lg:py-4 mx-auto xl:px-12">
        <div className="grid grid-cols-1  sm:gap-28 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          {posts &&
            posts.map((item) => (
              <BlogItem
                key={item.filePath}
                item={item.data}
                filePath={item.filePath}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};
export default blog;
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
