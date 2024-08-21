import React from 'react';
import { usePathname } from 'next/navigation';

export default function DiagonalDrawer({
  isOpen,
  setIsOpen,
  selecttedIndex1,
  setSelectedIndex1,
}) {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <div className="relative">
        <div
          className={`z-50 ${
            pathname === '/' ? 'top-0' : 'top-0'
          } fixed top-0 flex size-14 cursor-pointer items-center justify-center rounded-br-3xl bg-[#48AFDE] lg:size-24 `}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="relative flex size-7 items-center justify-center lg:size-10"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 cursor-pointer text-white  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {/*remove the 96 and change it to 0 */}
      <header
        className={`fixed z-40 w-full transition-all duration-500 ${
          pathname === '/' ? 'top-0' : 'top-0'
        }`}
      >
        <div className="relative">
          <div className="absolute top-0 z-20 flex h-screen w-full scale-100 transform-gpu flex-col items-center justify-center  bg-[#223740] bg-opacity-95 opacity-100 transition-all duration-300 ease-in-out sm:flex-row lg:flex-col ">
            <nav className="font-recoletaBold text-center text-4xl uppercase text-white lg:text-4xl 2xl:text-6xl">
              <ul className="flex flex-col">
                <li className="group relative my-4 xl:my-4 2xl:my-6">
                  <div className="relative inline-block">
                    <a
                      target="blank"
                      href="/#home"
                      onClick={() => {
                        setSelectedIndex1(0);
                        setIsOpen(false);
                      }}
                    >
                      Home
                    </a>
                    {selecttedIndex1 === 0 ? (
                      <div className="absolute -left-2 top-2 -z-10 size-full -rotate-6 transform-gpu rounded-xl bg-[#48AFDE]  opacity-100  transition-all duration-300 group-hover:rotate-6 group-hover:opacity-100"></div>
                    ) : (
                      ''
                    )}
                    <div className="absolute -left-2 top-2 -z-10 size-full rotate-0 transform-gpu rounded-xl bg-[#48AFDE]  opacity-0  transition-all duration-300 group-hover:-rotate-6 group-hover:opacity-100"></div>
                  </div>
                </li>

                <li className="group relative my-4 xl:my-4 2xl:my-6">
                  <div className="relative inline-block">
                    <a
                      target="blank"
                      href="/#portfolio"
                      onClick={() => {
                        setSelectedIndex1(1);
                        setIsOpen(false);
                      }}
                    >
                      Portfolio
                    </a>
                    {selecttedIndex1 === 1 ? (
                      <div className="absolute -left-2  top-2 -z-10 size-full -rotate-6 transform-gpu rounded-xl bg-[#48AFDE]  opacity-100  transition-all duration-300 group-hover:-rotate-6 group-hover:opacity-100"></div>
                    ) : (
                      ''
                    )}
                    <div className="absolute -left-2  top-2 -z-10 size-full rotate-0 transform-gpu rounded-xl bg-[#48AFDE]  opacity-0  transition-all duration-300 group-hover:-rotate-6 group-hover:opacity-100"></div>
                  </div>
                </li>

                <li className="group relative my-4 xl:my-4 2xl:my-6">
                  <div className="relative inline-block">
                    <a
                      target="blank"
                      href="/#about-me-component"
                      onClick={() => {
                        setSelectedIndex1(2);
                        setIsOpen(false);
                      }}
                    >
                      About Me
                    </a>
                    {selecttedIndex1 === 2 ? (
                      <div className="absolute -left-2  top-2 -z-10 size-full -rotate-6 transform-gpu rounded-xl bg-[#48AFDE]  opacity-100  transition-all duration-300 group-hover:-rotate-6 group-hover:opacity-100"></div>
                    ) : (
                      ''
                    )}
                    <div className="absolute -left-2  top-2 -z-10 size-full rotate-0 transform-gpu rounded-xl bg-[#48AFDE]  opacity-0  transition-all duration-300 group-hover:-rotate-6 group-hover:opacity-100"></div>
                  </div>
                </li>

                <li className="group relative my-4 xl:my-4 2xl:my-6">
                  <div className="relative inline-block">
                    <a
                      target="blank"
                      href="/page/contactme"
                      onClick={() => {
                        setSelectedIndex1(3);
                        setIsOpen(false);
                      }}
                    >
                      Hire Me
                    </a>
                    {selecttedIndex1 === 3 ? (
                      <div className="absolute -left-2  top-2 -z-10 size-full -rotate-6 transform-gpu rounded-xl bg-[#48AFDE]  opacity-100  transition-all duration-300 group-hover:-rotate-6 group-hover:opacity-100"></div>
                    ) : (
                      ''
                    )}
                    <div className="absolute -left-2  top-2 -z-10 size-full rotate-0 transform-gpu rounded-xl bg-[#48AFDE]  opacity-0  transition-all duration-300 group-hover:-rotate-6 group-hover:opacity-100"></div>
                  </div>
                </li>
              </ul>
            </nav>
            <section className="relative mt-14 h-auto text-center sm:absolute sm:right-0 sm:mt-12 sm:h-full lg:relative lg:right-0 lg:mt-14 lg:h-auto">
              <h3 className="font-bold mb-5 block text-2xl uppercase  text-[#48AFDE] sm:hidden lg:block">
              Let&apos;s Connect
              </h3>
              <div className="flex flex-row sm:flex-col  lg:flex-row">
                <a
                  target="blank"
                  href="https://github.com/Turdugul"
                  className="duration-3000 text-gray-300 transition-colors hover:text-white"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="mx-3 mb-0 size-6 sm:mx-0 sm:mb-5 sm:size-8 lg:mx-3 lg:mb-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              
                <a
               className="duration-3000 text-gray-300 transition-colors hover:text-white"
                  target="_blank"
                  href="mailto:t.okonbaeva92@gmail.com"
                >
                 <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="mx-3 mb-0 size-6 sm:mx-0 sm:mb-5 sm:size-8 lg:mx-3 lg:mb-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg> 
                 
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/turdugul/"
                  className="duration-3000 text-gray-300 transition-colors hover:text-white"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="mx-3 mb-0 size-6 sm:mx-0 sm:mb-5 sm:size-8 lg:mx-3 lg:mb-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com"
                  className="duration-3000 text-gray-300 transition-colors hover:text-white"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="mx-3 mb-0 size-6 sm:mx-0 sm:mb-5 sm:size-8 lg:mx-3 lg:mb-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}