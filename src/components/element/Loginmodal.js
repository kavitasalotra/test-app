import React, { useState } from 'react';
import Image from 'next/image';

const modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="LoginForm">
      <button
        className="bg-blue-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div class="m-auto container px-12 sm:px-0 mx-auto">
                  <div class="mx-auto h-full">
                    <div class="m-auto  py-8 sm:p-14">
                      <div class="space-y-4">
                        <a href="">
                          <Image
                            className="md:pl-6"
                            src="/images/Group.png"
                            alt="groups"
                            height={34}
                            width={34}
                          />
                          <Image
                            className="md:pl-6  object-scale-down"
                            src="/images/Netbook.png"
                            alt="groups"
                            height={24}
                            width={103}
                          />
                        </a>
                      </div>
                      <div class="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                        <div class="grid gap-6 sm:grid-cols-2">
                          <button class="h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                            <div class="flex items-center justify-center space-x-4">
                              <img
                                src="/images/icons8-google-100.png"
                                class="w-8"
                                alt=""
                              />
                              <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                                With Google
                              </span>
                            </div>
                          </button>
                          <button class="h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                            <div class="flex items-center justify-center space-x-4 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="w-5"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                              </svg>
                              <span class="block w-max text-sm font-semibold tracking-wide text-white">
                                With Github
                              </span>
                            </div>
                          </button>
                        </div>

                        <form action="" class="mt-10 space-y-8 dark:text-white">
                          <div>
                            <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                              <input
                                id=""
                                type="email"
                                placeholder="Your email or user name"
                                class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                              />
                            </div>
                          </div>

                          <div class="flex flex-col items-end">
                            <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                              <input
                                id=""
                                type="Your password"
                                placeholder="Your answer"
                                class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                              />
                            </div>
                            <button type="reset" class="-mr-3 w-max p-3">
                              <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                                Forgot password ?
                              </span>
                            </button>
                          </div>

                          <div>
                            <button class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                              <span class="text-base font-semibold text-white dark:text-gray-900">
                                Login
                              </span>
                            </button>
                            <button
                              href="#"
                              type="reset"
                              class="-ml-3 w-max p-3"
                            >
                              <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                                Create new account
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="border-t pt-12 text-gray-500 dark:border-gray-800">
                        <div class="space-x-4 text-center">
                          <span>&copy; Tailus</span>
                          <a
                            href="#"
                            class="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                          >
                            Contact
                          </a>
                          <a
                            href="#"
                            class="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                          >
                            Privacy & Terms
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default modal;
