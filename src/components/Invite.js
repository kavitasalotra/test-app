import Link from 'next/link';
import React from 'react';
// import Image from 'next/image';

const CallToAction = () => {
  return (
    <div className="bg-[#E5F0FD] " id="Invite">
      <div className=" sm:mx-16 p-8 flex flex-col justify-center lg:flex-row lg:justify-between">
        <div>
          <div class=" m-auto px-6 space-y-8 md:px-12 lg:px-20">
            <div class="items-center justify-center gap-16 text-center md:text-left md:flex">
              <div class="order-last mb-6 space-y-6 md:mb-0 md:w-7/12 lg:w-6/12">
                <h1 class="text-sm text-[#4F46E5] font-normal md:text-xl">
                  Get Our Application
                </h1>
                <p class="text-lg text-gray-600">
                  Be part of millions people around the world using in modern
                  User Interfaces.
                </p>
                <div class="flex flex-wrap justify-center gap-4 lg:gap-6 md:justify-start">
                  <Link href="https://play.google.com/store/games">
                    <a
                      target="blank"
                      title="For Android"
                      aria-label="google play"
                      class="block overflow-hidden"
                    >
                      <img
                        src="/images/google_play.png"
                        width="153"
                        height="46"
                        alt="google play badge"
                      />
                    </a>
                  </Link>
                  <Link href="https://play.google.com/store/apps">
                    <a
                      target="blank"
                      title="For iPhone"
                      aria-label="app store"
                      class="block overflow-hidden"
                    >
                      <img
                        src="/images/app-store.png"
                        width="153"
                        height="46"
                        alt="apple store badge"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <img
                src="/images/mobility_illustration.webp"
                width="832"
                height="608"
                class="md:w-5/12 m-auto"
                loading="lazy"
                alt="mobility_illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
