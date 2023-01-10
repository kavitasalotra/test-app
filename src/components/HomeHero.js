import React from 'react';
import Image from 'next/image';
import Heading from './atoms/Heading';
import Button from '../components/atoms/Button';
import Paragraph from './atoms/Paragraph';
const data = {
  title: 'Netbook community',
  subtitle: 'Your Solutions For \n Community!',
  description:
    'More than 2 billion people in over countries use social book \n  to stay in touch with friends & family.',
};

const HomeHero = () => {
  return (
    <section className="container mx-auto bg-white px-6">
      <div className="flex lg:justify-between lg:py-16">
        <div className="text-center sm:place-self-center sm:text-left space-y-3">
          <button
            type="button"
            className="py-2  px-6 lg:px-9 font-medium text-xs text-[#217BF4] rounded-lg bg-blue-100">
            {data.title}
          </button>
          <Heading
            textExtraLarge
            hasFontExtraBold
            textLeft
            className="whitespace-pre-line">
            {data.subtitle}
          </Heading>
          <Paragraph hasTextLarge textLeft className="whitespace-pre-line">
            {data.description}
          </Paragraph>
          <Button className="text-white py-2 px-3">About Us</Button>
        </div>
        <div className=" lg:mt-0">
          <Image
            src="/images/hero-image.png"
            alt="group"
            width={585}
            height={501}
            className="object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
