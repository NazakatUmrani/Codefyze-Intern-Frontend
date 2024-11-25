// import Image from "next/image";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import localFont from "next/font/local";
import Image from "next/image";

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

export default function Locations() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col w-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <Header variant="locations" />
      <div className="w-screen aspect-[1920/1519] bg-streets bg-no-repeat bg-contain py-auto md:py-12">
        {/* Text */}
        <div className="flex flex-col items-center">
          <Label className="font-bold text-base mt-4">How does it work?</Label>
          <Label className="font-semibold text-[9px]">
            To get started select
          </Label>
          <Button
            className="text-[6px] px-2 py-2 sm:w-auto bg-[#FFFFFF] text-center rounded-2xl h-4 mt-2 sm:text-sm sm:py-1 border border-[#F0B000] sm:h-7"
            variant="primary"
          >
            Buy a Gift Voucher
          </Button>
        </div>
        {/* RoadMap */}
        <div className="w-screen h-auto">
          {/* <div className='profile w-20 h-20'> */}
          <Image
            src="/road-map.png"
            alt="Picture of the author"
            width={1280} // Provide the width property
            height={1280} // Provide the height property
            className="w-full h-full object-contain border-none"
          />
        </div>
      </div>
      {/* Cards */}
      <div>
        <div className="grid grid-cols-2 items-center justify-center mx-3 my-6 gap-2 md:grid-cols-4 md:mx-auto lg:max-w-[60vw]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-full h-auto aspect-auto">
              <Image
                src={`/locations-frame-${index + 1}.png`}
                alt={`Card Frame ${index + 1}`}
                width={1000} // Provide the width property
                height={1000} // Provide the height property
                className="w-full h-full object-contain border-none"
              />
            </div>
          ))}
        </div>
      </div>
      <Header variant="locations/footer" />
    </div>
  );
}
