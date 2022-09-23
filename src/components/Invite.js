import React from 'react';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <div className="bg-[#E5F0FD]">
      <div className="container sm:mx-16 p-8 flex flex-col justify-center lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-8 text-center rounded-sm lg:max-w-md xl:max-w-md lg:text-left">
          <h2 className="text-lg font-semibold text-[#217BF4]">
            Get Our Aplication
          </h2>
          <h1 className=" text-2xl sm:text-4xl text-[#0A093D] font-bold leading-none ">
            You Can Easily Find This App…!
          </h1>
          <p className="mt-6 mb-8   text-[#656464]  sm:w-text-base sm:mb-12">
            I say chap that’s suing lavatory chip shop gosh off his smashing
            boot are you taking the piss posh loo brilliant.
          </p>
          <div className="inline-flex items-center  sm:flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className=" py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              <button
                type="button"
                class="flex  bg-white  border-2 border-transparent text-black rounded-md mb-4 w-44 dark:bg-slate-800 dark:text-white"
              >
                <div class="m-auto">
                  <div class="flex items-center justify-start flex-1 space-x-4">
                    <svg
                      class="text-black"
                      width="45"
                      height="45"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                      />
                    </svg>
                    <span class="font-medium text-xs text-gray-400">
                      Download on the{' '}
                      <h1 className="text-slate-600 font-semibold">
                        App Store
                      </h1>{' '}
                    </span>
                  </div>
                </div>
              </button>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className=" py-3 text-lg font-semibold border  dark:border-gray-100"
            >
              <button
                type="button"
                class="flex bg-slate-800 text-black border-2 border-transparent rounded-md  mb-4 w-44 dark:bg-slate-800 dark:text-white"
              >
                <div class="m-auto">
                  <div class="flex items-center justify-start flex-1 space-x-4">
                    <Image
                      src="/images/icons.png"
                      width={45}
                      height={45}
                      alt="icon"
                    />
                    <span class="font-medium text-xs text-white mb-[-3px]">
                      Download on the{' '}
                      <h1 className="text-white font-semibold">Play Store</h1>{' '}
                    </span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className=" sm:flex items-center hidden  justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="/images/mobile.png"
            alt=""
            height={734}
            width={441}
            className=" object-contain "
          />
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
