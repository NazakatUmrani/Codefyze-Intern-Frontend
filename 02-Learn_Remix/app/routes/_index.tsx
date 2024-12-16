import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CodeFyze Personal Website" },
    { name: "description", content: "We provide business services!" },
  ];
};

export default function Index() {
  return (
    <main className="flex items-center justify-center w-screen">
      {/* 1 */}
      <section className="w-full">
        <div className="w-full h-max relative inline-block">
          <img
            src="/white-background.png"
            alt="white-background"
            className="w-full h-full block object-contain"
          />
          <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 overflow-hidden gap-[12vw] md:gap-30 xl:gap-[15vw]">
            <div className="heading flex flex-col items-center w-4/6 lg:w-2/5 sm:gap-2">
              <p className=" font-extrabold sm:font-bold text-[#0E3172] text-center text-[2vw] sm:text-xl md:text-2xl">
                Our Development Process
              </p>
              <p className="font-medium text-center text-[1vw] sm:text-[1.3vw] md:text-xs">
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
              <div className="msg absolute -top-[10vw] -left-[5vw] bg-white p-1 sm:p-2 rounded shadow">
                <h1>Project Planning</h1>
                <p>
                  We collaborate closely with our client to understand their requirements, <span className="font-bold">goals and objectives</span>, ensuring a comprehensive plan is in place before starting development.
                </p>
              </div>
              <div className="msg absolute -top-[6vw] -right-[9vw] bg-white p-1 sm:p-2 rounded shadow">
                <h1>Testing and Deployment</h1>
                <p>We rigorously test and deploy the developed software, ensuring it meets the highest quality standards and is ready to be used by our client and their end-users.</p>
              </div>
              <div className="msg absolute bottom-[16vw] -left-[9vw] bg-white p-1 sm:p-2 rounded shadow">
                <h1>Development</h1>
                <p>Our skilled developers bring the designs to life, writing clean and <span className="font-bold">efficient code</span> while following industry standards and best practices.</p>
              </div>
              <div className="msg absolute bottom-[9vw] -right-[13vw] bg-white p-1 sm:p-2 rounded shadow">
                <h1>Desinging</h1>
                <p>Our experienced team of designers create
intuitive and <span className="font-bold">use-friendly interfaces</span>, ensuring a seamless user experience while 
adhering to the client&apos;s brand guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="2"></section>
    </main>
  );
}
