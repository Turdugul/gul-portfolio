'use client';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Accordian({ title, content }) {
  const [isOpen, setIsoOpen] = useState(false);

  const toggleAccordina = () => {
    setIsoOpen(!isOpen);
  };
  return (
    <div className="mb-4 border-b border-[#232323]">
      <div
        className="flex w-full items-center justify-between bg-[#232323] p-2 sm:p-4"
        onClick={toggleAccordina}
      >
        <h2 className="font-semibold text-2xl text-white">{title}</h2>
        <div className="flex size-8 items-center justify-center rounded-full bg-[#232323]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 text-white ${isOpen ? '' : '-rotate-90'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref} className="bg-[#232323] p-4">
            {content.map((item) => (
              <p key={item} className="font-sans py-1 text-gray-400">
                {item}
              </p>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
}
