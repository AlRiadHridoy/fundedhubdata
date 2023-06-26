import { useState } from "react";
import { thumbHistory, tringle } from "../../ui/images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";

export default function Billing() {
  const [btnNum, setBtnNum] = useState(5);
  const [planSwap, setPlanSwap] = useState(true);

  const priceValues = {
    0: ["500", "500", "500", "1,000", "1,000", "1,000", "800", "500"],
    1: ["250", "250", "250", "500", "500", "500", "500", "250"],
    2: ["500", "500", "500", "1,000", "1,000", "1,000", "1,000", "500"],
    3: ["500", "500", "500", "1,000", "1,000", "1,000", "2,500", "1,250"],
    4: ["2,500", "2,500", "2,500", "5,000", "5,000", "5,000", "5,000", "2,500"],
    5: [
      "5,000",
      "5,000",
      "5,000",
      "10,000",
      "10,000",
      "10,000",
      "10,000",
      "5,000",
    ],
  };

  const refundable = ["1080", "57", "127", "227", "327", "527"];

  return (
    <main className="content-wrapper mt-28">
      <div className="inner-content px-6">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title">
            <svg
              className="breadcrumb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
            Billing
          </div>
        </div>
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-full px-[15px]">
                  <div className="card-wrap">
                    <div className="content">
                      <div className="tabs-wrap mb-[30px]">
                        <ul className="flex flex-wrap justify-center items-center gap-[20px] mb-[40px]">
                          {/* My plan */}
                          <li className="inline-block group">
                            <button
                              className={`px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.13)]  flex gap-2 ${
                                planSwap ? "bg-primary text-main-bg" : ""
                              }`}
                              onClick={() => setPlanSwap(!planSwap)}
                            >
                              <svg
                                className={`w-[20px] h-[24px] mr-[10pxg] ${
                                  planSwap ? "" : "fill-primary"
                                }`}
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
                              </svg>
                              My Plan
                            </button>
                          </li>
                          {/* Payment history */}
                          <li className="inline-block mr-[10px]">
                            <button
                              className={`flex gap-2 items-center px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.13)] ${
                                !planSwap ? "bg-primary text-main-bg" : ""
                              }`}
                              onClick={() => setPlanSwap(!planSwap)}
                            >
                              <svg
                                className={`w-[20px] h-[24px] mr-[10pxg] ${
                                  !planSwap ? "" : "fill-primary"
                                }`}
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
                              </svg>
                              Payment History
                            </button>
                          </li>
                        </ul>
                        <div className="w-fullrounded-[10px">
                          <div className="">
                            <div className="tab-content tab-space">
                              {/* Prices */}
                              <div
                                className={`prices relative  ${
                                  planSwap ? "" : "hidden"
                                }`}
                              >
                                <div className="wrapper">
                                  <div className="heading grid gap-4 justify-start items-center">
                                    <h2 className="text-3xl">
                                      Get Started Now
                                    </h2>
                                    <p className="max-w-[55rem]">
                                      Choose your favorite account size, start
                                      trading, earn profit-splits and scale.
                                    </p>
                                  </div>

                                  {/* Desktop version */}
                                  <div className="desktop-content relative z-10 hidden sm:grid xl:grid-cols-9 gap-5 w-full bg-black rounded-2xl py-8 px-6 mt-10">
                                    {/* Left side */}
                                    <div className="left col-span-4  grid items-center justify-start gap-4 rounded-xl  font-medium">
                                      <div className="heading grid gap-5">
                                        <div className="prices grid grid-cols-3 gap-4">
                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 1
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(1)}
                                            >
                                              $ 5,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 2
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(2)}
                                            >
                                              $ 10,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 3
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(3)}
                                            >
                                              $ 25,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 4
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(4)}
                                            >
                                              $ 50,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 5
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(5)}
                                            >
                                              $ 100,000
                                            </button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="refund flex w-full items-center">
                                        <span className="text-base text-bold font-codePro">
                                          Refundable fee:
                                        </span>
                                        <h4 className="text-[1.4rem] font-extrabold ml-4">
                                          $ {refundable[btnNum]}
                                        </h4>
                                      </div>

                                      <div className="btn flex justify-start">
                                        <a
                                          href="#"
                                          className="uppercase bg-primary/20 font-Montserrat text-xs font-bold py-4 md:py-3 px-9 md:px-7 md:bg-primary rounded-xl md:text-dark"
                                        >
                                          get started now
                                        </a>
                                      </div>
                                    </div>

                                    <div className="grid col-span-5 gap-3 rounded-xl w-full">
                                      <div className="  mt-12 item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Trading{" "}
                                          <span className="font-bold">
                                            {" "}
                                            period{" "}
                                          </span>
                                          :
                                        </span>
                                        <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_1'] before:-top-10 before:text-[0.9rem]">
                                          <span className="day-one">
                                            45 Days
                                          </span>
                                        </div>
                                        <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_2'] before:-top-10 before:text-[0.9rem]">
                                          <span className="day-two">
                                            45 Days
                                          </span>
                                        </div>
                                        <span className="col-span-2 relative before:absolute before:font-bold before:content-['Funded'] before:-top-10">
                                          Indefinite
                                        </span>
                                      </div>

                                      <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Minimum trading{" "}
                                          <span className="font-bold">
                                            {" "}
                                            days{" "}
                                          </span>
                                          :
                                        </span>
                                        <span className="col-span-2">
                                          10 Days
                                        </span>
                                        <span className="col-span-2">
                                          10 Days
                                        </span>
                                        <span className="col-span-2">-</span>
                                      </div>

                                      <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Max{" "}
                                          <span className="font-bold">
                                            {" "}
                                            Daily{" "}
                                          </span>{" "}
                                          Loss:
                                        </span>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][0]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][1]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][2]}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Max{" "}
                                          <span className="font-bold">
                                            {" "}
                                            Overall{" "}
                                          </span>{" "}
                                          Loss:
                                        </span>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][3]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][4]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][5]}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Profit{" "}
                                          <span className="font-bold">
                                            Target
                                          </span>
                                          :
                                        </span>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][6]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][7]}
                                          </span>
                                        </div>
                                        <span className="col-span-2">-</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Mobile version */}
                                  <div className="mobile-content relative sm:hidden flex flex-wrap gap-4 md:gap-12 justify-start items-center mt-10">
                                    <div className="top font-medium">
                                      <div className="heading grid gap-5">
                                        <div className="prices grid grid-cols-3 gap-4">
                                          <div className="price">
                                            <button
                                              className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                                                btnNum === 1
                                                  ? " bg-primary/30"
                                                  : "bg-primary/[14%]"
                                              }`}
                                              onClick={() => setBtnNum(1)}
                                            >
                                              $ 5,000
                                            </button>
                                          </div>
                                          <div className="price">
                                            <button
                                              className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                                                btnNum === 2
                                                  ? " bg-primary/30"
                                                  : "bg-primary/[14%]"
                                              }`}
                                              onClick={() => setBtnNum(2)}
                                            >
                                              $ 10,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                                                btnNum === 3
                                                  ? " bg-primary/30"
                                                  : "bg-primary/[14%]"
                                              }`}
                                              onClick={() => setBtnNum(3)}
                                            >
                                              $ 25,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                                                btnNum === 4
                                                  ? " bg-primary/30"
                                                  : "bg-primary/[14%]"
                                              }`}
                                              onClick={() => setBtnNum(4)}
                                            >
                                              $ 50,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[5.5rem] ex:w-[6rem] xs:w-[7rem] py-2.5 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap ${
                                                btnNum === 5
                                                  ? " bg-primary/30"
                                                  : "bg-primary/[14%]"
                                              }`}
                                              onClick={() => setBtnNum(5)}
                                            >
                                              $ 100,000
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <Swiper
                                      pagination={{
                                        dynamicBullets: true,
                                      }}
                                      effect={"coverflow"}
                                      grabCursor={true}
                                      centeredSlides={true}
                                      slidesPerView={"auto"}
                                      coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                      }}
                                      modules={[EffectCoverflow, Pagination]}
                                      className="evaluation-slider mt-6 flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
                                    >
                                      <SwiperSlide className="">
                                        <div className="phase1 pt-2 pb-6 item grid gap-6 border border-primary/30 rounded-lg">
                                          <div className="heading py-3 mt-2 bg-primary">
                                            <h3 className="px-5 text-main-bg font-codeProBold font-extrabold">
                                              Phase 1
                                            </h3>
                                          </div>
                                          <div className="items grid gap-4 px-4">
                                            <div className="item flex justify-between gap-6">
                                              <span>
                                                Trading
                                                <span className="font-bold">
                                                  {" "}
                                                  period
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                <span className="day-one">
                                                  45{" "}
                                                </span>{" "}
                                                Days
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Minimum trading
                                                <span className="font-bold">
                                                  {" "}
                                                  days{" "}
                                                </span>
                                                :
                                              </span>
                                              <span className="">10 Days</span>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Daily{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][0]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Overall{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][3]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Profit{" "}
                                                <span className="font-bold">
                                                  {" "}
                                                  Target{" "}
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][6]}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                      <SwiperSlide className="">
                                        <div className="phase2 pt-2 pb-6 item grid gap-6 border border-primary/30 rounded-lg">
                                          <div className="heading py-3 mt-2 bg-primary">
                                            <h3 className="px-5 text-main-bg font-codeProBold font-extrabold">
                                              Phase 2
                                            </h3>
                                          </div>

                                          <div className="items grid gap-4 px-4">
                                            <div className="item flex justify-between gap-6">
                                              <span>
                                                Trading
                                                <span className="font-bold">
                                                  {" "}
                                                  period{" "}
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                <span className="day-two">
                                                  45
                                                </span>{" "}
                                                Days
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Minimum trading
                                                <span className="font-bold">
                                                  {" "}
                                                  days{" "}
                                                </span>
                                                :
                                              </span>
                                              <span className="">10 Days</span>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Daily{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][1]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Overall{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][4]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Profit
                                                <span className="font-bold">
                                                  {" "}
                                                  target{" "}
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][7]}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                      <SwiperSlide className="">
                                        <div className="funded pt-2 pb-6 item grid gap-6 border border-primary/30 rounded-lg">
                                          <div className="heading py-3 mt-2 bg-primary">
                                            <h3 className="px-5 text-main-bg font-codeProBold font-extrabold">
                                              Funded
                                            </h3>
                                          </div>

                                          <div className="items grid gap-4 px-4">
                                            <div className="item flex justify-between gap-6">
                                              <span>
                                                Trading
                                                <span className="font-bold">
                                                  {" "}
                                                  period{" "}
                                                </span>
                                                :
                                              </span>

                                              <span>Indefinite</span>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Minimum trading
                                                <span className="font-bold">
                                                  {" "}
                                                  days{" "}
                                                </span>
                                                :
                                              </span>
                                              <span className="">-</span>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Daily{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][2]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Overall{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][5]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6">
                                              <span className="">
                                                Profit
                                                <span className="font-bold">
                                                  {" "}
                                                  Target{" "}
                                                </span>
                                                :
                                              </span>
                                              <span>-</span>
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                    </Swiper>

                                    {/* Refund */}
                                    <div className="refund flex w-full items-center mt-10 justify-center">
                                      <span className="text-[2rem] text-bold font-codePro">
                                        Refundable fee:
                                      </span>
                                      <h4 className="text-[1.4rem] font-extrabold ml-4">
                                        $ {refundable[btnNum]}
                                      </h4>
                                    </div>

                                    <div className="btn flex w-full justify-center">
                                      <a
                                        href="#"
                                        className="capitalize bg-primary/20 font-Montserrat text-xs font-bold py-4 md:py-3 px-9 md:px-7 md:bg-primary rounded-xl md:text-dark"
                                      >
                                        get started now
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                {/* triangle */}
                                <img
                                  className="triangle absolute -top-[25rem] -left-[70%]  w-[50rem] rotate-[80deg] opacity-[0.1]"
                                  src={tringle}
                                  alt="tringle"
                                />
                                <img
                                  className="triangle sm:hidden absolute -top-[30%] -left-[50%]  w-[50rem] rotate-[80deg] opacity-[0.2]"
                                  src={tringle}
                                  alt="tringle"
                                />
                                <img
                                  className="triangle absolute -bottom-[25rem] -left-[30rem]  w-[50rem] rotate-[80deg] opacity-[0.2]"
                                  src={tringle}
                                  alt="tringle"
                                />
                              </div>
                            </div>
                          </div>
                          {/* History */}
                          <div
                            className={`payment-method text-center py-[40px] ${
                              !planSwap ? "" : "hidden"
                            }`}
                          >
                            <div className="thumb inline-block mb-[24px]">
                              <img src={thumbHistory} alt="thumb" />
                            </div>
                            <p className="text-dark lg:text-[22px] text-[18px] font-semibold leading-[1.185] tracking-[-0.06px] dark:text-white/70">
                              No history found!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
