'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

function SliderCart({ item, index }) {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="sma:w-[300px] relative m-auto h-[280px] w-[300px] sm:h-[200px]  md:h-[400px] md:w-[450px] lg:h-[450px] lg:w-[650px]">
        <div className="group relative z-50 size-full cursor-all-scroll  py-4 md:py-4 ">
          <Image
            src={item.images[0]}
            alt="item thumbnail"
            className="h-[200px] w-full max-w-full rounded-lg md:h-[300px] lg:h-[350px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '80%' }}
          />
          <div
            onClick={() => router.push(`/portfoliodetail/${index}`)}
            className="shadow-accent-color absolute bottom-[100px] left-6 flex  size-10 cursor-pointer items-center  justify-center rounded-lg bg-[#47626D] opacity-0 transition duration-300 hover:bg-[#47626D] hover:shadow-xl group-hover:opacity-100  sm:bottom-[270px]  md:bottom-32 md:size-12  lg:bottom-44 lg:size-20"
            style={{ boxShadow: '#48AFDE -10px 10px 20px 10px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="size-6 text-white lg:size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className="absolute top-14 h-[200px] w-full rounded-lg bg-white sm:left-12 md:h-[300px] lg:h-[350px]"
          style={{ boxShadow: '#48AFDE -10px 10px 20px 10px' }}
        >
          <div className="relative flex h-[200px] w-full justify-between gap-2 md:h-[300px] lg:h-[350px] ">
            <p className="absolute bottom-3 left-4 text-lg font-[300] ">
              {item.name}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SliderCart;
