'use client';
import React, { useState } from 'react';
import { Hind } from 'next/font/google';
import { AboutData } from '@/app/data';
import Image from 'next/image';

import './aboutme.css';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunctions = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const HandleNext = () => {
    if (selectedIndex < 2) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };
  const HandlePrev = () => {
    if (selectedIndex !== 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[2], 2);
    }
  };

  return (
    <React.Fragment>
      <div
        id="about-me"
        className="relative mt-4 bg-[#E0F3FD]  pb-[100px] pt-[250px] lg:h-[800px] lg:pb-[600px]"
      >
        <div className="container m-auto">
          <h1 className="md:left-30 absolute top-[-50px] w-4/5 overflow-hidden text-[240px] text-[#EAF7FC]  lg:left-40">
            About Me
          </h1>
          <h1 className="relative -mt-40 mb-5  px-5 text-5xl font-recoletaBlack  text-[#48AFDE] md:px-24">
            About My Self
          </h1>
          <h4 className="relative mb-10 w-full px-5 font-recoleta text-2xl font-[300] text-[#223740] md:w-3/4 md:px-24 lg:w-2/3 xl:w-1/2">
            Knack of Building application with frontend and backend operation
          </h4>
          <section className="relative flex flex-col px-5 md:px-24 lg:flex-row">
            <p
              className={`mb-5 mr-0 w-full font-[200] text-[#223740]  lg:mr-4 lg:w-1/3 ${hind.className}`}
            >
              {' '}
              Hello! My name is Turdugul (Gul), and I am a passionate and dedicated Full Stack Developer. I thrive in dynamic environments and am constantly evolving, learning, and adapting to new challenges.
            </p>
            <p
              className={`mb-5 mr-0 w-full font-[200] text-[#223740]  lg:mr-4 lg:w-1/3 ${hind.className}`}
            >
              {' '}
             
With a solid background in web development, I build robust web applications using HTML, CSS, JavaScript, Node.js, React, and Next.js. I also develop and deploy complex backend systems, web services, and databases, ensuring each project meets both technical and business requirements.
            </p>
            <p
              className={`mb-5 mr-0 w-full font-[200] text-[#223740]  lg:mr-4 lg:w-1/3 ${hind.className}`}
            >
              {' '}
              I’m dedicated to delivering efficient, scalable software solutions. My passion for technology keeps me up-to-date with industry trends and drives me to continually enhance my skills.
 When faced with new challenges, I dive into research to understand and tackle them effectively, which is why I’ve developed a broad range of skills.
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'linear-gradient(45deg, #EAF7FC  70%,#48AFDE 30%)',
          width: '100%',
        }}
        className="lg:-mt-60"
      >
        <section className="mt-[50px sm:mt-0]  container m-auto flex translate-y-[-100px] flex-col px-5 sm:flex-row md:px-24">
          <div className=" hidden w-full sm:flex sm:w-1/2 lg:w-7/12">
            <div className="sm:grid-cols- mr-0 mt-20 grid gap-6 lg:mr-10 xl:grid-cols-3">
              {AboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: '#48AFDE -5px  10px 20px 0px' }}
                  className={`center group relative flex h-60 cursor-pointer flex-col items-center justify-center rounded-xl p-6 transition-all duration-300 lg:p-10${
                    selectedIndex == index
                      ? ' -translate-y-2 bg-[#476571]'
                      : 'bg-white hover:-translate-y-2 hover:bg-[#476571] hover:shadow-xl'
                  }`}
                >
                  <div className="size-16 sm:size-10 lg:size-16">
                    <Image
                      height={100}
                      width={100}
                      src={item.img}
                      alt="internet issues"
                    />
                  </div>
                  <h4
                    className={`font-recoletaBold mt-3 text-center  text-sm text-[#47626D] transition-colors duration-500 group-hover:text-white lg:text-xl ${
                      selectedIndex === index ? 'text-white' : ''
                    }`}
                  >
                    {item.title}
                  </h4>

                  <div
                    className={`font-bold font-recoletaBold absolute -right-2 -top-2 flex size-12 items-center justify-center rounded-lg bg-[#476571] text-xl text-white opacity-0 shadow-xl transition-all duration-500 group-hover:opacity-100${
                      selectedIndex === index
                        ? 'rotate-12 opacity-100'
                        : 'group-hover:rotate-12'
                    }`}
                  >
                    {item.count}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full overflow-visible px-0 sm:w-1/2 sm:pl-6 lg:w-5/12 xl:px-10">
            <div className="shadow-accent-color  relative mt-10 rounded-xl bg-white p-10 lg:mt-0 xl:p-12">
              <section
                className={`fade-left overflow-hidden ${
                  isFaded ? 'fade-out' : ''
                }`}
              >
                <p
                  className={`text-[#47626D] ${hind.className}  undefined text-lg opacity-100 transition duration-500 sm:text-base lg:text-xl`}
                >
                  My skills as
                </p>
                <h2 className="font-recoletaBold undefined mb-6 w-44 text-3xl text-[#47626D] opacity-100 transition duration-500 sm:text-2xl md:w-56 md:text-3xl">
                  {mapData?.title}
                </h2>

                <ul
                  className={`${hind.className} undefined ml-8 list-disc text-base font-[300] text-[#47626D] opacity-100 transition duration-500  lg:ml-10 lg:text-lg`}
                >
                  {mapData?.array?.map((obj) => (
                    <li key={obj} className="mb-2">
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
              <div
                className={`perspective-500 sm:top-30 card absolute -top-7 right-0 sm:-right-20 ${
                  isFlipped ? 'flipped' : ''
                }`}
              >
                <div className="card-inner">
                  <div className="transform-preserve  size-28  -rotate-6 cursor-pointer rounded-2xl bg-[#47626D]  p-5 text-7xl font-recoletaBlack text-white transition duration-500  xl:size-48 xl:p-8 xl:text-9xl">
                    <span className="mr-2 text-2xl sm:mr-3 xl:text-6xl">*</span>
                    {mapData.count}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5  right-10 flex">
                <a
                  onClick={HandlePrev}
                  className="-rotate mr-1 flex size-12 cursor-pointer items-center justify-center  rounded-xl  bg-[#47626D] transition duration-500 hover:-translate-y-1 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={HandleNext}
                  className="-rotate mr-1 flex size-12 cursor-pointer items-center justify-center  rounded-xl  bg-[#47626D] transition duration-500 hover:-translate-y-1 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
