import { Link } from "react-router-dom";
import { footerBg, mainLogo, tringle } from "../ui/images";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer relative bg-main-bg pt-12 pb-5">
      <div className="container relative z-10">
        {/* Footer Desktop */}
        <div className="footer-desktop hidden sm:grid gap-10">
          <div className="top grid grid-cols-2 gap-6">
            <div className="left">
              <Link to="/" className="logo">
                <img className="max-w-[14rem]" src={mainLogo} alt="" />
              </Link>
            </div>

            {/* right */}
            <div className="right grid gap-6">
              <div className="item flex">
                <ul className="flex gap-4 flex-wrap">
                  <li>
                    <a href="#" className="text-sm underline">
                      Term and Condition
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm underline">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm underline">
                      Report a problem
                    </a>
                  </li>
                </ul>
              </div>

              <div className="item">
                <div className="info grid">
                  <span className="uppercase text-sm font-codePro">
                    THE FUNDED HUB LTD
                  </span>
                  <span className="text-sm">
                    27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="hidden sm:block bottom-content text-center">
              <p className="text-[0.65rem] font-normal">
                The Funded Hub is a brand owned by THE FUNDED HUB LTD (Company
                registration number: 14679272)
              </p>
              <p className="text-[0.65rem] font-normal mt-2">
                The Funded Hub is a brand owned by THE FUNDED HUB LTD. All
                information available on this site is intended solely for the
                study purposes related to trading on financial markets and does
                not serve in any way as a specific investment recommendation,
                business recommendation, investment opportunity analysis or
                similar general recommendation regarding the trading of
                investment instruments. Trading in financial markets is a
                high-risk activity and it is advised not to risk more than one
                can afford to lose! THE FUNDED HUB LTD does not provide any of
                the investment services listed in the Capital Market
                Undertakings Act No. 256/2004 Coll. The information on this site
                is not directed at residents in any country or jurisdiction
                where such distribution or use would be contrary to local laws
                or regulations. Either The Funded Hub and THE FUNDED HUB LTD is
                not a broker and do not accept deposits. The offered technical
                solution for the The Funded Hub MT5 platforms and data feed are
                powered by our institutional liquidity providers.
              </p>
            </div>
          </div>
        </div>
        {/* Footer Mobile */}
        <div className="footer-mobile grid gap-6 sm:hidden">
          <div className="flex justify-between gap-4">
            <div className="logo flex justify-center">
              <img
                className="max-w-[7rem] w-full"
                src={footerBg}
                alt="footer-logo"
              />
            </div>
            {/* logos */}
            <div className="logos flex justify-center items-center gap-4">
              <a className="logo h-8 w-8 rounded-full bg-white flex justify-center items-center">
                <FaFacebookF className="text-main-bg h-5 w-5 " />
              </a>
              <a className="logo h-8 w-8 rounded-full bg-white flex justify-center items-center">
                <BsInstagram className="text-main-bg h-5 w-5 " />
              </a>
              <a className="logo h-8 w-8 rounded-full bg-white flex justify-center items-center">
                <BsTwitter className="text-main-bg h-5 w-5 " />
              </a>
            </div>
          </div>
          {/* content */}
          <div className="content grid gap-8 mt-4">
            <div className="top">
              <div className="items gap-4">
                <div className="item grid justify-center items-center">
                  <ul className="flex flex-wrap gap-4 justify-center items-center">
                    <li>
                      <a href="#" className="text-sm">
                        Term and Condition
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm">
                        Report a problem
                      </a>
                    </li>
                  </ul>
                </div>
                {/* last item */}
                <div className="item mt-14 text-center col-span-full">
                  <div className="info grid">
                    <span className="uppercase text-[0.9rem] font-codePro">
                      THE FUNDED HUB LTD
                    </span>
                    <span className="text-[0.9rem] font-codePro">
                      27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                    </span>
                  </div>
                </div>
              </div>

              {/* bottom */}
            </div>
            <div className="bottom text-center">
              <p className="text-[0.65rem] font-normal">
                The Funded Hub is a brand owned by THE FUNDED HUB LTD (Company
                registration number: 14679272)
              </p>
              <p className="text-[0.65rem] font-normal mt-2">
                The Funded Hub is a brand owned by THE FUNDED HUB LTD. All
                information available on this site is intended solely for the
                study purposes related to trading on financial markets and does
                not serve in any way as a specific investment recommendation,
                business recommendation, investment opportunity analysis or
                similar general recommendation regarding the trading of
                investment instruments. Trading in financial markets is a
                high-risk activity and it is advised not to risk more than one
                can afford to lose! THE FUNDED HUB LTD does not provide any of
                the investment services listed in the Capital Market
                Undertakings Act No. 256/2004 Coll. The information on this site
                is not directed at residents in any country or jurisdiction
                where such distribution or use would be contrary to local laws
                or regulations. Either The Funded Hub and THE FUNDED HUB LTD is
                not a broker and do not accept deposits. The offered technical
                solution for the The Funded Hub MT5 platforms and data feed are
                powered by our institutional liquidity providers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle sm:hidden absolute -left-[58%] bottom-[30%]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle sm:hidden absolute -right-[78%] bottom-0  w-[50rem] rotate-[50deg] opacity-[0.2]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle sm:hidden absolute -right-[58%] -top-[15%] w-[50rem] rotate-[25deg] opacity-[0.15]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle sm:hidden absolute -left-[68%] -bottom-[10%]  w-[30rem] rotate-[50deg] opacity-[0.2]"
        src={tringle}
        alt="tringle"
      />
    </footer>
  );
}
