import React from "react";
import { thumbHistory, tringle } from "../../ui/images";

import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function TopUpReset() {
  return (
    <main className="content-wrapper mt-28">
      <div className="inner-content px-6">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title ">
            <svg
              className="breadcrumb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path>
            </svg>
            Top Up & Reset
          </div>
        </div>
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="flex flex-wrap justify-center mx-[-15px]">
                <div className="2xl:w-4/12 xl:w-5/12 lg:w-5/12 md:w-6/12 px-[15px] mb-[30px]">
                  <div className="flex flex-col justify-between h-full md:p-[30px] p-[20px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden dark:bg-dark card-border">
                    <div className="content">
                      <h3 className="text-[18px] text-dark font-semibold leading-[1.167] tracking-[-0.06px] mb-[20px] dark:text-white">
                        Top Up
                      </h3>
                      <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] dark:text-white/70">
                        Traders will get an opportunity to bring back their
                        account balance to the initial amount. Applicable if you
                        have not violated any of the drawdown rules. Once you
                        top up your account, your trading cycle will also reset.
                        To know more{" "}
                        <a href="#" className="underline">
                          click
                        </a>
                      </p>
                      <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px]">
                        *** You must close the running trades if you have any***
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex items-center justify-center bg-primary text-dark/90 xl:py-[10px] py-[15px] xl:px-[50px] px-[30px] font-semibold rounded-[5px] xl:min-h-[60px] capitalize mt-[40px]"
                    >
                      Top Up Request
                    </a>
                  </div>
                </div>
                <div className="2xl:w-4/12 xl:w-5/12 lg:w-5/12 md:w-6/12 px-[15px] mb-[30px]">
                  <div className="flex flex-col justify-between h-full md:p-[30px] p-[20px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden dark:bg-dark card-border">
                    <div className="content">
                      <h3 className="text-[18px] text-dark font-semibold leading-[1.167] tracking-[-0.06px] mb-[20px] dark:text-white">
                        Reset
                      </h3>
                      <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] dark:text-white/70">
                        If a trader violates the rules his/her account will be
                        suspended. Prop dashboard will give him/her the
                        opportunity to continue with the program at a discounted
                        price/cost. This re-registration cost is also known as
                        the &quot;Reset&quot; fee since the trader will be
                        provided with a new account and his trading cycle will
                        be reset. To know more{" "}
                        <a href="#" className="underline">
                          click here
                        </a>
                      </p>
                      <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px] dark:text-white/70">
                        *** You must close the running trades if you have any***
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex items-center justify-center bg-dark text-white xl:py-[10px] py-[15px] xl:px-[50px] px-[30px] font-semibold rounded-[5px] xl:min-h-[60px] capitalize mt-[40px] dark:bg-white dark:text-dark"
                    >
                      Reset Request
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="card-wrap">
                <div className="card-heading flex items-center justify-between mb-[20px]">
                  <h3 className="card-title !mb-0">Top Up & Reset History</h3>
                </div>
                <div className="content">
                  <div className="withdraw-history text-center py-[40px]">
                    <div className="thumb inline-block mb-[24px]">
                      <img src={thumbHistory} alt="thumb" />
                    </div>
                    <p className="text-dark lg:text-[22px] text-[18px] font-semibold leading-[1.185] tracking-[-0.06px]">
                      No history found!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* triangle */}
      <img
        className="triangle absolute -bottom-[20%] -left-[10%]  w-[50rem] rotate-[80deg] opacity-[0.19]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute bottom-[20rem] -left-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.09]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute bottom-[20%] -right-[0%]  w-[58rem] rotate-[53deg] opacity-[0.05]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute -top-[20%] -left-[20%]  w-[60rem] rotate-[62deg] opacity-[0.14]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute -top-[30%] -right-[20%]  w-[70rem] rotate-[80deg] opacity-[0.13]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute -bottom-[5%] -right-[50%]  w-[80rem] rotate-[60deg] opacity-[0.1]"
        src={tringle}
        alt="tringle"
      />
    </main>
  );
}
