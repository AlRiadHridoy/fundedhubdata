import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { author, mainLogo } from "../../ui/images";

export default function DashNav({ props }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  // distructure
  const [setSideOpenMbl, sideOpenMbl] = props;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setAccountOpen(false);
    setNotifOpen(false);
  }, [pathname]);

  const handleClick = (text) => {
    setNotifOpen(false);
    setAccountOpen(false);

    if (text === "notification") {
      setNotifOpen(!notifOpen);
    }
    if (text === "account") {
      setAccountOpen(!accountOpen);
    }
  };

  return (
    <header className="header-area px-[20px] z-[9999] fixed">
      <div className="header-left">
        <div className="logo text-center xl:!hidden !flex items-center justify-center relative z-[9999]">
          <Link to="/" className="cursor-pointer">
            <img className="max-w-[8.5rem]" src={mainLogo} />
          </Link>
        </div>
      </div>
      <div className="header-right">
        <Link
          to="billing"
          className="trading-btn group md:!flex !hidden text-main-bg"
        >
          <svg
            className="trading-icon fill-main-bg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"></path>
          </svg>
          Start Trading
        </Link>

        <div className="h-notification group">
          <div
            className="hn-icon group-hover:bg-primary"
            onClick={() => handleClick("notification")}
          >
            <svg
              className="icon fill-black group-hover:fill-white"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
            </svg>
          </div>

          <div
            className={`notification-open transition-all duration-500  ${
              notifOpen
                ? " scale-100 opacity-100 visible"
                : "scale-50 opacity-0 invisible"
            }`}
          >
            <h1 className=" font-bold pb-[15px] mb-[20px] border-b border-white ">
              Notifications
            </h1>
            <div className="content text-center">
              <p>No Notification Here</p>
            </div>
          </div>
        </div>
        <div className="author-wrapper relative lg:!flex !hidden">
          <div
            className="author-wrap cursor-pointer"
            onClick={() => handleClick("account")}
          >
            <div className="thumb">
              <img
                className="w-[40px] h-[40px] rounded-[5px]"
                src={author}
                alt="author"
              />
            </div>
            <div className="name ml-[15px]">
              d4t
              <svg
                className="inline-block w-[24px] h-[24px] fill-dark dark:fill-white"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
          </div>

          <div
            className={`user-info-open absolute right-0 top-[70px] md:w-[228px] w-[280px] py-[10px] px-[20px] bg-white rounded-[10px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] lg:origin-center origin-right dark:bg-dark  z-[99999] transition-all duration-500 ${
              accountOpen
                ? " scale-100 opacity-100 visible"
                : "scale-50 opacity-0 invisible"
            }`}
          >
            <ul>
              <li className="border-b border-[#DFE5F2]">
                <a
                  href="#"
                  className="block text-primary text-base leading-[1.5] tracking-[-0.05px] py-[10px] dark:group-hover:!fill-primary"
                >
                  fundedhub@mail.com
                </a>
              </li>
              <li className="border-b border-[#DFE5F2] group">
                <Link
                  to="profile"
                  className="flex items-center text-[#4A485F]  leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                >
                  <svg
                    className="w-[22px] h-[22px] mr-[10px] fill-[#4A485F] transition-all duration-350 ease-linear group-hover:!fill-primary dark:fill-white dark:group-hover:!fill-primary"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  </svg>
                  My Profile
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/login"
                  className="flex items-center text-[#4A485F] leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                >
                  <svg
                    className="w-[22px] h-[22px] mr-[10px] fill-[#4A485F] transition-all duration-350 ease-linear group-hover:!fill-primary dark:fill-white dark:group-hover:!fill-primary"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"></path>
                  </svg>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="mobile-bar group"
          onClick={() => setSideOpenMbl(!sideOpenMbl)}
        >
          <svg
            className="mobile-bar-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
