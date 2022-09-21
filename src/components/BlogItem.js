import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = ({ item, filePath }) => {
  return (
    <div className="w-xs p-4 lg:w-80">
      <div className="bg-white rounded ">
        <Link href={`/post/${filePath.replace(/\.mdx?$/, '')}`}>
          <a>
            <Image
              className="rounded-lg"
              src={item.image}
              alt=""
              height={330}
              width={340}
            />
          </a>
        </Link>
        <div className="p-2 text-left">
          <Link href={`/post/${filePath.replace(/\.mdx?$/, '')}`}>
            <a>
              <h5 className="mb-2 text-xl text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="mr-2 font-normal text-orange-400">―</span>
                {item.title}
              </h5>
            </a>
          </Link>
          <a className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Continue Reading
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
