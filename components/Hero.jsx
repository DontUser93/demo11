"use client" 
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import useWOW from './useWOW';
export default function Hero() {
  useWOW();
  return (
    <div>
         <div class="relative bg-white pt-[20px] pb-[60px] lg:pt-[60px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 lg:w-5/12">
            <div class="hero-content wow slideInLeft" data-wow-duration="1s">
              <h1
                class="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px] lg:mt-14"
              >
                Maximize Revenue with <span className='text-blue-700'> EasyGoRooms</span> <br />
              </h1>
              
              <p class="mb-4 max-w-[480px] text-base text-body-color">
              Experience the convenience of selling your property to a global audience through multiple channels using a single platform.
              </p>
              <h3 className='mb-8 sm:text-[22px] lg:text-[24px] xl:text-[26px] text-body-color'>We provide <TypeAnimation
      sequence={[
        'PMS', // Types 'One'
        1000, // Waits 1s
        'Revenue Management', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Hotel OTA', 
        3000,
        'May More'
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className={'text-blue-700'}
    /></h3>
         
              <ul class="flex flex-wrap items-center">
                <li>

                <button  data-hs-overlay="#hs-slide-up-animation-modal" type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
  Get Demo
</button>
                </li>
              </ul>
              {/* <div class="clients pt-8 hidden">
                <h6
                  class="mb-2 flex items-center text-xs font-normal text-body-color"
                >
                  Some Of Our Clients
                  <span
                    class="ml-2 inline-block h-[1px] w-8 bg-body-color"
                  ></span>
                </h6>
                <div class="flex items-center">
                  <div class="mr-4 w-full py-3">
                    <img src="/images/hotels/4.png" alt="ayroui" />
                  </div>
                  <div class="mr-4 w-full py-3">
                    <img
                      src="/images/hotels/2.png"
                      alt="graygrids"
                    />
                  </div>
                  <div class="mr-4 w-full py-3">
                    <img src="/images/hotels/3.png" alt="uideck" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div class="hidden px-4 lg:block lg:w-1/12 " ></div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="lg:ml-auto lg:text-right">
              <div class="relative z-10 inline-block pt-11 lg:pt-0 wow slideInRight" data-wow-duration="1s">
                <img
                  src="/images/herobanner.jpg"
                  alt="hero"
                  class="max-w-full lg:ml-auto hover:scale-125 transition duration-500 cursor-pointer object-cover"
                />
                {/* <span class="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<div id="hs-slide-up-animation-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 class="font-bold text-gray-800 uppercase dark:text-white">
          Get a free trial (For 10 days)
        </h3>
        <button type="button" class="hs-dropup-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-slide-up-animation-modal">
          <span class="sr-only">Close</span>
          <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <div class="p-4 overflow-y-auto">
      <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-800 mb-2" placeholder="Full Name"/>
      <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400  mb-2" placeholder="Contact No"/>
      <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400  mb-2" placeholder="Email Id"/>
      <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400  mb-2" placeholder="Property Name"/>
      <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400  mb-2" placeholder="No of Rooms"/>
      <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400  mb-2" placeholder="Property Location"/>

      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button type="button" class="hs-dropup-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-slide-up-animation-modal">
          Close
        </button>
        <a class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
          Get Started
        </a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}