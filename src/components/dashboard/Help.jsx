import { useState } from "react";
import HelpCollaps from "./HelpCollaps";

export default function Help({ props }) {
  console.log(props);
  const [swap, setSwap] = useState(true);
  const paras = [
    [
      "DOES UWM OPERATE 24/7?",
      "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
      "HOW I CAN EDIT SMART OBJECTS ?",
      "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
      "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
    ],
    [
      "DOES UWM OPERATE 24/7?",
      "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
      "HOW I CAN EDIT SMART OBJECTS ?",
      "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
      "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
    ],
  ];
  return (
    <main className="content-wrapper">
      <div className="help-header py-[90px] px-[15px] xl:ml-[-20px] text-center relative">
        <h2 className="text-white text-[26px] font-bold mb-[15px]">
          <svg
            className="inline-block"
            width="32"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.032.333H4.254A3.396 3.396 0 00.857 3.73v23.778a3.396 3.396 0 003.397 3.397h6.794L16.143 36l5.095-5.095h6.794a3.407 3.407 0 003.397-3.397V3.73A3.407 3.407 0 0028.032.333zm-10.19 27.175h-3.397V24.11h3.396v3.397zm1.987-11.6l1.528-1.563a5.405 5.405 0 001.58-3.821 6.792 6.792 0 00-6.794-6.794 6.792 6.792 0 00-6.794 6.794h3.397a3.407 3.407 0 013.397-3.397 3.407 3.407 0 013.397 3.397 3.32 3.32 0 01-1.002 2.395l-2.106 2.14a6.836 6.836 0 00-1.987 4.806v.85h3.396c0-2.548.765-3.567 1.988-4.807z"
              fill="#fff"
            ></path>
          </svg>
        </h2>
        <p className="text-white md:text-[24px] text-[16px] font-semibold leading-[1.5]">
          Take a glance at the rules and what others asked about based on your
          current plan.
        </p>
        <div className="absolute right-32 -bottom-0.5 hidden lg:block">
          <svg
            width="107"
            height="148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.526 135.986c-.301.267-.437.671-.546 1.059-.17.613-.305 1.245-.28 1.881.05 1.375.903 2.692 2.135 3.299.145.071.302.135.463.118.162-.017.303-.113.437-.206l1.715-1.192c.328-.227.676-.483.796-.865.12-.38-.02-.788-.157-1.162-.338-.919-.616-2.776-1.567-3.267-.681-.353-2.437-.155-2.996.335z"
              fill="#FFCCAB"
            ></path>
            <path
              d="M22.761 132.562c-.923-.066-1.873-.108-2.749.192-.665.228-1.252.644-1.911.888-1.45.536-3.07.193-4.594.436-3.682.586-6.044 4.56-6.134 8.296-.045 1.842.514 3.941 2.16 4.761 1.145.569 2.532.361 3.717-.12s2.255-1.21 3.434-1.704c4.118-1.728 8.785-.376 13.237-.024 1.138.089 2.352.094 3.33-.497.492-.298.916-.777.971-1.351.14-1.456-1.873-2.069-2.6-3.338-1.21-2.113 2.278-5.105.169-6.279-2.226-1.237-6.528-1.083-9.03-1.26zM56.112 139.807c2.175 1.725 5.398.407 8.106 1.011 2.407.536 4.385 2.608 6.851 2.638 1.213.015 2.368-.478 3.481-.964.91-.397 1.883-.854 2.356-1.729.404-.747.357-1.647.299-2.495l-.213-3.111c-.092-1.348-.222-2.796-1.089-3.83-.9-1.075-2.403-1.444-3.804-1.44-1.4.002-2.786.313-4.187.318-.843.003-1.685-.104-2.528-.101-2.386.006-4.674.883-6.9 1.748-1.335.519-5.395 1.58-5.824 3.148-.314 1.156 2.563 4.102 3.452 4.807z"
              fill="#011742"
            ></path>
            <path
              d="M60.115 68.231c-2.217 2.523-4.614 5.066-7.741 6.29-3.12 1.218-7.164.725-9.122-2.004-.678-.94-1.055-2.063-1.394-3.169a53.143 53.143 0 01-.664-2.442 54.522 54.522 0 01-1.487-9.312c-.033-.513-.06-1.032.053-1.524.445-1.857 2.59-2.63 4.07-3.827 1.714-1.392 2.617-3.508 3.712-5.425.87-1.511 2.164-3.321 3.87-3.966a3.628 3.628 0 011.632-.227c1.92.173 1.488 1.49 1.8 3.195.279 1.517.67 3.008 1.169 4.472.332.978.736 1.977 1.447 2.736 2.098 2.236 5.862 1.577 8.505 3.134.219 4.588-2.83 8.622-5.85 12.07z"
              fill="#FFB482"
            ></path>
            <path
              d="M30.124 55.269c-5.922 2.461-9.093 8.805-11.764 14.647-.093.205-.19.423-.16.647.038.293.277.513.5.704l6.797 5.843c.711.612 1.433 1.235 1.945 2.021.455.7.726 1.503.952 2.307a25.422 25.422 0 01-.337 14.783c-1.368 4.126-3.77 7.815-6.146 11.452l-1.598 2.445c7.05.989 14.111 1.981 21.03 3.658 2.225.54 4.468 1.154 6.76 1.117 2.24-.036 4.423-.695 6.545-1.417 3.242-1.1 6.427-2.356 9.611-3.613.311-.122.635-.255.847-.514.327-.401.291-.976.252-1.491-.299-3.914.207-7.943 1.879-11.493 1.31-2.786 3.377-5.554 2.896-8.597-1.384-.415-2.865.157-4.309.089-1.443-.07-3.066-1.478-2.365-2.746a94.92 94.92 0 0012.983.214c-.068-4.768.106-9.54.524-14.291.253-2.885.57-5.93-.647-8.555-1.841-3.974-6.498-5.654-10.726-6.764-1.188 5.643-4.279 10.866-8.65 14.616-1.789 1.535-3.839 2.852-6.14 3.349-2.302.497-4.888.069-6.628-1.521-1.992-1.82-2.528-4.727-2.696-7.423-.136-2.192 1.266-9.278-.333-10.438-.971-.706-4.479-.247-5.682-.17-1.826.116-3.642.435-5.34 1.14z"
              fill="#665BFF"
            ></path>
            <path
              d="M31.06 109.412c4.007.641 7.91 1.849 11.923 2.453a40.649 40.649 0 0023.07-3.329c2.096-.977 4.197-2.158 6.506-2.251.448-.018.927.016 1.288.283.308.228.483.593.622.951 1.08 2.802.574 6.048-.833 8.7-1.409 2.652-3.637 4.781-6.033 6.588a39.761 39.761 0 01-10.146 5.544c-4.39 1.623-9.024 2.455-13.63 3.279-1.126.202-2.288.403-3.406.16-.718-.157-1.383-.489-2.039-.819-4.357-2.188-8.767-4.41-12.443-7.618-2.634-2.299-7.453-7.42-6.693-11.358.832-4.313 8.885-3.052 11.814-2.583z"
              fill="#011742"
            ></path>
            <path
              d="M40.456 131.874c-.538.359-1.09.726-1.713.858-.638.14-1.288.026-1.925-.087A116.009 116.009 0 016.02 122.428c-1.434-.712-2.881-1.477-3.977-2.649-1.82-1.957-2.404-4.885-1.833-7.5.578-2.609 2.191-4.913 4.202-6.669.552-.479 1.149-.932 1.833-1.186 1.029-.379 2.17-.279 3.26-.173 2.15.206 4.362.433 6.266 1.444 1.216.652 2.251 1.591 3.293 2.503 4.873 4.885 11.227 8.886 17.148 12.353 1.66.972 3.698 1.777 5.61 2.689 1.36.645 2.649 1.345 3.691 2.196 3.189 2.604-3.124 5.146-5.057 6.438z"
              fill="#021B4C"
            ></path>
            <path
              d="M40.456 131.874c-.538.359-1.09.726-1.714.858-.638.14-1.288.026-1.925-.087-.797-.146-1.594-.299-2.39-.459 2.715-2.264 4.993-4.992 6.825-8.04.187-.307.372-.612.571-.905 1.361.645 2.65 1.345 3.692 2.196 3.187 2.603-3.127 5.145-5.06 6.437zM18.84 60.953l7.246-.818 11.407 16.739-8.59 1.38-10.062-17.3z"
              fill="#011742"
            ></path>
            <path
              d="M36.063 141.514c.31.621.71 1.293 1.378 1.478.595.164 1.213-.111 1.768-.379l38.587-18.618c2.408-1.162 4.858-2.352 6.798-4.193 1.435-1.362 2.54-3.034 3.504-4.764 1.75-3.138 2.952-7.384.568-10.07-1.58-1.78-4.166-2.161-6.528-2.431-2.387-.272-4.916-.523-7.094.494-1.294.604-2.352 1.61-3.395 2.589a221.978 221.978 0 01-33.176 25.704c-1.18.746-4.495 2.026-4.914 3.409-.473 1.561 1.83 5.43 2.504 6.781z"
              fill="#021B4C"
            ></path>
            <path
              d="M35.291 74.747c.08.52-.551.819-1.055.952-1.726.433-3.453.872-5.178 1.305-.386.1-.797.213-1.057.519-.398.466-.259 1.171-.105 1.763l.14.54c.87 3.287 1.732 6.569 2.595 9.85.378 1.443.764 2.922.683 4.412-.14 2.696-1.74 5.059-3.286 7.262-.279.399-.578.812-1.03.992-.04.013-.079.033-.119.04-.863.253-1.746-.479-2.377-1.158-2.071-2.244-4.063-4.906-4.076-7.954-.007-2.283 1.096-4.393 1.766-6.57.797-2.569.996-5.311.598-7.974-.187-1.27-.498-2.515-1.036-3.667-.405-.892-1.109-1.039-.564-2.283.339-.766.89-1.545.704-2.356-.18-.805-.99-1.278-1.454-1.957-.777-1.145-.326-2.928.896-3.56.444-.234 1.022-.307 1.427-.008 1.016.766-.272 2.483.252 3.64.285.62 1.042.899 1.719.86.678-.04 1.307-.327 1.952-.547 1.255-.42 2.596-.6 3.917-.513.472.033 1.01.14 1.228.566.432.825-.804 1.524-1.74 1.53-.93.007-2.184.106-2.33 1.025 2.097-.499 4.302-.553 6.427-.16.152 1.198-1.228 1.958-2.364 2.356.816.14 1.627.287 2.443.427.433.076.951.242 1.024.668z"
              fill="#FFCCAB"
            ></path>
            <path
              d="M72.734 85.43c-.942 4.425-2.9 8.785-4.388 13.058-.617 1.763-1.308 3.568-2.483 5.012a7.945 7.945 0 01-.491.559c-1.474 1.517-3.804 2.403-5.763 1.597-.83-.339-1.52-.938-2.191-1.524-3.685-3.221-7.383-6.456-10.59-10.163-1.061-1.231-2.078-2.516-3.186-3.715a29.24 29.24 0 00-4.01-3.574 29.344 29.344 0 00-8.438-4.34c-1.282-.412-2.75-.852-3.035-2.402-.205-1.125.346-2.262 1.295-2.895 2.138-1.444 4.727-1.617 7.204-1.397-1.096-3.135-5.14-4.892-5.338-8.214 1.335.42 2.443 1.351 3.472 2.303 8.153 7.568 13.882 18.037 23.728 23.202.385.2.816.4 1.241.3.564-.126.883-.72 1.122-1.245.744-1.598 1.846-5.304 2.576-6.882.227-.499 9.415.46 9.275.32zM35.215 45.586c.164.644.347 1.293.677 1.87.757 1.323 2.198 2.127 3.024 3.407.947 1.468 1.189 3.627 2.81 4.27 1.61.637 3.252-.75 4.432-2.018l3.483-3.742c1.21-1.3 2.487-2.748 2.607-4.523.027-.389.01-.825.273-1.114.326-.359.891-.296 1.363-.405.838-.194 1.43-.996 1.633-1.834.204-.839.094-1.718-.017-2.574-.147-1.13-.681-2.592-1.812-2.474-.85.088-1.317 1.077-2.114 1.381-1.133.432-2.26-.667-2.82-1.743-.561-1.077-1.054-2.375-2.195-2.785-.469-.168-.98-.153-1.48-.165-1.936-.046-3.844-.532-5.78-.545-2.177-.016-5.024.73-5.444 3.096-.528 2.967.627 7.035 1.36 9.898z"
              fill="#FFCCAB"
            ></path>
            <path
              d="M34.082 35.677c1.76.601 3.444-1.01 5.241-1.486 1.35-.357 2.775-.058 4.138.243 1.661.367 3.424.788 4.603 2.016.953.992 1.776 2.587 3.13 2.367 1.051-.17 1.786-1.462 2.838-1.307.479.071.86.444 1.12.853.732 1.153.69 2.75-.1 3.863-.232.326-.528.628-.625 1.016-.258 1.026 1.148 1.833 2.123 1.429.975-.405 1.483-1.476 1.795-2.487 1.29-4.176.644-8.91-1.715-12.586 1.959.445 4.154-.558 5.103-2.333.95-1.775.567-4.164-.888-5.552-.36-.344-.776-.63-1.115-.996-.26-.282-.47-.608-.717-.901-1.745-2.066-5.45-1.921-7.03.276-.684.954-1.269 2.346-2.44 2.296-.378-.017-.725-.198-1.068-.356-4.849-2.227-9.083.165-12.552 3.539-1.984 1.93-6.243 8.6-1.84 10.106z"
              fill="#011742"
            ></path>
            <path
              d="M94.001.491c-1.957-.015-3.931.296-5.678 1.022-4.065 1.691-7.516 6.166-6.165 10.737.438 1.485.208 3.123 1.683 3.768.799.35 2.973.558 3.8.282 2.197-.731 3.64-2.733 2.446-4.952-.383-.71-.878-1.36-1.209-2.097-.33-.736-.48-1.61-.144-2.344.661-1.44 2.858-1.899 4.283-1.855 1.681.05 3.205.884 4.11 2.315 1.127 1.782 1.413 3.95 1.248 6.02-.177 2.214-1.108 3.905-2.504 5.603-1.201 1.462-2.524 2.866-3.323 4.583-.733 1.576-.972 3.323-1.006 5.048-.006.334-1.664 3.484-1.657 4.446.001.136 1.88.587 2.016.588l3.45.039a.275.275 0 00.278-.272c.053-4.682 1.49-9.146 5.126-12.29 1.323-1.145 2.748-2.076 3.777-3.52 1.466-2.059 2.19-4.085 1.981-6.625-.191-2.32-.953-4.641-2.461-6.442-1.622-1.934-3.995-3.143-6.461-3.664a18.157 18.157 0 00-3.59-.39zM97.61 38.942c0 2.153-1.19 4.058-3.338 4.058-.464 0-2.041.004-2.454-.145-1.497-.542-1.502-1.695-1.502-3.383 0-2.153.725-4.27 2.872-4.27 2.148 0 4.422 1.587 4.422 3.74z"
              fill="#070337"
            ></path>
            <path
              d="M92.141 0c-1.957-.015-3.93.296-5.677 1.023-4.066 1.69-7.517 6.166-6.166 10.737.438 1.484 1.453 3.354 2.928 3.999.798.349 1.728.326 2.555.05 2.197-.73 3.64-2.732 2.446-4.952-.383-.71-.878-1.36-1.209-2.096-.33-.737-.48-1.611-.144-2.345.662-1.44 2.858-1.898 4.283-1.855 1.681.051 3.205.885 4.11 2.315 1.127 1.783 1.413 3.95 1.248 6.02-.177 2.214-1.108 3.905-2.504 5.603-1.201 1.463-2.524 2.866-3.323 4.584-.733 1.576-.972 3.323-1.005 5.047-.007.334.105 3.825.112 4.787.002.136.11.246.246.247l3.45.039a.275.275 0 00.278-.272c.053-4.682 1.49-9.146 5.126-12.29 1.323-1.144 2.748-2.076 3.777-3.52 1.466-2.059 2.19-4.084 1.981-6.625-.191-2.32-.953-4.641-2.461-6.441C100.57 2.12 98.197.912 95.732.39a18.169 18.169 0 00-3.59-.39zM92.344 42.88a3.893 3.893 0 003.889-3.899 3.893 3.893 0 00-3.889-3.898 3.893 3.893 0 00-3.888 3.898 3.893 3.893 0 003.888 3.898z"
              fill="#323FD4"
            ></path>
            <path
              opacity="0.63"
              d="M81.585 11.312a.05.05 0 01-.049-.04c-.273-1.233-.312-3.165 1.044-5.362 1.325-2.145 3.183-3.58 5.522-4.266 2.501-.732 5.47-.575 8.825.467a.05.05 0 01-.029.095c-6.446-2.002-11.5-.668-14.233 3.757-1.34 2.169-1.3 4.073-1.032 5.288a.05.05 0 01-.048.06zM82.403 13.296a.05.05 0 01-.04-.02c-.013-.016-.293-.405-.553-1.088a.05.05 0 01.028-.065.05.05 0 01.065.03c.255.67.537 1.06.54 1.064a.05.05 0 01-.04.08zM93.646 36.455a.049.049 0 01-.023-.006 2.795 2.795 0 00-1.278-.305.05.05 0 010-.1c.465 0 .91.106 1.323.316a.05.05 0 01-.022.095zM90.734 41.425a.05.05 0 01-.028-.008 2.938 2.938 0 01-1.292-2.436c0-1.083.592-2.075 1.545-2.589a.05.05 0 01.047.088 2.837 2.837 0 00-1.492 2.501c0 .944.467 1.824 1.248 2.353a.05.05 0 01.013.07.05.05 0 01-.041.021z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </div>
      <div className="inner-content mt-10 px-6">
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="plan-tab-navf text-center">
                <ul className="relative z-20 mx-auto mb-[40px] inline-flex items-center rounded-[100px] overflow-hidden shadow-[0_4px_10px_rgba(64,123,255,0.13)] ">
                  <li className="inline-blockf">
                    <button
                      className={`md:w-[120px] w-[100px] text-center md:text-[16px] text-[13px] md:px-[30px] px-[15px] py-[12px] rounded-[100px] transition-all saturate-150  ${
                        swap ? "text-main-bg bg-primary" : ""
                      }`}
                      onClick={() => setSwap(!swap)}
                    >
                      FAQ
                    </button>
                  </li>
                  <li className="inline-blockf">
                    <button
                      className={`md:w-[120px] w-[100px] text-center md:text-[16px] text-[13px] md:px-[30px] px-[15px] py-[12px] rounded-[100px] transition-all saturate-150  ${
                        !swap ? "text-main-bg bg-primary" : ""
                      }`}
                      onClick={() => setSwap(!swap)}
                    >
                      Rules
                    </button>
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              {swap ? (
                <div className="faq-tab-wrap grid lg:grid-cols-[60%_40%] grid-cols-[1fr] lg:shadow-[0px_2.13333px_90.6667px_rgba(195,129,252,0.2)] h-[800px] bg-dark dark:shadow-[0px_2.13333px_10.6667px_rgba(195,129,252,0.2)] rounded-xl overflow-hidden">
                  <div className="faq-content-wrap xl:px-[56px] lg:px-[30px] px-[20px] xl:py-[48px] lg:py-[30px] py-[20px] lg:border-r-[1px] border-[#EBEBEB] shadow-[0px_2.49067px_105.853px_rgba(195,129,252,0.2)] lg:shadow-none overflow-y-auto dark:bg-dark dark:shadow-[0px_2.13333px_10.6667px_rgba(195,129,252,0.2)] rounded-2xl">
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        YES! We operate 24/7, 7 days a week to answer all your
                        questions!
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        Trader is immediately eligible for maximum capital
                        allocation of 600k!
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        As payments we accept most form of cards such as debit
                        and credit cards alongside crypto payments such as BTC
                        and USDT. You can pay via any exchange and most credit
                        card providers Visa, Mastercard! Here is a list of
                        accepted credit card payments and cryptos. UNIONPAY, BTC
                        (BITCOIN NETWORK), USDT (TRC20 NETW When you proceed in
                        doing a crypto payment, please ensure you verify your
                        network. If you send crypto over to us using the wrong
                        network we are not held liable if we fail to receive
                        your funds. In the event of incorrect network transfers,
                        contact your crypto exchange, and in most cases you will
                        get your funds back.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        Yes you can get unlimited free retries without paying if
                        you ended your assessment program in positive and the
                        rules have not been violated. For extensions, you are
                        eligible for ONE 14-day extension if your account is in
                        a 4% profit.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        Yes we provide each trader with live funds directly from
                        our liquidity provider. However, your account is shown
                        as demo even if the trader is funded. The trades taken
                        are instantaneously mirrored onto a live account. We do
                        so to prevent any substantial slippages or trading
                        related losses. This gives the capital distributor
                        protection when we provide traders with large sums of
                        capital to work with.
                      </p>
                    </div>
                  </div>

                  <div className="faq-nav-wrap  xl:px-[56px] lg:px-[30px] py-[48px] overflow-y-scroll scrollbar-gray flex flex-col gap-4">
                    {/* faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"General Questions"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>

                    {/* faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"Evaluation Faq"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>

                    {/* faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"Express Faq"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="faq-tab-wrap grid lg:grid-cols-[60%_40%] grid-cols-[1fr] bg-white lg:shadow-[0px_2.13333px_90.6667px_rgba(195,129,252,0.2)] h-[800px] dark:bg-dark dark:shadow-[0px_2.13333px_10.6667px_rgba(195,129,252,0.2)]">
                  <div className="faq-content-wrap xl:px-[56px] lg:px-[30px] px-[20px] xl:py-[48px] lg:py-[30px] py-[20px] lg:border-r-[1px] border-[#EBEBEB] shadow-[0px_2.49067px_105.853px_rgba(195,129,252,0.2)] lg:shadow-none overflow-y-auto">
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        As payments we accept most form of cards such as debit
                        and credit cards alongside crypto payments such as BTC
                        and USDT. You can pay via any exchange and most credit
                        card providers Visa, Mastercard! Here is a list of
                        accepted credit card payments and cryptos. UNIONPAY, BTC
                        (BITCOIN NETWORK), USDT (TRC20 NETW When you proceed in
                        doing a crypto payment, please ensure you verify your
                        network. If you send crypto over to us using the wrong
                        network we are not held liable if we fail to receive
                        your funds. In the event of incorrect network transfers,
                        contact your crypto exchange, and in most cases you will
                        get your funds back.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        Ensure that you have read and understood the rules for
                        the program before placing your first trade. Once you go
                        through them, you may log on to your trading account
                        using the credentials you were given via email.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        As payments we accept most form of cards such as debit
                        and credit cards alongside crypto payments such as BTC
                        and USDT. You can pay via any exchange and most credit
                        card providers Visa, Mastercard! Here is a list of
                        accepted credit card payments and cryptos. UNIONPAY, BTC
                        (BITCOIN NETWORK), USDT (TRC20 NETW When you proceed in
                        doing a crypto payment, please ensure you verify your
                        network. If you send crypto over to us using the wrong
                        network we are not held liable if we fail to receive
                        your funds. In the event of incorrect network transfers,
                        contact your crypto exchange, and in most cases you will
                        get your funds back.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        As payments we accept most form of cards such as debit
                        and credit cards alongside crypto payments such as BTC
                        and USDT. You can pay via any exchange and most credit
                        card providers Visa, Mastercard! Here is a list of
                        accepted credit card payments and cryptos. UNIONPAY, BTC
                        (BITCOIN
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] dark:text-white/70">
                        We are not a broker. EightCap is our trading server. It
                        is provided by an institutional fintech company who
                        provides us liquidity. We do not require regulation as
                        we are a proprietary firm. It is our company money that
                        is being used in all of our accounts.
                      </p>
                    </div>
                  </div>

                  <div className="faq-nav-wrap bg-white xl:px-[56px] lg:px-[30px] py-[48px] overflow-y-scroll scrollbar-gray dark:bg-dark flex flex-col gap-4">
                    {/* faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"Express Rule"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>
                    {/* Faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"Evaluation Rule"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
