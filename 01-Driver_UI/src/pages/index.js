// import Image from "next/image";
import Card from "@/components/Card";
import { Header } from "@/components/Header";
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
      <Header variant="homepage" />
      {/* Hero Section Content */}
      <div className="flex flex-col items-center p-9 gap-6">
        <div className="text-[2.8vw] sm:text-lg md:text-xl">We have <b>19 auto instructors</b> available in <b>Melbourne, 3000. </b>Lesson prices in Melbourne start from <b>$67.50/hr.</b></div>
        <ScheduleCarousel />
        <div className="text-[4vw] sm:text-4xl font-bold md:m-10">Instructor available in the next 7 days</div>

      </div>

      {/* Cards */}
      <div className="CardContainer flex justify-center">
        <div className="grid grid-cols-1 lg:w-[80vw] lg:grid-cols-2 lg:gap-x-10">
          {Array.from({ length: 12 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
