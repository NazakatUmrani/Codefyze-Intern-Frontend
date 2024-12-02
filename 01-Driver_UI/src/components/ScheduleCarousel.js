import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { CalendarForm } from "./CalendarForm";
import { Button } from "./ui/button";

export default function ScheduleCarousel() {
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowButtons((prev) => !prev);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center max-w-[100vw]">
      <Carousel className="w-full flex flex-col">
        <CarouselContent className="text-[4vw] sm:text-2xl lg:flex lg:space-x-4">
          <CarouselItem className="xl:flex xl:gap-7">
            <div className="h-max flex items-center justify-center gap-x-1 md:gap-x-2">
              Time
              <Button
                className="ml-3 buttonDark text-[3vw] h-7 sm:text-xl rounded-full md:h-max"
                variant="primary"
              >
                <span className="text-green-700">✓ </span>AM
              </Button>
              <Button
                className="buttonLight text-[3vw] h-7 sm:text-xl rounded-full md:h-max"
                variant="primary"
              >
                AM
              </Button>
              <Button
                className="buttonLight text-[3vw] h-7 sm:text-xl rounded-full md:h-max"
                variant="primary"
              >
                AM
              </Button>
            </div>
            <div className="hidden xl:flex h-max items-center justify-center gap-x-2">
              Day
              <Button
                className="ml-3 buttonDark text-[3vw] h-7 sm:text-xl rounded-full md:h-max"
                variant="primary"
              >
                <span className="text-green-700">✓ </span>Today - Sat
              </Button>
              <Button
                className="buttonLight text-[3vw] h-7 sm:text-xl rounded-full md:h-max"
                variant="primary"
              >
                Sun - Wed
              </Button>
              <CalendarForm />
            </div>
          </CarouselItem>
          <CarouselItem className="xl:hidden">
            <div className="h-max flex items-center justify-center gap-x-1 md:gap-x-2">
              Day
              <Button
                className="w-max ml-1 md:ml-3 buttonDark text-[2.5vw] h-[5vw] sm:text-base rounded-full md:h-max px-2"
                variant="primary"
              >
                <span className="text-green-700">✓ </span>Today - Sat
              </Button>
              <Button
                className="w-fit buttonLight text-[2.5vw] h-[5vw] sm:text-base rounded-full md:h-max px-2"
                variant="primary"
              >
                Sun - Wed
              </Button>
              <CalendarForm />
            </div>
          </CarouselItem>
        </CarouselContent>
        {showButtons && (
          <div className="relative w-[65vw] sm:w-[60vw] self-center bottom-4 md:bottom-6 xl:hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        )}
      </Carousel>
    </div>
  );
}
