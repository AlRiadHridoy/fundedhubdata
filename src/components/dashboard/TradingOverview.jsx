import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  MergeType,
  VerticalAlign,
  iconBalance,
  iconEquity,
  iconGrid,
  lineChartDown,
  lineChartUp,
  tringle,
} from "../../ui/images";

export default function TradingOverview() {
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
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
            </svg>
            Trading Overview
          </div>
        </div>
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-8/12 lg:w-7/12 w-full px-[15px]">
              <div className="flex flex-wrap mx-[-15px] ">
                <div className="w-full px-[15px]">
                  <div className="card-wrap ">
                    <h3 className="card-title">Trading Objectives</h3>
                    <div className="content">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="w-full px-[15px] ">
                          <div className="bg-white p-5 rounded-[15px] dark:bg-toggle card-border">
                            <p className="text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[20px] dark:text-white inline-block">
                              <div className="mr-1 inline-block">Minimum Trading Days</div>
                              <AiOutlineQuestionCircle className=" inline-block" />
                            </p>
                            <p className="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                              <span>Minimum</span>
                              <span>10 days</span>
                            </p>
                            <p className="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                              <span>Current Result</span>
                              <span className="text-primary">2 days</span>
                            </p>
                            <p>
                              <span className="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">
                                Ongoing
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full px-[15px] ">
                          <div className="bg-white p-5 rounded-[15px] dark:bg-toggle card-border">
                            <p className="text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[20px] dark:text-white inline-block">
                              <div className="mr-1 inline-block">Daily Loss Limit</div>
                              <AiOutlineQuestionCircle className=" inline-block" />
                            </p>
                            <p className="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                              <span>Max. Loss</span>
                              <span>$1250</span>
                            </p>
                            <p className="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                              <span>Max. Loss recorded</span>
                              <span className="text-primary">$1000</span>
                            </p>
                            <p>
                              <span className="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">
                                Ongoing
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full px-[15px]">
                          <div className="bg-white p-5 rounded-[15px] dark:bg-toggle card-border">
                            <p className="text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[20px] dark:text-white inline-block ">
                              <div className="mr-1 inline-block">Monthy Loss Limit</div>
                              <AiOutlineQuestionCircle className=" inline-block" />
                            </p>
                            <p className="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                              <span>Max. Loss</span>
                              <span>$2750</span>
                            </p>
                            <p className="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                              <span>Max. Loss recorded</span>
                              <span className="text-primary">$1500</span>
                            </p>
                            <p>
                              <span className="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">
                                Ongoing
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full px-[15px] ">
                          <div className="p-5 rounded-2xl dark:bg-toggle card-border">
                            <div className="card-heading flex items-center mb-[20px]">
                              <div className="mr-1 inline-block">Account Growth</div>
                              <AiOutlineQuestionCircle className=" inline-block" />
                            </div>
                            <div className="content">
                              <p className="text-dark text-[28px] text-center leading-[1.5] font-medium tracking-[-0.05px] py-[30px] dark:text-white">
                                0%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-full px-[15px]">
                  <div className="card-wrap card-border">
                    <h3 className="card-title">Trading Growth Curve</h3>
                    <div className="content">
                      <div className="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] border-b border-[#000]/10 pb-[10px] mb-[10px] dark:text-white">
                        <p className="inline-flex items-center">
                          <svg
                            className="inline-block w-[20px] h-[20px] fill-dark mr-[5px] dark:fill-white"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                          </svg>
                          Today&apos;s Permitted Loss
                        </p>
                        <p className=" mt-2 text-[18px] font-bold py-[6px] px-[16px] rounded-[5px] text-dark/90 bg-primary">
                          $750
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <p className="inline-flex items-center">
                          <svg
                            className="inline-block w-[20px] h-[20px] fill-dark mr-[5px] dark:fill-white"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                          </svg>
                          Max Permitted Loss
                        </p>
                        <p className="mt-2 text-dark/90 text-[18px] font-bold py-[6px] px-[16px] rounded-[5px]  dark:bg-primary">
                          $1500
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[15px]">
                  <div className="card-wrap card-border">
                    <h3 className="card-title text-center">
                      Today&apos;s Permitted Loss Will Reset In
                    </h3>
                    <div className="content text-center py-[30px]">
                      <div className="lose-counter inline-block text-dark/90 bg-primary py-[5px] px-[15px] rounded-[5px]">
                        <span className="hour">-2</span>:
                        <span className="minute">56</span>:
                        <span className="second">29</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-4/12 lg:w-5/12 w-full px-[15px]">
              <div className="card-wrap card-border">
                <h3 className="card-title">Details Stats</h3>
                <div className="content text-center">
                  <div className="stats-list flex flex-wrap items-center justify-between mb-[15px] border-b border-dark/10 dark:border-white/10">
                    <div className="text">
                      <p className="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={iconEquity}
                          alt="icon"
                        />
                        Equity
                        <svg
                          className="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                      $58500.00
                    </div>
                  </div>
                  <div className="stats-list flex flex-wrap items-center justify-between mb-[15px] border-b border-dark/10 dark:border-white/10">
                    <div className="text">
                      <p className="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={iconBalance}
                          alt="icon"
                        />
                        Balance
                        <svg
                          className="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      $50000.00
                    </div>
                  </div>
                  <div className="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div className="text">
                      <p className="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={lineChartUp}
                          alt="icon"
                        />
                        Avg. Winning Trade
                        <svg
                          className="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      $70.00
                    </div>
                  </div>
                  <div className="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div className="text">
                      <p className="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={lineChartDown}
                          alt="icon"
                        />
                        Avg. Losing Trade
                        <svg
                          className="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      -$20.00
                    </div>
                  </div>
                  <div className="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div className="text">
                      <p className="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={lineChartDown}
                          alt="icon"
                        />
                        Avg. Losing Trade
                        <svg
                          className="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      105
                    </div>
                  </div>
                  <div className="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div className="text">
                      <p className="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={iconGrid}
                          alt="icon"
                        />
                        Avg. Losing Trade
                        <svg
                          className="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      Lots
                    </div>
                  </div>
                  <div className="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div className="text">
                      <p className="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={VerticalAlign}
                          alt="icon"
                        />
                        Average RRR
                        <svg
                          className="inline-block w-[17px] h-[17px] fill-dark ml-[5px]"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      0
                    </div>
                  </div>
                  <div className="stats-list flex flex-wrap items-center justify-between mb-[15px] ">
                    <div className="text">
                      <p className="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={MergeType}
                          alt="icon"
                        />
                        Win Rate
                        <svg
                          className="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      65%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="card-wrap card-border">
                <div className="card-heading flex items-center justify-between mb-[20px]">
                  <h3 className="card-title !mb-0">Trading History</h3>
                  <a
                    href="#"
                    className="bg-primary text-dark/90 py-[10px] px-[15px] font-semibold rounded-[5px]"
                  >
                    Download
                  </a>
                </div>
                <div className="content">
                  <div className="trading-wrap overflow-x-auto">
                    <div className="responsive-wrap min-w-[1200px]">
                      <div className="heading grid grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                        <p className=" text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                          SN
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                          Open Time
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                          Open Price
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                          Close Time
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                          Close Price
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                          lots
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                          Profit
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                          Commission
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                          Swap
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                          Symbol
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                          Type
                        </p>
                        <p className="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                          Details
                        </p>
                      </div>
                      <div className="content grid items-center grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          1
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          2022.01.01 08:01:47
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          47199.83
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          2022.01.01 08:10:02
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          47254.29
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          1
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          $54.46
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          -$236.00
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          0
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          BTCUSD
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          Buy
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          <a
                            href="#"
                            className="inline-block px-[10px] py-[5px] text-dark border border-dark rounded-[5px] transition-all duration-300 ease-linear hover:bg-primary hover:border-primary hover:text-main-bg dark:bg-primary "
                          >
                            View
                          </a>
                        </p>
                      </div>
                      <div className="content grid items-center grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          2
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          2022.01.01 08:01:47
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          47199.83
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          2022.01.01 08:10:02
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          47254.29
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          1
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          $54.46
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          -$236.00
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          0
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          BTCUSD
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          Buy
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          <a
                            href="#"
                            className="inline-block px-[10px] py-[5px] text-dark border border-dark rounded-[5px] transition-all duration-300 ease-linear hover:bg-primary hover:border-primary hover:text-main-bg  dark:bg-primary"
                          >
                            View
                          </a>
                        </p>
                      </div>
                      <div className="content grid items-center grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          3
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          2022.01.01 08:01:47
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          47199.83
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          2022.01.01 08:10:02
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          47254.29
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          1
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          $54.46
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          -$236.00
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          0
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          BTCUSD
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                          Buy
                        </p>
                        <p className="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] ">
                          <a
                            href="#"
                            className="inline-block px-[10px] py-[5px] text-dark border border-dark rounded-[5px] transition-all duration-300 ease-linear hover:bg-primary hover:border-primary hover:text-main-bg bg-primary"
                          >
                            View
                          </a>
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
        className="triangle absolute -bottom-[10%] -right-[0%]  w-[58rem] rotate-[50deg] opacity-[0.16]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle absolute -top-[20%] -left-[20%]  w-[70rem] rotate-[62deg] opacity-[0.17]"
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
    </main>
  );
}
