import React from 'react';
import Image from 'next/image';

const data = [
  {
    id: 1,
    image: '/images/Icon.png',
    title: 'Members, Friends',
    description:
      'Members, Friends Connection ( like followers ), Private  Message',
  },
  {
    id: 2,
    image: '/images/Icon(1).png',
    title: 'Groups',
    description:
      'Your users can create groups to let other users to join and talk',
  },
  {
    id: 3,
    image: '/images/Icon(2).png',
    title: 'Forum',
    description:
      'Forum is ready by BBPress. Your users can make topics and talk.',
  },

  {
    id: 4,
    image: '/images/Icon(3).png',
    title: 'Custom Module',
    description:
      'You can create Members, Groups Module. We already created 3 modules. It by drag & drop live builder.',
  },
  {
    id: 5,
    image: '/images/Icon(4).png',
    title: 'List Builder',
    description:
      'Members, Groups list can be modified by drag & drop live builder.',
  },
  {
    id: 6,
    image: '/images/Icon(5).png',
    title: 'List Scroll Effects',
    description:
      '8 different scroll effects are ready You can always change by your tastes.',
  },
];

const FeatureCard = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            Our Community
          </h2>
          <p className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Community Main Feature
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {data.map((item) => (
              <div className="relative shadow-md m-4">
                <dt>
                  <div className="absolute  top-5 left-1 flex  items-center justify-center rounded-md  text-white">
                    <Image
                      src={item.image}
                      height={66}
                      width={66}
                      alt="featured"
                      className="shadow-md"
                    />
                  </div>
                  <p className="ml-20 p-2 pt-0 text-lg font-medium leading-6 text-gray-900">
                    {item.title}
                  </p>
                </dt>
                <div className="mt-0 ml-20 mr-16 text-base text-gray-500 p-2 pt-0">
                  {item.description}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
