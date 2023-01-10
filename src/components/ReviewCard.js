import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { HiArrowSmRight } from 'react-icons/hi';
import Button from '../components/atoms/Button';

const card = [
  {
    id: 1,
    image: '/images/icons8-star-50.png',
    rating: '4.8 Rating',
    members: '+836k',
    review:
      'More than 2 billion we people over countries use socibooks we to stay in touch with friends',
    link: 'Join Our Community',
  },
  {
    id: 2,
    image: '/images/icons8-award-32.png',
    rating: 'Awards',
    members: '+836k',
    review:
      'More than 2 billion we people over countries use socibooks we to stay in touch with friends',
    link: 'Go To Awards',
  },
];

const reviewImage = [
  {
    id: 1,
    image: '/images/review-1.png',
  },
  {
    id: 2,
    image: '/images/review-2.png',
  },
  {
    id: 3,
    image: '/images/review-3.png',
  },
];

const ReviewCard = () => {
  return (
    <div className="bg-white">
      <div className="flex gap-0 md:gap-9">
        {card.map((item) => (
          <div className="bg-white border-solid border-2 py-4 shadow-lg rounded-lg px-4 py-9 max-w-sm">
            <div className="mb-1 tracking-wide">
              <div class="flex items-center">
                <Image src={item.image} width={22} height={21} alt="icons8" />
                <p class="ml-2 text-sm font-normal text-[#0A093D]">
                  {item.rating}
                </p>
              </div>
              <div className="-mx-8 px-8 pb-3">
                <div className="flex items-center mt-2">
                  <div class="flex -space-x-1 overflow-hidden">
                    {reviewImage.map((item) => (
                      <Image
                        class="inline-block rounded-full ring-2 ring-white"
                        src={item.image}
                        height={24}
                        width={24}
                        alt="unsplash"
                      />
                    ))}
                    <p class="pl-4 text-sm font-semibold text-[#5D5B70] dark:text-white">
                      <span className="text-[#217BF4]">{item.members}</span>{' '}
                      Members
                    </p>
                  </div>
                </div>
                <div className="w-full px-4">
                  <p className="text-[#8C8C8C] text-base font-normal  py-1">
                    {item.review}
                  </p>
                  <Button>
                    {item.link}
                    <HiArrowSmRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
