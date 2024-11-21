// import Image from "next/image";
import Card from "@/components/Card";
import ScheduleCarousel from "@/components/ScheduleCarousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-w-screen font-[family-name:var(--font-geist-sans)] mb-11`}
    >
      {/* Navbar */}
      <div className="flex justify-between navbar bg-[#1F2A37] h-30">
        <div className="w-full h-20 bg-road bg-center bg-cover sm:w-[20vw] sm:h-auto"></div>
        <div className="hidden sm:flex items-center w-[60vw] p-10 justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <div className="flex gap-2 w-full">
              <Button className="bg-[#FFFFFF] w-1/2 lg:w-32 h-8 text-center rounded-2xl text-sm py-1" variant="primary"><span className="text-green-700">✓ </span>Auto</Button>
              <Button className="bg-[#F0B000] w-1/2 lg:w-32 h-8 text-center rounded-2xl text-sm" variant="primary">Manual</Button>
            </div>
            <div className="flex gap-2">
              <Input type="name" placeholder="Enter your suburb" className="bg-[#FFFFFF] text-neutral-400 w-72 h-8 rounded-2xl text-sm py-1 text-start pl-2" />
              <Button className="bg-[#F3B616] size-8 flex items-center justify-center rounded-full" variant="primary"><Search size={16} /></Button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block bg-road bg-center bg-cover sm:w-[20vw]"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col items-center p-9 gap-6">
        <div className="text-[2.8vw]">We have <b>19 auto instructors</b> available in <b>Melbourne, 3000. </b>Lesson prices in Melbourne start from <b>$67.50/hr.</b></div>
        <ScheduleCarousel />
        <div className="text-4xl font-bold md:m-10">Instructor available in the next 7 days</div>

      </div>

      {/* Cards */}
      <div className="CardContainer lg:px-auto flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
          {Array.from({ length: 12 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
