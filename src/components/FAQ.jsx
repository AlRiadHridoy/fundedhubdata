import { tringle } from "../ui/images";

import SingleFAQ from "./SingleFAQ";

export default function FAQ() {
  const headings = [
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
  ];

  const paras = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
  ];

  return (
    <section className="faq relative">
      <div className="container relative z-10">
        <div className="wrapper grid gap-12 justify-center items-center">
          <div className="heading grid gap-2 justify-center text-center">
            <h2 className="font-medium text-[2rem] tracking-tight">Faq</h2>

            <div className="paras">
              <p className="font-codePro">
                If you don&apos;t find your answer in frequently asked questions
                don&apos;t hesitate contacting us at
              </p>

              <a
                href="mailto: support@thefundedhub.com"
                className="underline text-lg"
              >
                support@thefundedhub.com
              </a>
            </div>
          </div>

          <div className="articles md:max-w-[90%] m-auto grid gap-5">
            {headings.map((heading, index) => (
              <SingleFAQ key={index} heading={heading} para={paras[index]} />
            ))}
          </div>

          <div className="readmore flex justify-center mb-12">
            <a
              href="#"
              className="text-base underline decoration-2 font-bold py-2 px-10 hidden sm:block"
            >
              Visit FAQ Page
            </a>
            <a
              href="#"
              className="uppercase sm:hidden font-Montserrat text-xs font-bold py-2 px-10 border-primary border-2 rounded-xl"
            >
              read more
            </a>
          </div>


        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -bottom-[18rem] -right-[15rem]  w-[40rem] rotate-[140deg] opacity-[0.2]"
        src={tringle}
        alt="tringle"
      />
      {/* triangle */}
      <img
        className="triangle sm:hidden absolute -top-[0%] -left-[50%]  w-[40rem] rotate-[140deg] opacity-[0.15]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
