import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginModal from '../element/LoginModal';

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap py-4 lg:px-12 border-solid border-b-2 border-slate-200">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2  pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">
              <a>
                <Image
                  className="md:pl-6 cursor-pointer "
                  src="/images/Group.png"
                  alt="groups"
                  height={34}
                  width={34}
                />
                <Image
                  className="md:pl-6  object-scale-down cursor-pointer "
                  src="/images/Netbook.png"
                  alt="groups"
                  height={24}
                  width={103}
                />
              </a>
            </Link>
          </span>
        </div>
        <div className=" flex items-center sm:hidden">
          <button
            onClick={() => setActive(!active)}
            id="nav"
            className="flex items-center px-3 py-2 text-blue-700 "
          >
            {active ? (
              <svg
                className="h-10 w-24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className=" hidden menu w-full sm:block flex-grow sm:flex sm:items-center sm:w-auto sm:px-3 px-8">
        <div className="text-sm font-semibold text-zinc-700 lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
              Home
            </a>
          </Link>
          <Link href="/#About">
            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
              About
            </a>
          </Link>
          <Link href="/#Community">
            <a className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
              Community
            </a>
          </Link>
          <Link href="/blog">
            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
              Blog
            </a>
          </Link>
        </div>
        <div className="relative mx-auto text-gray-600 lg:block hidden mr-4">
          <input
            className=" border-b border-gray-300 bg-white  w-28 h-10 pl-2 pr-8  text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="flex ">
          <LoginModal />
        </div>
      </div>
      {active && (
        <div className=" sm:hidden menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-sm font-semibold text-zinc-700 lg:flex-grow">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                Home
              </a>
            </Link>
            <Link href="/#About">
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                About Us
              </a>
            </Link>
            <Link href="/#Community">
              <a className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                Community
              </a>
            </Link>
            <Link href="/blog">
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                Blog
              </a>
            </Link>
          </div>
          <div className="relative mx-auto text-gray-600 lg:block hidden mr-4">
            <input
              className=" border-b border-gray-300 bg-white  w-28 h-10 pl-2 pr-8  text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div className="flex mt-4 ">
            <LoginModal />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Header;
