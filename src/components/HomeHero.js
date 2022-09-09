import React from 'react';
import Image from 'next/image';

const HomeHero = () => {
  return (
    <section className=" mx-20 max-w-screen-xl bg-white  px-6">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <button
            type="button"
            className=" py-2  w-52 font-medium text-xs text-blue-400 rounded-lg bg-blue-100"
          >
            Netbook community
          </button>
          <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Your Solutions For Community!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-lg lg:text-xl dark:text-gray-400">
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </p>
          <a
            href="#"
            className="inline-flex bg-blue-300 items-center justify-center px-5 py-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            About More
          </a>

          <a
            href="#"
            className="inline-flex items-center text-blue-300 justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Invite Friend
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/images/Image.png"
            alt="group"
            width={585.52}
            height={501.47}
            className="object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
