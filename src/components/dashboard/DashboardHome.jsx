import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";

import { tringle } from "../../ui/images";

// chart
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashboardHome() {
  const [passVisible, setPassVisible] = useState(false);

  const [disWith, setDisWith] = useState({
    top: 30,
    right: 30,
    left: -20,
    bottom: -5,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (screen.width > 560) {
      setDisWith({
        top: 30,
        right: 30,
        left: 15,
        bottom: 10,
      });
    }
  }, []);

  const userinfo = {
    login: "7382691",
    password: "HDJNSJ39",
    server: "CBT-Limited",
    balance: "5000.00",
    plan: "5k",
  };

  const copyFunc = (el, text) => {
    el.target.classList.add("copied");
    setTimeout(() => {
      el.target.classList.remove("copied");
    }, 450);
    navigator.clipboard.writeText(text);
  };

  const data = [
    {
      name: "1",
      pv: 1.5,
      amt: 2,
    },
    {
      name: "2",
      pv: 3,
      amt: 2,
    },
    {
      name: "3",
      pv: 5,
      amt: 2,
    },
    {
      name: "4",
      pv: 7,
      amt: 2,
    },
    {
      name: "5",
      pv: 1,
      amt: 2,
    },
    {
      name: "6",
      pv: 9,
      amt: 2,
    },
    {
      name: "7",
      pv: 4,
      amt: 2,
    },
    {
      name: "8",
      pv: 8,
      amt: 2,
    },
    {
      name: "9",
      pv: 6,
      amt: 2,
    },
    {
      name: "10",
      pv: 8,
      amt: 2,
    },
  ];
  return (
    <section className="dashboard relative mt-28">
      <main className="content-wrapper">
        <div className="inner-content px-6">
          <div className="breadcrumb-wrap">
            <div className="breadcrumb-title">
              <svg
                className="breadcrumb-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
              </svg>
              Dashboard
            </div>
          </div>
          <div className="dashboard-wrapper">
            <div className="flex flex-wrap">
              <div className="w-full ">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  <div className="w-full">
                    <div className="dashboard-card card-border">
                      <div className="d-icon bg-primary">
                        <svg
                          className="fill-main-bg h- w-6"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <h2>$8500.00</h2>
                        <p>profit/loss</p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full ">
                    <div className="dashboard-card card-border">
                      <div className="d-icon bg-primary">
                        <svg
                          className="fill-main-bg h- w-6"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <h2>$0.00</h2>
                        <p>drawdown</p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full">
                    <div className="dashboard-card card-border">
                      <div className="d-icon bg-primary">
                        <svg
                          className="fill-main-bg h- w-6"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <h2>11 Days</h2>
                        <p>trading days</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="card-wrap card-border">
                      <h3 className="card-title">Account Details</h3>
                      <div className="content">
                        <div className="account-info">
                          <div className="account-info-top grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>Login</h4>
                                <FaCopy
                                  className="text-primary/60 cursor-pointer"
                                  onClick={(el) => {
                                    copyFunc(el, userinfo.login);
                                  }}
                                />
                              </div>
                              <p>{userinfo.login}</p>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>password</h4>
                                <FaCopy
                                  className="text-primary/60 cursor-pointer"
                                  onClick={(el) => {
                                    copyFunc(el, userinfo.password);
                                  }}
                                />
                              </div>
                              <div className="pass-show flex">
                                {passVisible ? (
                                  <p>{userinfo.password}</p>
                                ) : (
                                  <p>********</p>
                                )}

                                <div className="pass-icon ml-[20px]">
                                  <AiFillEye
                                    onClick={() => setPassVisible(false)}
                                    className={`icon w-[14px] h-[14px] dark:fill-white cursor-pointer ${
                                      passVisible ? "" : "hidden"
                                    }`}
                                  />
                                  <AiFillEyeInvisible
                                    onClick={() => setPassVisible(true)}
                                    className={`icon w-[14px] h-[14px] dark:fill-white cursor-pointer ${
                                      !passVisible ? "" : "hidden"
                                    }`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>Server</h4>
                                <FaCopy
                                  className="text-primary/60 cursor-pointer"
                                  onClick={(el) => {
                                    copyFunc(el, userinfo.server);
                                  }}
                                />
                              </div>
                              <p>{userinfo.server}</p>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>Balance</h4>
                                <FaCopy
                                  className="text-primary/60 cursor-pointer"
                                  onClick={(el) => {
                                    copyFunc(el, userinfo.balance);
                                  }}
                                />
                              </div>
                              <p>${userinfo.balance}</p>
                            </div>
                            <div className="info-item">
                              <div className="flex gap-3">
                                <h4>Funded Plan</h4>
                                <div
                                  onClick={(el) => {
                                    copyFunc(el, userinfo.plan);
                                  }}
                                  className="copy relative before:absolute before:content-['copied'] before:top-[-180%] before:left-[-480%] sm:before:left-[120%] before:bg-main-bg before:text-primary/90 before:z-20 before:text-[0.9rem] before:whitespace-nowrap before:px-3 before:py-2 before:rounded-lg before:transition-all before:duration-200 before:opacity-0 before:invisible before:border before:border-primary/60 transition-all duration-150"
                                >
                                  <FaCopy className="text-primary/60 cursor-pointer" />
                                </div>
                              </div>
                              <p>Express - {userinfo.plan}</p>
                            </div>
                          </div>
                          <div className="account-info-bottom mt-[40px]">
                            <h4>Trading Cycle Details</h4>
                            <div className="flex md:flex-nowrap flex-wrap items-center md:gap-[40px] gap-[20px]">
                              <p>
                                <span className="text-[16px] font-bold">
                                  Start Date:
                                </span>{" "}
                                Sep 25, 2022
                              </p>
                              <p>
                                <span className="text-[16px] font-bold">
                                  End Date:
                                </span>{" "}
                                Oct 25, 2022
                              </p>
                              <Link
                                to="trading-overview"
                                className="account-info-btn group text-main-bg"
                              >
                                <svg
                                  className="icon w-[20px] h-[20px] mr-[5px] dark:group-hover:fill-dark"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path>
                                </svg>
                                Trading Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mx-[-15px] relative">
                  <div className="w-full px-[15px] z-10 relative">
                    <div className="card-wrap">
                      <h3 className="card-title z-10 relative">
                        Trading Growth Curve
                      </h3>
                      <div className="content">
                        {/* Chart section */}
                        <div className="chart relative z-10 grid gap-4 py-2 px-5 border border-primary/60 rounded-xl">
                          <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                            <h4>Chart:</h4>
                          </div>

                          {/* chart */}
                          <div className="bg-primary/10 rounded-lg mb-2 h-[300px] sm:h-[250px] md:h-[320px]">
                            <ResponsiveContainer height="100%">
                              <LineChart data={data} margin={disWith}>
                                <XAxis className="theXaxis" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line dataKey="pv" stroke="#C7B3FC" />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* Triangles */}
                        {/* triangle */}
                        <img
                          className="triangle absolute -bottom-[20%] -right-[10%]  w-[50rem] rotate-[80deg] opacity-[0.09]"
                          src={tringle}
                          alt="tringle"
                        />
                        {/* triangle */}
                        <img
                          className="triangle absolute bottom-[20rem] -left-[10%]  w-[50rem] rotate-[80deg] opacity-[0.09]"
                          src={tringle}
                          alt="tringle"
                        />
                        {/* triangle */}
                        <img
                          className="triangle absolute -top-[10%] -right-[20%]  w-[70rem] rotate-[80deg] opacity-[0.07]"
                          src={tringle}
                          alt="tringle"
                        />
                        {/* triangle */}
                        <img
                          className="triangle absolute -bottom-[5%] -right-[20%]  w-[50rem] rotate-[80deg] opacity-[0.05]"
                          src={tringle}
                          alt="tringle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* triangle */}
      <img
        className="triangle absolute -top-[50%] -left-[20%]  w-[60rem] rotate-[30deg] opacity-[0.19]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute -top-[20%] -right-[3%]  w-[50rem] rotate-[90deg] opacity-[0.12]"
        src={tringle}
        alt="tringle"
      />
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
        className="triangle absolute -top-[10%] -right-[20%]  w-[70rem] rotate-[80deg] opacity-[0.13]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute -bottom-[5%] -right-[20%]  w-[50rem] rotate-[80deg] opacity-[0.17]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
