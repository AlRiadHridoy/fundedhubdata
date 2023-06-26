import { discord, mobile } from "../ui/images";

export default function Discord() {
  return (
    <section className="discord">
      <div className="container">
        <div className="wrapper relative grid sm:grid-cols-2 gap-8 justify-center items-center md:px-6">
          <div className="left grid sm:flex flex-col justify-center items-center sm:items-start gap-6">
            <div className="img flex justify-center items-center">
              <img
                className="max-w-[20rem] md:w-[25rem] w-full"
                src={discord}
                alt="discord"
              />
            </div>

            <div className="w-full grid justify-center sm:justify-start gap-3">
              <p className="max-w-[30rem] text-center sm:text-start">
                Where veteran and rookie traders all come together to talk about
                the markets and keep up to date with all annoucements.
              </p>
              <div className="mt-2 btn uppercase flex justify-center sm:justify-start">
                <a
                  href="#"
                  className=" bg-primary/20 font-Montserrat text-xs font-bold py-4 md:py-3 px-9 md:px-7 md:bg-primary rounded-xl md:text-dark"
                >
                  Join our Discord
                </a>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="right hidden w-full sm:flex justify-start">
            <img className="max-w-[28rem] w-full" src={mobile} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
