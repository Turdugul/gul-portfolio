'use client';
import React, { useEffect, useState } from 'react';
import Drawer from './DiagonalDrawer';
import '../Header/DiagonalDrawer.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? 'open' : ''}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${
          isScrolled ? 'headerShow' : ''
        } fixed top-0 z-50 w-full transition-all duration-500`}
        style={{
          backgroundColor: isScrolled ? '#fff' : 'transparent',
          boxShadow: isScrolled ? '#48AFDE -10px 25px 50px 10px' : '',
        }}
      >
        <div className="relative">
          <div
            onClick={openDrawer}
            className="absolute z-30 flex size-14 cursor-pointer items-center justify-center rounded-br-3xl bg-[#48AFDE] lg:size-24"
          >
            <div className="relative flex size-7 items-center justify-center lg:size-10">
              <Image
                height={100}
                width={100}
                src="/drawer.png"
                alt="drawer item"
                className="h-10 w-[150px]"
              />
            </div>
          </div>
        </div>

        <nav className="invisible mx-auto xl:visible xl:max-w-4xl 2xl:max-w-7xl ">
          <ul className="flex h-24 flex-row items-center font-recoletaBlack">
            <li className="font-bold group relative mr-20 text-2xl">
              {selectedIndex1 === 0 ? (
                <span className="menu-effect -rotate-12 opacity-100 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect rotate-12 opacity-0 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 0 ? 'text-black' : ''} text-[#666d47] group-hover:text-black`}
                href="/#home"
                onClick={() => setSelectedIndex1(0)}
              >
                Home
              </a>
            </li>
            <li className="font-bold group relative mr-20 text-2xl">
              {selectedIndex1 === 1 ? (
                <span className="menu-effect -rotate-12 opacity-100 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect rotate-12 opacity-0 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 1 ? 'text-black' : ''} text-[#666d47] group-hover:text-black`}
                href="/#portfolio"
                onClick={() => setSelectedIndex1(1)}
              >
                Portfolio
              </a>
            </li>
            <li className="font-bold group relative mr-20 text-2xl">
              {selectedIndex1 === 2 ? (
                <span className="menu-effect -rotate-12 opacity-100 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect rotate-12 opacity-0 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 2 ? 'text-black' : ''} text-[#666d47] group-hover:text-black`}
                href="/#about-me"
                onClick={() => setSelectedIndex1(2)}
              >
                About Me
              </a>
            </li>
            <li className="font-bold group relative mr-20 text-2xl">
              {selectedIndex1 === 3 ? (
                <span className="menu-effect -rotate-12 opacity-100 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect rotate-12 opacity-0 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <Link
                className={`menu-item ${selectedIndex1 === 3 ? 'text-black' : ''} text-[#666d47] group-hover:text-black`}
                href="/page/contactme"
                onClick={() => setSelectedIndex1(3)}
              >
                Hire me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
