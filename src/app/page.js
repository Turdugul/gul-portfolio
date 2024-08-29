'use client';
import HomeComponent from './components/HomeComponent/HomeComponent';
import { Hind } from 'next/font/google';
import MySlider from './components/SliderCard/MySlider';
import AboutMe from './components/AboutMe/AboutMe';
import CallToAction from './components/CallToAction/CallToAction';
const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HomeComponent />
      <div
        className="-mb-40 mt-0 pt-5"
        id="portfolio"
        style={{
          backgroundImage:
            'linear-gradient(-62deg, #EEF7FB 0 45%,  white 0% 100%)',
          width: '100%',
        }}
      >
        <div className="container m-auto">
          <p
            className="w-full  max-w-[750px] overflow-hidden px-5 text-[300px] text-[#F7FBFD] md:pl-[50px]"
            style={{ transform: 'translate(0px,-20px)' }}
          >
            Portfolio
          </p>
          <div className="" style={{ transform: 'translate(0px, -290px)' }}>
            <p className="font-extrabold  px-5 text-5xl text-[#48AFDE] md:pl-[80px]">
              Recent Works
            </p>
            <p
              className={`mt-5 max-w-2xl px-5 text-[16px] font-[300] leading-8 text-[#47626D] md:pl-[80px] ${hind.className}`}
            >
              Here are a few of my most recent projects. I always enjoy working
              on them, as each one feels like a new adventure. In every new
              project, I strive to learn and incorporate new skills and
              knowledge. This passion for learning and self-improvement drives
              me to continually grow and enhance my abilities.
            </p>
          </div>
        </div>
        <div style={{ transform: 'translate(0px,-230px)' }}>
          <MySlider />
        </div>
      </div>
      <AboutMe />
      <CallToAction />
    </main>
  );
}
