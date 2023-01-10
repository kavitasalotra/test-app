import React from 'react';
import Image from 'next/image';
import Heading from './atoms/Heading';
import Paragraph from './atoms/Paragraph';
const data = {
  title: 'What is Netbooks?',
  subtitle: 'Why Join to Netbook \n Social Network?',
  description:
    'Recent surveys have indicated that small businesses \n recognize the need they have to connect with \n consumer',
};

const About = () => {
  return (
    <div className="container px-6 py-8 mx-auto" id="About">
      <div className="flex justify-between items-center">
        <div className="space-y-4 text-left">
          <h1 className="text-lg font-medium leading-4 text-blue-400">
            {data.title}
          </h1>
          <Heading textLeft className="whitespace-pre-line">
            {data.subtitle}
          </Heading>
          <Paragraph textLeft className="whitespace-pre-line">
            {data.description}
          </Paragraph>
          <ul className="list-disc list-inside ">
            <li className="leading-5 text-lg mb-2">Group</li>
            <li className="leading-5 text-lg mb-2">Message</li>
            <li className="leading-5 text-lg mb-2">Share</li>
          </ul>
        </div>
        <div className="p-0 sm:p-6  xl:col-span-3">
          <div className=" hidden sm:grid gap-4 md:grid-cols-2">
            <div className="grid content-center gap-4">
              <div className=" ">
                <div className=" flex items-center mt-4 space-x-4">
                  <Image
                    src="/images/about-2.png"
                    width={281}
                    height={422}
                    className="sm:rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid content-center gap-4">
              <div className=" rounded-lg">
                <Image
                  src="/images/about-1.png"
                  width={267}
                  height={252}
                  className="rounded-3xl object-cover "
                />
              </div>
              <div>
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
