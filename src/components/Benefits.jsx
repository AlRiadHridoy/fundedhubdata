import { arrow, shadow, tringle } from "../ui/images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Benefits() {
  return (
    <section className="benefits relative md:max-w-[py-[2.5rem] md:py-[3.5rem] md:m-auto overflow-s">
      <div className="container">
        <div className="wrapper grid gap-12">
          <div className="heading grid gap-4 z-10 relative">
            <h2 className="capitalize font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
              The Funded Hub{" "}
              <span className="text-primary font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                Benefits
              </span>
            </h2>

            <div className="paras">
              <p>
                We are partnering up directly with liquidity providers to offer
                you unbeatable trading conditions. Our accounts will provide you
                with an excellent environment, with spread starting from 0.0
                pips!
              </p>
            </div>
          </div>

          <div className="Contents w-full grid mt-6">
            {/* Desktop Version */}
            <div className="w-full max-w-screen hidden lg:block relative">
              <div className="items grid grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
                {/* Item */}
                <div className="item py-5 px-4 bg-main-bg/90 rounded-xl relative z-10 h-full max-w-[16rem]">
                  <div className="num absolute -left-4 -top-4 w-10 h-10 bg-[#7b6e9f] text-main-bg rounded-full font-Montserrat font-black text-2xl flex justify-center items-center">
                    1
                  </div>
                  <div className="head mt-6 text-[1.1rem]">
                    <h5>
                      Trade your{" "}
                      <div className="font-codeProBold inline-block">style</div>
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Other firms want you to lose, well we want our traders to
                    achieve success! Trade with the peace of mind you deserve
                    just following few simple rules
                  </p>
                </div>

                {/* Item */}
                <div className="item py-5 px-4 bg-main-bg/90 rounded-xl relative z-10 h-full max-w-[16rem]">
                  <div className="num absolute -left-4 -top-4 w-10 h-10 bg-[#7b6e9f] text-main-bg rounded-full font-Montserrat font-black text-2xl flex justify-center items-center">
                    2
                  </div>
                  <div className="head mt-6 text-[1.1rem]">
                    <h5>
                      {" "}
                      <div className="font-codeProBold inline-block">
                        24/5
                      </div>{" "}
                      dedicated support
                    </h5>
                  </div>

                  {/* para */}
                  <p className="text-sm mt-3">
                    Any question or concern? We got you! Our team of traders and
                    engineer is available 24/5 to help you with anything you
                    might need
                  </p>
                </div>

                {/* Item */}
                <div className="item py-5 px-4 bg-main-bg/90 rounded-xl relative z-10 h-full max-w-[16rem]">
                  <div className="num absolute -left-4 -top-4 w-10 h-10 bg-[#7b6e9f] text-main-bg rounded-full font-Montserrat font-black text-2xl flex justify-center items-center">
                    3
                  </div>
                  <div className="head mt-6 text-[1.1rem]">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Bi-weekly
                      </div>{" "}
                      Payouts
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    No more need to wait a month to withdraw your profits;
                    you&apos;ll get paid every 2 weeks from the first trade
                    you&apos;ll place on your funded account
                  </p>
                </div>

                {/* Item */}
                <div className="item py-5 px-4 bg-main-bg/90 rounded-xl relative z-10 h-full max-w-[16rem]">
                  <div className="num absolute -left-4 -top-4 w-10 h-10 bg-[#7b6e9f] text-main-bg rounded-full font-Montserrat font-black text-2xl flex justify-center items-center">
                    4
                  </div>
                  <div className="head mt-6 text-[1.1rem]">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Metatrader
                      </div>{" "}
                      5
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Trade on the best trading platform. MT5 has more Charting
                    tools; Technical indicators and more timeframes than MT4.
                  </p>
                </div>
              </div>

              {/* triangle */}
              <img
                className="triangle absolute -top-[200%] -left-[18%]  w-[70rem] rotate-[80deg] opacity-[0.1]"
                src={tringle}
                alt="tringle"
              />
              {/* triangle */}
              <img
                className="triangle absolute -top-[100%] -right-[20%]  w-[50rem] rotate-[20deg] opacity-[0.05]"
                src={tringle}
                alt="tringle"
              />
            </div>

            {/* Mobile version */}
            <div className="lg:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center mt-10 overflow-hidden -mx-[1.5rem] p-[1.5rem] pb-16">
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
                className="flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
              >
                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90 rounded-xl relative z-10 h-full max-w-[16rem] border-all/20 border">
                  <div className="num absolute -left-4 -top-4 w-10 h-10 bg-[#7b6e9f] text-main-bg rounded-full font-Montserrat font-black text-2xl flex justify-center items-center">
                    1
                  </div>
                  <div className="head mt-6 text-[1.1rem]">
                    <h5>
                      Trade your{" "}
                      <div className="font-codeProBold inline-block">style</div>
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Other firms want you to lose, well we want our traders to
                    achieve success! Trade with the peace of mind you deserve
                    just following few simple rules
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90 rounded-xl relative z-10 h-full max-w-[16rem] border-all/20 border">
                  <div className="num absolute -left-4 -top-4 w-10 h-10 bg-[#7b6e9f] text-main-bg rounded-full font-Montserrat font-black text-2xl flex justify-center items-center">
                    2
                  </div>
                  <div className="head mt-6 text-[1.1rem]">
                    <h5>
                      {" "}
                      <div className="font-codeProBold inline-block">
                        24/5
                      </div>{" "}
                      dedicated support
                    </h5>
                  </div>

                  {/* para */}
                  <p className="text-sm mt-3">
                    Any question or concern? We got you! Our team of traders and
                    engineer is available 24/5 to help you with anything you
                    might need
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90 rounded-xl relative z-10 h-full max-w-[16rem] border-all/20 border">
                  <div className="num absolute -left-4 -top-4 w-10 h-10 bg-[#7b6e9f] text-main-bg rounded-full font-Montserrat font-black text-2xl flex justify-center items-center">
                    3
                  </div>
                  <div className="head mt-6 text-[1.1rem]">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Bi-weekly
                      </div>{" "}
                      Payouts
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    No more need to wait a month to withdraw your profits;
                    you&apos;ll get paid every 2 weeks from the first trade
                    you&apos;ll place on your funded account
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90 rounded-xl relative z-10 h-full max-w-[16rem] border-all/20 border">
                  <div className="num absolute -left-4 -top-4 w-10 h-10 bg-[#7b6e9f] text-main-bg rounded-full font-Montserrat font-black text-2xl flex justify-center items-center">
                    4
                  </div>
                  <div className="head mt-6 text-[1.1rem]">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Metatrader
                      </div>{" "}
                      5
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Trade on the best trading platform. MT5 has more Charting
                    tools; Technical indicators and more timeframes than MT4.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Content Top */}
            <div className="content-top relative z-10">
              {/* mobile */}
              <img
                className="triangle  absolute top-0 -left-[50%]  w-[70rem] rotate-[70deg] opacity-[0.06]"
                src={tringle}
                alt="tringle"
              />
              {/* mobile */}
              <img
                className="triangle  absolute hidden md:block -top-[100%] -right-[10%]  w-[70rem] rotate-[60deg] opacity-[0.05]"
                src={tringle}
                alt="tringle"
              />
              {/* mobile */}
              <img
                className="triangle absolute -top-[50%] -right-[50%]  w-[65rem] rotate-[70deg] opacity-[0.1]"
                src={tringle}
                alt="tringle"
              />
            </div>

            {/* Content Middle */}
            <div className="content-bottom relative z-10 grid md:grid-cols-2 justify-center items-center gap-8 mt-6 md:mt-[6rem]">
              {/* left */}
              <div className="left relative">
                <h2 className="capitalize font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                  <span className="text-primary font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                    Why
                  </span>{" "}
                  trade with us
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-5">
                  <p>
                    At TheFundedHub we care about your success and provide you
                    with state-of-the-art technologies, a great trading
                    environment and generous funding.
                  </p>

                  <p>
                    Achieve a profit of 10% or more within a 4 month period and
                    if at least 2 of those 4 months were profitable, we will
                    increase your account size by 25% of the original account
                    size.
                  </p>
                </div>

                {/* Shadow */}
                <img
                  className="shadow absolute left-0 right-0 w-[200%] -bottom-12 h-16 z-10 opacity-60"
                  src={shadow}
                  alt=""
                />
              </div>

              {/* Right */}
              <div className="right relative z-10 text-lg font-black md:flex justify-start items-center gap-5">
                <div className="items grid sm:grid-cols-2 justify-center items-center gap-4 xs:gap-5 font-codeProLight bef">
                  {/* Item */}
                  <div className="item bg-main-bg/80 text-[0.9rem] md:text-base text-center flex justify-center px-3 exs:px-4 xs:px-5 py-2 exs:py-2.5 xs:py-3 sm:py-4 rounded-2xl border border-all/20 md:border-none">
                    You can trade Overweek and Overnight
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/80 text-[0.9rem] md:text-base text-center flex justify-center px-3 exs:px-4 xs:px-5 py-2 exs:py-2.5 xs:py-3 sm:py-4 rounded-2xl border border-all/20 md:border-none">
                    You can trade all the news without restrictions
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/80 text-[0.9rem] md:text-base text-center flex justify-center px-3 exs:px-4 xs:px-5 py-2 exs:py-2.5 xs:py-3 sm:py-4 rounded-2xl border border-all/20 md:border-none">
                    You can use your Expert Advisor
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/80 text-[0.9rem] md:text-base text-center flex justify-center px-3 exs:px-4 xs:px-5 py-2 exs:py-2.5 xs:py-3 sm:py-4 rounded-2xl border border-all/20 md:border-none">
                    Forex, Crypto, Commodities & Indexes
                  </div>
                </div>

                {/* Shadow */}
                <img
                  className="shadow absolute  w-[200rem] -bottom-20 h-16 z-10 opacity-[0.65]"
                  src={shadow}
                  alt=""
                />
              </div>
            </div>
            {/* Content bottom */}
            <div className="content-bottom relative z-10 grid gap-8 mt-6 md:mt-[6rem]">
              {/* top */}
              <div className="top">
                <h2 className="capitalize font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                  Get your
                  <span className="text-primary font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                    {" "}
                    Salary
                  </span>
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-5 max-w-[50rem]">
                  <p>
                    At TheFundedHub we care about your success and provide you
                    with state-of-the-art technologies, a great trading
                    environment and generous funding.
                  </p>
                </div>
              </div>

              {/* bottom */}
              <div className="bottom relative z-10 text-lg font-black md:flex justify-start items-center gap-5">
                <div className="items grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-10 justify-center items-center bg-main-bg/80 text-[0.9rem] text-center rounded-2xl py-6  px-6 sm:px-9 md:px-12 border border-all/20 md:border-none">
                  {/* item */}
                  <div className="item flex flex-col gap-4 justify-center items-center text-base sm:text-lg">
                    <h5>$5,000</h5>
                    <img
                      className="flex justify-center items-center"
                      src={arrow}
                      alt="arrow"
                    />
                    <h5>$100.00 / Month</h5>
                  </div>
                  {/* item */}
                  <div className="item flex flex-col gap-4 justify-center items-center text-base sm:text-lg">
                    <h5>$10,000</h5>
                    <img
                      className="flex justify-center items-center"
                      src={arrow}
                      alt="arrow"
                    />
                    <h5>$100.00 / Month</h5>
                  </div>
                  {/* item */}
                  <div className="item flex flex-col gap-4 justify-center items-center text-base sm:text-lg">
                    <h5>$25,000</h5>
                    <img
                      className="flex justify-center items-center"
                      src={arrow}
                      alt="arrow"
                    />
                    <h5>$250.00 / Month</h5>
                  </div>
                  {/* item */}
                  <div className="item flex flex-col gap-4 justify-center items-center text-base sm:text-lg">
                    <h5>$50,000</h5>
                    <img
                      className="flex justify-center items-center"
                      src={arrow}
                      alt="arrow"
                    />
                    <h5>$500.00 / Month</h5>
                  </div>
                  {/* item */}
                  <div className="item flex flex-col gap-4 justify-center items-center text-base sm:text-lg">
                    <h5>$100,000</h5>
                    <img
                      className="flex justify-center items-center"
                      src={arrow}
                      alt="arrow"
                    />
                    <h5>$1000.00 / Month</h5>
                  </div>
                </div>

                {/* Shadow */}
                <img
                  className="shadow absolute -left-[20%]  w-[50rem] -bottom-20 h-16 z-10 opacity-[0.45]"
                  src={shadow}
                  alt=""
                />
                {/* Shadow */}
                <img
                  className="shadow absolute -right-[20%]  w-[50rem] -bottom-20 h-16 z-10 opacity-[0.45]"
                  src={shadow}
                  alt=""
                />
              </div>

              <div className="right hidden relative z-10 text-lg font-black justify-start items-center gap-5">
                <div className="items grid xs:grid-cols-2 justify-center items-center gap-3 xs:gap-5 font-codeProLight">
                  {/* Item */}
                  <div className="item bg-main-bg/80 text-[0.9rem] md:text-base text-center flex justify-center px-3 exs:px-4 xs:px-5 py-2 exs:py-2.5 xs:py-3 sm:py-4 rounded-2xl border border-all/20 md:border-none">
                    You can trade Overweek and Overnight
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/80 text-[0.9rem] md:text-base text-center flex justify-center px-3 exs:px-4 xs:px-5 py-2 exs:py-2.5 xs:py-3 sm:py-4 rounded-2xl border border-all/20 md:border-none">
                    You can trade all the news without restrictions
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/80 text-[0.9rem] md:text-base text-center flex justify-center px-3 exs:px-4 xs:px-5 py-2 exs:py-2.5 xs:py-3 sm:py-4 rounded-2xl border border-all/20 md:border-none">
                    You can use your Expert Advisor
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/80 text-[0.9rem] md:text-base text-center flex justify-center px-3 exs:px-4 xs:px-5 py-2 exs:py-2.5 xs:py-3 sm:py-4 rounded-2xl border border-all/20 md:border-none">
                    Forex, Crypto, Commodities & Indexes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -top-[10rem] -left-[18%]  w-[40rem] rotate-[80deg] opacity-[0.1]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute -bottom-[25rem] -right-[20rem]  w-[75rem] rotate-[80deg] opacity-[0.12]"
        src={tringle}
        alt="tringle"
      />

      {/* mobile */}
      <img
        className="triangle md:hidden absolute top-0 -right-[50%]  w-[35rem] rotate-[45deg] opacity-[0.25]"
        src={tringle}
        alt="tringle"
      />
      {/* mobile */}
      <img
        className="triangle md:hidden absolute bottom-[30%] -left-[40%]  w-[35rem] rotate-[45deg] opacity-[0.15]"
        src={tringle}
        alt="tringle"
      />
      {/* mobile */}
      <img
        className="triangle md:hidden absolute bottom-[15%] -right-[55%] w-[35rem] rotate-[50deg] opacity-[0.15]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
