// import Image from "next/image";
import { Combobox } from "@/components/ComboBox";
import { Header } from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Package() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col w-screen font-[family-name:var(--font-geist-sans)] mb-11`}
    >
      <main className="flex flex-col">

        {/* Hero S */}
        <div className="mx-4 md:mt-11">
          <section className="w-full relative py-20">

            {/* Content */}
            <section className="w-full bg-[#F0B000] aspect-[3/1] rounded-[5rem] py-9 px-14 flex items-center justify-center space-x-6">
              <div className="w-full flex items-center justify-start space-x-10">
                <img
                  src="/skewed-image.png"
                  alt="skewed-image"
                  className="w-1/2 h-auto block"
                />
                <div className="w-4/12">
                  <Label className="text-[1.5vw] sm:max-md:text-[2vw] md:text-3xl font-bold">
                    Driving test package<br />Includes
                  </Label>
                  <ul className="ml-3 list-disc py-2">
                    <li className="text-xs">Pick-up 1hr prior to test start time</li>
                    <li className="text-xs">45 min pre-test warm up</li>
                    <li className="text-xs">Use of instructors vehicle to sit the test</li>
                    <li className="text-xs">Drop-off after the test result is received</li>
                  </ul>
                  <p className="text-[0.5rem] w-10/12 text-white py-3">
                    Our test package books the instructor & vehicle only. You must book your own driving test with your local roads authority.
                  </p>
                  <Label className="text-[0.5rem] py-2 pl-1">
                    Test package not available in ACT, SA and TAS.
                  </Label>
                  <Label className="text-2xl font-bold max-w-max max-h-max flex items-center py-4 space-x-2">
                    <img
                      src="/sign-route-green.png"
                      alt="sign-route-green"
                      className="w-10 block"
                    />
                    <span className="flex space-x-2 items-start">
                      <p>$225</p>
                      <p className="bg-[#F83B00] text-white font-normal text-[8px] mt-2 rounded-full px-2 leading-3">ONLY</p>
                    </span>
                  </Label>
                </div>
              </div>
            </section>

            {/* Image Stop */}
            <section className="absolute top-0 right-32">
              <img
                src="/stop-sign.png"
                alt="stop-sign"
                className="w-40 h-auto block"
              />
            </section>

            {/* Image barrier */}
            <section className="absolute bottom-0 right-11">
              <img
                src="/barrier.png"
                alt="barrier"
                className="w-52 h-auto block"
              />
            </section>
          </section>
        </div>

        {/* Main Content */}
        <section className="w-full flex justify-between items-start">
          {/* Tire Left */}
          <img
            src="/tire.png"
            alt="tire-left"
            className="w-40 h-auto block"
          />
          <div className="w-8/12 flex flex-col justify-start items-center mx-auto">
            <Label className="text-2xl max-w-max max-h-max flex items-center py-4 space-x-5 mb-11">
              <img
                src="/sign-route-yellow.png"
                alt="sign-route-yellow"
                className="w-20 block"
              />
              <p>Select from the two options below</p>
            </Label>
            <div className="flex space-x-2">
              <Button
                className="ml-3 buttonDark text-[3vw] h-7 sm:text-base rounded-full md:h-max"
                variant="primary"
              >
                <span className="text-green-700"><img
                  src="/card-icon-yellow.png"
                  alt="card-icon-yellow"
                  className="w-10 block"
                /> </span>Driving test package with driving lessons
              </Button>
              <Button
                className="buttonLight text-[3vw] h-7 sm:text-base rounded-full md:h-max"
                variant="primary"
              >
                <span className="text-green-700"><img
                  src="/card-icon-yellow.png"
                  alt="card-icon-yellow"
                  className="w-10 block"
                /> </span>Stan alone driving test package
              </Button>
            </div>
            <Label className="text-sm text-muted-foreground max-w-max max-h-max flex items-center py-4 space-x-5 my-3">Please select your pickup suburb & transmission type. You can then review our instructors in your area & book online.</Label>
            {/* search bar and buttons div */}
            <div className="flex flex-col lg:flex-row items-center gap-3 w-full px-20">
              <div className="flex flex-col justify-center gap-2 w-full sm:flex-row xl:w-max">
                <Button
                  className="buttonLight w-full sm:w-1/2 lg:w-36 h-8 text-center rounded-2xl text-sm py-1 shadow-[0px_4px_10px_rgba(0,0,0,0.4)]"
                  variant="primary"
                >
                  <span className="text-green-700">✓ </span>Auto
                </Button>
                <Button
                  className="buttonDark w-full sm:w-1/2 lg:w-36 h-8 text-center rounded-2xl text-sm shadow-[0px_4px_10px_rgba(0,0,0,0.4)]"
                  variant="primary"
                >
                  Manual
                </Button>
              </div>
              <SearchBar border="border border-black" shadow="true" />
            </div>
          </div>
          {/* Tire Right */}
          <img
            src="/tire.png"
            alt="tire-right"
            className="w-40 h-auto block transform -scale-x-100"
          />
        </section>

        {/* Card */}
        <section className="mt-11 w-full aspect-[2.5/1] rounded-[3rem] shadow-[0px_0px_20px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="h-1/2 w-full"></div>
          <div className="h-1/2 w-full bg-[#1F2A37] relative">
          <img
            src="/road-strip.png"
            alt="road-strip"
            className="w-full h-auto block absolute top-0 object-contain"
          />
          </div>
        </section>
      </main>
    </div>
  );
}
