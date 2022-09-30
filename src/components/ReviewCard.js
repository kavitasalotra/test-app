import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="  sm:ml-14  sm:mr-4  bg-white  px-6">
      <div className="hidden sm:flex justify-center sm:gap-8">
        {card.map((item) => (
          <div className="bg-white border-solid border-2 py-4 shadow-lg rounded-lg  px-4 py-4 max-w-sm  my-8">
            <div className="mb-1 tracking-wide px-4 py-4">
              <div class="flex items-center">
                <Image src={item.image} width={22} height={21} alt="icons8" />
                <p class="ml-2 text-sm font-normal text-[#0A093D] dark:text-white">
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
                  <Link href="/">
                    <a className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-[#217BF4] ">
                      {item.link}
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
                  </Link>
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
