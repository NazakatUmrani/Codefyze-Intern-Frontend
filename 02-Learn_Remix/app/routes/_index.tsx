import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import CircleButton from "~/components/CircleButton";

export const meta: MetaFunction = () => {
  return [
    { title: "CodeFyze Personal Website" },
    { name: "description", content: "We provide business services!" },
  ];
};

export default function Index() {
  const [carouselItem, setCarouselItem] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  const handlePrevious = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCarouselItem((prev) => (prev === 1 ? 4 : prev - 1));
      setFadeIn(true);
    }, 500);
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCarouselItem((prev) => (prev === 4 ? 1 : prev + 1));
      setFadeIn(true);
    }, 500);
  };

  useEffect(() => {
    setFadeIn(true);
  }, [carouselItem]);

  return (
    <main className="flex flex-col items-center justify-center w-screen gap-4">
      {/* 1st Component */}
      <section className="w-full">
        <div className="w-full h-max relative inline-block">
          <img
            src="/white-background.png"
            alt="white-background"
            className="w-full h-full block object-contain"
          />
          <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 overflow-hidden gap-[18vw] md:gap-30 xl:gap-[15vw]">
            <div className="heading flex flex-col items-center w-4/6 lg:w-2/5 sm:gap-2">
              <p className=" font-extrabold sm:font-bold text-[#0E3172] text-center text-[4vw] md:text-2xl lg:text-4xl">
                Our Development Process
              </p>
              <p className="font-medium text-center text-[2vw] md:text-base lg:text-lg">
                At <span className="font-extrabold">Code Fyze</span>, we follow
                a streamlined process from planning and design to development
                and deployment. Each step is tailored to deliver innovative
                solutions that meet client needs with precision.
              </p>
            </div>
            {/* Image */}
            <div className="relative">
              <img
                src="/human-with-laptop.png"
                alt="human-with-laptop"
                className="w-[55vw] h-full block object-contain"
              />
              {/* Message Boxes */}
              <div className="msg absolute -top-[13vw] -left-[15vw] md:-top-[10vw] lg:-top-[8vw] bg-white p-1 sm:p-2 rounded shadow">
                <h1>Project Planning</h1>
                <p>
                  We collaborate closely with our client to understand their
                  requirements,{" "}
                  <span className="font-bold">goals and objectives</span>,
                  ensuring a comprehensive plan is in place before starting
                  development.
                </p>
              </div>
              <div className="msg absolute -top-[6vw] -right-[18vw] sm:-top-[9vw] md:-top-[7vw] lg:-top-[5vw] bg-white p-1 sm:p-2 rounded shadow">
                <h1>Testing and Deployment</h1>
                <p>
                  We rigorously test and deploy the developed software, ensuring
                  it meets the highest quality standards and is ready to be used
                  by our client and their end-users.
                </p>
              </div>
              <div className="msg absolute bottom-[16vw] -left-[19vw] bg-white p-1 sm:p-2 rounded shadow">
                <h1>Development</h1>
                <p>
                  Our skilled developers bring the designs to life, writing
                  clean and <span className="font-bold">efficient code</span>{" "}
                  while following industry standards and best practices.
                </p>
              </div>
              <div className="msg absolute bottom-[9vw] -right-[19vw] bg-white p-1 sm:p-2 rounded shadow">
                <h1>Desinging</h1>
                <p>
                  Our experienced team of designers create intuitive and{" "}
                  <span className="font-bold">use-friendly interfaces</span>,
                  ensuring a seamless user experience while adhering to the
                  client&apos;s brand guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Component */}
      <section className="w-full space-y-2">
        {/* Text Header */}
        <header className="flex justify-center">
          <div className="heading flex flex-col items-center w-4/6 lg:w-2/5 sm:gap-2">
            <p className=" font-extrabold sm:font-bold text-[#0E3172] text-center text-[4vw] md:text-2xl">
              Our Case Studies
            </p>
            <p className="font-medium text-center text-[2vw] md:text-xs">
              Here are a few case studies highlighting successful projects we
              have undertaken. Web Development
            </p>
          </div>
        </header>

        {/* Carousel */}
        <div className="w-full flex items-center justify-around px-3">
          <div className="rotate-180 cursor-pointer max-sm:top-[17.5vw] max-sm:relative" onClick={handlePrevious}>
            <CircleButton />
          </div>
          <div className="w-[80%] flex gap-2 [&>*]:max-sm:h-[35vw] [&>*]:h-[20vw] [&>*]:object-cover relative">
            <img
              src="/Web-Development.jpg"
              alt="Web-Development"
              className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-500 ${
                carouselItem === 1
                  ? "max-sm:opacity-100 max-sm:scale-100 max-sm:z-10"
                  : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
              } ${
                carouselItem === 1
                  ? "w-[44%]"
                  : carouselItem === 4
                  ? "w-[11%]"
                  : "w-[22%]"
              } rounded-lg`}
            />

            <img
              src="/App-Development.jpg"
              alt="App-Development"
              className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-500 ${
                carouselItem === 2
                  ? "max-sm:opacity-100 max-sm:scale-100 max-sm:z-10"
                  : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
              } ${carouselItem === 2 ? "w-[44%]" : "w-[22%]"} rounded-lg`}
            />

            <img
              src="/UI-UX-design.png"
              alt="UI-UX-design"
              className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-500 ${
                carouselItem === 3
                  ? "max-sm:opacity-100 max-sm:scale-100 max-sm:z-10"
                  : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
              } ${carouselItem === 3 ? "w-[44%]" : "w-[22%]"} rounded-lg`}
            />

            <img
              src="/Panel-Development.png"
              alt="Panel-Development"
              className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-500 ${
                carouselItem === 4
                  ? "max-sm:opacity-100 max-sm:scale-100 max-sm:z-10"
                  : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
              } ${carouselItem === 4 ? "w-[44%]" : "w-[11%]"} rounded-lg`}
            />
          </div>
          <div onClick={handleNext} className="max-sm:top-[17.5vw] max-sm:relative">
            <CircleButton />
          </div>
        </div>
      </section>
      <section className="2"></section>
    </main>
  );
}
