import React from 'react';
import Image from 'next/image';

const post = [
  {
    id: 1,
    image: '/images/pixel.png',
    title: 'It Does Not Matter Hows Slowly go as Long',
  },
  {
    id: 2,
    image: '/images/Img.png',
    title: 'Netbook Network Added New Photo Filter',
  },
  {
    id: 3,
    image: '/images/pexels.png',
    title: 'We Optimised Netbooks Better Navigation',
  },
];

export const Blog = () => {
  return (
    <div className=" dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <h2 className="text-lg font-semibold text-indigo-600">
          Get Our Aplication
        </h2>
        <p className="text-4xl mt-2 font-bold leading-none text-center sm:text-5xl">
          Latest News
        </p>
        <div class="grid lg:grid-cols-3">
          {post.map((item) => (
            <div class="w-xs p-4 lg:w-80">
              <div class="p-2 bg-white rounded ">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src={item.image}
                    alt=""
                    height={330}
                    width={340}
                  />
                </a>
                <div className="p-2 text-left">
                  <a href="#">
                    <h5 className="mb-2 text-xl text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
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
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
