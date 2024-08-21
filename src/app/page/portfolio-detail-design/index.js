import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Hind } from 'next/font/google';
import Image from 'next/image';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Index({ id, data, DataArray }) {
  const router = useRouter();

  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  useEffect(() => {
    if (JSON.parse(id) === DataArray.length - 1) {
      setNext(0);
    } else {
      setNext(JSON.parse(id) + 1);
    }
    if (JSON.parse(id) === 0) {
      setPrev(DataArray.length - 1);
    } else {
      setPrev(JSON.parse(id) - 1);
    }
  }, [DataArray.length, id]);

  return (
    <React.Fragment>
      <div className="overlay z-20 h-[400px] border-t border-gray-300 sm:top-0 lg:top-[96px]"></div>
      <div className="relative">
        <Image
          src={data?.images[0]}
          alt="bg photo"
          className="h-[400px]  object-fill sm:mt-0  lg:mt-24"
          width={0}
          height={20}
          sizes="100vw"
          style={{ width: '100%', backgroundSize: 'cover' }}
        />
      </div>

      <div className="absolute top-[42px] z-30 w-full items-center justify-center  px-10 sm:left-[65px] sm:top-[200px] sm:w-3/4 sm:px-0 sm:text-left  xl:w-1/2">
        <div className="container m-auto">
          <div className="m-auto w-full max-w-[650px]">
            <p className="opacity-3 font-sans mt-20 text-center text-[#223740] sm:text-left md:-mt-10 lg:mt-10">
              Project Sample
            </p>
            <h1 className="opacity-3 font-recoletaBold w-full text-center text-4xl text-[#223740] sm:w-3/4 sm:text-left md:text-4xl lg:text-4xl xl:text-4xl">
              {data?.title}
            </h1>
          </div>
        </div>
      </div>

      <div
        className="relative  grid  grid-cols-12 space-x-0 lg:space-x-8"
        style={{
          background:
            'linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%',
        }}
      >
        <div className="scrol  col-span-12 mb-20 sm:px-20 lg:col-span-8 lg:px-0">
          {data?.images.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center  lg:justify-end"
            >
              <Image
                src={item}
                alt="portfolio photos"
                height={100}
                width={800}
                className="mt-20 rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="col-span-12  sm:px-20 lg:col-span-4 lg:px-0">
          <div className="sticky top-36 mt-10 w-full px-3  pb-14 sm:mt-24 lg:max-w-[300px] lg:px-1">
            <h1 className="mb-4  text-3xl text-[#48AFDE]">{data?.name}</h1>
            <p className="font-sans mb-4 text-[14px] text-[#223740]">
              {data?.des}
            </p>
            <p id="highlight" className="text-dark  font-sans my-2 text-[20px]">
              Project Descriptions
            </p>
            <p className="font-sans mb-1 text-[14px] text-[#223740]">
              {' '}
              {data?.des1}
            </p>
            <div className="mb-4 flex flex-row gap-3">
              <a
                href={data?.demoLink}
                className={`font-semibold  mt-4 inline-block rounded-lg bg-[#2c29f6] px-3 py-1 uppercase text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#18771c] hover:shadow-lg md:mt-5 md:py-2 md:text-xs lg:px-8 lg:py-3 lg:text-base xl:mt-10${hind.className}`}
              >
                Demo
              </a>
              <a
                href={data?.repoLink}
                className={`font-semibold  mt-4 inline-block rounded-lg bg-[#2c29f6]  px-3 py-1 uppercase text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#18771c] hover:shadow-lg md:mt-5 md:py-2 md:text-xs lg:px-8 lg:py-3 lg:text-base xl:mt-10${hind.className}`}
              >
                Repo
              </a>
            </div>
            <div className="flex flex-wrap">
              <h1 className="font-sans mb-4  mr-5 rounded-xl  bg-[#63c5f1] px-2  py-1 text-[14px]  text-white lg:bg-[#EEF7FB] lg:text-[#6A787D]">
                Next.js
              </h1>
              <h1 className="font-sans mb-4  mr-5 rounded-xl  bg-[#63c5f1] px-2  py-1 text-[14px]  text-white lg:bg-[#EEF7FB] lg:text-[#6A787D]">
                React.js
              </h1>
              <h1 className="font-sans mb-4  mr-5 rounded-xl  bg-[#63c5f1] px-2  py-1 text-[14px]  text-white lg:bg-[#EEF7FB] lg:text-[#6A787D]">
                Node.js
              </h1>
              <h1 className="font-sans mb-4  mr-5 rounded-xl  bg-[#63c5f1] px-2  py-1 text-[14px]  text-white lg:bg-[#EEF7FB] lg:text-[#6A787D]">
                Express
              </h1>
              <h1 className="font-sans mb-4  mr-5 rounded-xl  bg-[#63c5f1] px-2  py-1 text-[14px]  text-white lg:bg-[#EEF7FB] lg:text-[#6A787D]">
                UI/US Design
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent-color relative flex h-48  text-white">
        <div
          className={`group flex w-1/2 items-center justify-center bg-cover  ${hind.className}`}
          style={{ backgroundImage: `url(${DataArray[prev]?.images[0]})` }}
        >
          <a
            className="group:hover:bg-[#223740] bg-opacity/90 flex size-full cursor-pointer items-center justify-center  bg-[#405B66] transition-colors duration-300"
            onClick={() => router.push(`/portfoliodetail/${prev}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 size-5 transition-transform duration-300 group-hover:-translate-x-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            Previous Project
          </a>
        </div>

        <div
          className={`group flex w-1/2 items-center justify-center bg-cover  ${hind.className}`}
          style={{ backgroundImage: `url(${DataArray[next]?.images[0]})` }}
        >
          <a
            className="group:hover:bg-[#223740] bg-opacity/90 flex size-full cursor-pointer items-center justify-center  bg-[#405B66] transition-colors duration-300"
            onClick={() => router.push(`/portfoliodetail/${next}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
            Next Project
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
