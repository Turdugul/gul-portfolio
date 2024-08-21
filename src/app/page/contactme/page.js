'use client';
import React, { useState } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { Hind } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Page() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [key]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    setState({ ...state, phoneNumber: numericValue });
  };

  const clearState = () => {
    setState({
      name: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      ...state,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        setLoading(false);
        const response = await res.json();
        if (!response.error) {
          clearState();
          toast(response.message);
        } else {
          clearState();
          toast('something went wrong');
        }
      })
      .catch(() => {
        setLoading(false);
        clearState();
        toast('something went wrong');
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="mt-4 flex w-full flex-col items-center justify-center py-[80px]">
        <div className='flex h-[400px] w-full flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center'>
          <div className="flex size-full flex-col items-center  justify-center bg-[#223740]/70 backdrop-brightness-50">
            <div className="font-semibold rounded-lg bg-[#48AFDE] px-[10px] py-[5px] text-center text-[20px] uppercase tracking-wide text-white">
              <a href="#contact" className="cursor-pointer">
                Contact Form
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="recoletaBold p-2 text-center text-5xl tracking-wide text-[#48AFDE]">
                Hire Me
              </h1>
            </div>
            <div className="mt-[10px] flex justify-center text-center md:w-[700px] ">
              <p className="text-cener text-xl font-[300] text-white">
                Are you looking for a responsible, professinal full-stack
                developer and designer for your website or your web application
                projects? Just leave me a message and tell me how I can help.
              </p>
            </div>
          </div>
        </div>

        <div className="px-[20px]"></div>
      </div>

      <div
        id="contact"
        className="m-auto mb-[-100px] mt-[10px] flex max-w-[1105px] flex-col justify-center gap-[60px] p-10 px-[30px] xl:flex-row"
      >
        <div
          className="relative hidden h-[550px] w-[1/2] rounded-xlbg-[#48AFDE] bg-cover bg-center md:block md:w-full lg:w-1/2 xl:w-1/2"
          style={{ backgroundImage: `url('/call1.png')` }}
        >
          <div className="absolute size-full bg-gradient-to-t from-[#223740] via-[#223740] opacity-70 shadow-inner"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px] p-6 text-white shadow-lg">
            <div className="mt-0 rounded-full bg-[#48AFDE] p-[15px] text-4xl text-white xl:mt-[150px]">
              <FaHeadphones />
            </div>
            <div className="font-semibold text-[24px]">Chat With Live!</div>
            <div>
              <p className="mt-5 border-2 border-[#48AEDD] rounded-[50px_20px] text-white  text-center text-xl font-[200]">
                {' '}
                Are you looking for a responsible, professinal full-stack
                developer and designer for your website or your web application
                projects? Just leave me a message and tell me how I can help.
              </p>
            </div>
            <div>
              <button className="transition-color mb-[30px] rounded-xl bg-[#48AFDE] px-4 py-2 text-white hover:bg-[#223740]">
                Let&apos;s chat
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="font-300 font-sans w-[100px] rounded-lg bg-red-500 py-px text-center text-[14px] uppercase tracking-wide text-white">
            Contact Us
          </div>
          <div className="">
            <p className="text-[30px] text-[#48AFDE]">
              {' '}
              Request A Call Back ! Feel Free To Reach & Contact Us.
            </p>
          </div>
          <form className="flex mb-16 flex-col gap-[20px]" onSubmit={handleSubmit}>
            <div
              className={`flex flex-col  gap-[20px] sm:flex-row ${hind.className}`}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name.."
                required
                onChange={handleChange}
                value={state.name}
                className="flex-1 rounded-md bg-gray-200 p-[12px] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email.."
                required
                onChange={handleChange}
                value={state.email}
                className="flex-1 rounded-md bg-gray-200 p-[12px] outline-none"
              />
            </div>
            <div
              className={`flex flex-col gap-[20px] sm:flex-row ${hind.className}`}
            >
              <input
                type="text"
                name="phoneNumber"
                placeholder="Your Number.."
                required
                onChange={handlePhoneChange}
                value={state.phoneNumber}
                className="flex-1 rounded-md bg-gray-200 p-[12px] outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject.."
                required
                onChange={handleChange}
                value={state.subject}
                className="flex-1 rounded-md bg-gray-200 p-[12px] outline-none"
              />
            </div>
            <div className={`${hind.className}`}>
              <textarea
                required
                name="message"
                placeholder="Your Message.."
                onChange={handleChange}
                value={state.message}
                className="h-[180px] w-full flex-1 rounded-md bg-gray-200 p-[12px] outline-none"
              />
            </div>
            <div>
              {loading && (
                <div className="mb-3 ml-5 size-6 animate-spin rounded-full border-t-2 border-solid border-blue-600 text-center"></div>
              )}
              <button className="font-semibold w-full rounded-lg bg-[#48AFDE] px-[30px] py-[12px] text-white transition-colors duration-300 hover:bg-[#223740] sm:w-auto">
                Send Us Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
