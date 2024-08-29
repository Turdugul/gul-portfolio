import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import { Hind } from 'next/font/google';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

function HomeComponent() {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage: 'linear-gradient(to right, white 65%, #48AFDE 35%)',
          minHeight: '500px',
          maxHeight: '1200px',
          height: '100%',
          width: '100%',
        }}
      >
        <div className="container m-auto ">
          <div className="grid grid-cols-12 ">
            <div className=" col-span-12  flex flex-col justify-center bg-white md:col-span-5  md:bg-transparent">
              <div className="container m-auto">
                <div className="py-20 pl-0 text-center sm:pl-10 md:py-0 md:text-start lg:pl-24">
                  <p
                    className={`text-3xl   text-[#47AEDE] md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1 className="mt-5 text-7xl font-recoletaBlack text-[#223740] md:mt-3 md:text-6xl lg:text-7xl xl:text-8xl">
                    I am Gul
                  </h1>
                  <h2
                    className={`font-bold py-2 uppercase text-[#223740] md:text-xs lg:text-xl ${hind.className}`}
                  >
                    Software Developer
                  </h2>
                  <a
                    href="/#portfolio"
                    className={`font-bold mt-8 inline-block rounded-lg bg-[#48AFDE] px-5  py-3 uppercase text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#223740] hover:shadow-lg md:mt-5 md:py-2 md:text-xs lg:px-8 lg:py-3 lg:text-base xl:mt-10${hind.className}`}
                  >
                    Projects
                  </a>
                  <a
                    href="resume_Gul_JSDev.pdf"
                    download="resume_Gul_JSDev.pdf"
                    className={` font-bold ml-10 mt-8 inline-block rounded-lg bg-[#223740] px-5  py-3 uppercase text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#48AFDE] hover:shadow-lg md:mt-5 md:py-2 md:text-xs lg:px-8 lg:py-3 lg:text-base xl:mt-10${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-50px col-span-12 bg-[#d9eef7] md:col-span-6 md:bg-transparent md:pt-[100px]">
              <div
                className="container m-auto"
                style={{ width: '100%', height: '100%' }}
              >
                <Image
                  className=""
                  alt="Full-Stack Developer"
                  src="/profile.png"
                  // src="/gul.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          <div className="container absolute m-auto">
            <div className="px-3">
              <div
                className="relative bottom-[70px] z-20 mx-auto max-w-sm overflow-auto rounded-2xl bg-white px-10 md:max-w-xl lg:max-w-5xl lg:px-14 xl:max-w-6xl "
                style={{
                  boxShadow: '#48AFDE -10px 25px 50px 10px',
                }}
              >
                <div className="cursor-all-scroll py-10 md:py-6 lg:py-10">
                  <Slider {...settings}>
                    <Image
                      height={8}
                      width={50}
                      src="/logos.png"
                      alt=""
                      className="h-12 cursor-pointer"
                    />
                    <Image
                      height={8}
                      width={50}
                      src="/tailw1.png"
                      alt=""
                      className="  h-12 cursor-pointer px-5 "
                    />
                    <Image
                      height={8}
                      width={50}
                      src="/reactjs.png"
                      alt="skills"
                      className="h-12 cursor-pointer   "
                    />{' '}
                    <Image
                      height={8}
                      width={50}
                      src="/mongodb.png"
                      alt="skills"
                      className="h-12 cursor-pointer  "
                    />
                    <Image
                      height={8}
                      width={50}
                      src="/expressjs.png"
                      alt="skills"
                      className="h-12 cursor-pointer  hover:opacity-100 hover:grayscale-0 "
                    />
                    <Image
                      height={8}
                      width={50}
                      src="/nextjs.png"
                      alt="skills"
                      className="h-12 cursor-pointer   "
                    />
                    <Image
                      height={8}
                      width={50}
                      src="/expressjs.png"
                      alt="skills"
                      className="h-12 cursor-pointer  "
                    />
                    <Image
                      height={8}
                      width={50}
                      src="/nodejs.png"
                      alt="skills"
                      className="h-12 cursor-pointer  "
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeComponent;
