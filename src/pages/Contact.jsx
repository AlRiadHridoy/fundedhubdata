import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { tringle } from "../ui/images";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { AiOutlineClockCircle } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="contact relative pt-32 lg:pt-44">
        <div className="container z-10 relative">
          <div className="header grid gap-3">
            <h1 className="text-3xl xs:text-[2rem] xs:leading-[0.95] md:text-[2.2rem] font-codePro tracking-tighter">
              Contact Us
            </h1>
            <span className=" opacity-80 md:text-[1.1rem]">
              Questions? Doubts? Please contact us anytime and our team will
              take care of you!
            </span>
          </div>
          <div className="wrapper flex items-center  pt-12 pb-20  md:py-20 w-full">
            <div className="content grid md:grid-cols-3 gap-10 md:gap-6 w-full">
              {/* left */}
              <div className="left md:col-span-1 break-all ">
                <div className="items grid gap-5">
                  {/* Item */}
                  <div className="item flex justify-start items-center gap-4">
                    <div className="logo">
                      <AiOutlineClockCircle className=" text-primary text-[2rem]" />
                    </div>
                    {/* text */}
                    <div className="text">
                      <div className="date">
                        <span className="font-codePro text-base">
                          Monday – Friday
                        </span>
                      </div>
                      <div className="time">
                        <span className="font-codePro text-base">
                          0:00 AM - 24:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="item flex justify-start items-center gap-4">
                    <div className="logo">
                      <SlLocationPin className=" text-primary text-[2rem]" />
                    </div>
                    {/* text */}
                    <div className="text">
                      <div className="location">
                        7 Old Gloucester Street, London, <br />
                        United Kingdom, WC1N 3AX
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="item flex justify-start items-center gap-4">
                    <div className="logo">
                      <HiOutlineMail className=" text-primary text-[2rem]" />
                    </div>
                    {/* text */}
                    <div className="text">
                      <a
                        href="mailto: support@thefundedhub.com"
                        className="email"
                      >
                        support@thefundedhub.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="right md:col-span-2">
                {/* Form */}
                <form className="grid gap-6 sm:gap-8 md:gap-10 p-7 sm:p-8 relative z-10 rounded-xl bg-primary/[5%] border-primary">
                  <div className="head">
                    <h3 className="text-xl">Have questions?</h3>
                  </div>
                  <div className="inputs grid gap-6">
                    {/* name */}
                    <div className="name">
                      <input
                        name="name"
                        className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 max-w-[22rem]"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    {/* email */}
                    <div className="email">
                      <input
                        name="email"
                        className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 max-w-[22rem]"
                        type="email"
                        placeholder="Email"
                      />
                    </div>

                    {/* textarea */}
                    <div className="textarea">
                      <textarea
                        className="focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 p-4 rounded-xl transition-all duration-200 w-full min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem]"
                        name="comment"
                        id="comment"
                        placeholder="Comment"
                      ></textarea>
                    </div>

                    <div className="login-btn flex justify-center items-center">
                      <button className="py-1 px-16 border-[3px] border-all hover:border-all/50 transition-all duration-300 rounded-lg">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* triangle */}
        <img
          className="triangle absolute -left-[28%] bottom-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1] md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -bottom-[5%] -right-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.2]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute bottom-[90%] md:-bottom-[2%] -left-[20%]  w-[35rem] rotate-[-80deg] opacity-[0.07]  md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
      </section>
      <Footer />
    </>
  );
}
