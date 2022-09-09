import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container max-w-6xl px-6 py-8 mx-auto ">
      <div className="grid items-center gap-4 xl:grid-cols-5">
        <div className="max-w-sm mx-auto space-y-4 text-center xl:col-span-2 xl:text-left">
          <h1 className="text-lg font-medium leading-4 text-blue-400">
            {' '}
            What is Netbooks?
          </h1>
          <h2 className="text-4xl font-bold leading-10">
            Why Join to Netbook Social Network?
          </h2>
          <p className="text-gray-400 leading-7 mb-4">
            Recent surveys have indicated that small businesses recognise the
            need they have to connect with consumer.
          </p>
          <ul className="list-disc list-inside">
            <li className="leading-5 text-lg">Group</li>
            <li className="leading-5 text-lg">Message</li>
            <li className="leading-5 text-lg">Share</li>
          </ul>
        </div>
        <div className="p-6 xl:col-span-3">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid content-center gap-4">
              <div className=" dark:bg-gray-900">
                <div className="flex items-center mt-4 space-x-4">
                  <Image
                    src="/images/about-2.png"
                    width={281}
                    height={422}
                    className="rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid content-center gap-4">
              <div className=" rounded-lg dark:bg-gray-900">
                <Image
                  src="/images/about-1.png"
                  width={267}
                  height={252}
                  className="rounded-3xl object-cover "
                />
              </div>
              <div className=" dark:bg-gray-900">
                <Image
                  src="/images/about-3.png"
                  width={267}
                  height={252}
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;