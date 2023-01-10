import React from 'react';
import Heading from './atoms/Heading';
import { HiArrowSmRight } from 'react-icons/hi';
import Button from '../components/atoms/Button';

const content = {
  title: 'Our Achievement',
  subtitle: 'We are Connecting \n You The Digital Life.',
  description:
    'The scope the Social Media becomes crucial \n Is helps the business to directly engage with their \n needs and wants.',
};

const cardItem = () => {
  return (
    <div class="text-left bg-white space-y-4">
      <a href="#">
        <h1 className="mb-2 text-lg font-medium leading-4 text-blue-400">
          {content.title}
        </h1>
        <Heading textLeft className="whitespace-pre-line">
          {content.subtitle}
        </Heading>
      </a>
      <p class="mb-4 font-normal text-gray-700 whitespace-pre-line">
        {content.description}
      </p>
      <Button textBase className="text-white py-2 px-3">
        <a className="inline-flex items-center">
          Discover me
          <HiArrowSmRight />
        </a>
      </Button>
    </div>
  );
};

export default cardItem;
