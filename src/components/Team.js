import React from 'react';
import Image from 'next/image';
const list = [
  {
    id: 1,
    tab: 'Newest',
  },
  {
    id: 2,
    tab: 'Popular',
  },
  {
    id: 3,
    tab: 'Active',
    membersName: '',
    membersId: '',
  },
];

const team = [
  {
    id: 1,
    image: '/images/image 296.png',
    membersName: 'Fahim Rahman',
    membersId: '@rahman',
  },
  {
    id: 2,
    image: '/images/image 299.png',
    membersName: 'Kazi Rahman',
    membersId: '@Rahman',
  },
  {
    id: 3,
    image: '/images/image 298.png',
    membersName: 'Masterero Ali',
    membersId: '@Master',
  },
  {
    id: 4,
    image: '/images/Check.png',
    membersName: 'Alia Karon',
    membersId: '@Alia',
  },
];

export const Team = () => {
  return (
    <section className="sm:mx-16 bg-white  px-6">
      <div className="py-6  container dark:bg-gray-800 dark:text-gray-100">
        <div className=" flex flex-col items-center justify-centers">
          <h2 className="text-lg font-semibold text-indigo-600">
            Valuable Team
          </h2>
          <h1 className="text-2xl font-bold text-[#0A093D] leading-none text-center mb-4 sm:text-4xl">
            Our Active Members
          </h1>
          <p className="max-w-2xl text-center  text-[#656464]  mb-4">
            when an unknown printer took a galley of type and meeting fari
            scrambled it.
          </p>
          <ul className="hidden text-sm font-medium text-center text-gray-500  bg-sky-100 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            {list.map((item) => (
              <li className="w-full">
                <a
                  href="#"
                  className="inline-block p-4 w-full text-gray-900  focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                  aria-current="page"
                >
                  {item.tab}
                </a>
              </li>
            ))}
          </ul>
          <div className=" text-center lg:py-14 ">
            <div className="grid gap-8 lg:gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {team.map((team) => (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Image
                    alt=""
                    className="self-center flex-shrink-0 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                    height={144}
                    width={144}
                    src={team.image}
                  />{' '}
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{team.membersName}</a>
                  </h3>
                  <p>{team.membersId}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;