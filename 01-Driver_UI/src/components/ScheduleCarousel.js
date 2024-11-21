import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
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
  return (
    <div className="max-w-[90vw]">
      <Carousel className="">
        <CarouselContent className="text-[4vw] sm:text-2xl lg:flex lg:space-x-4">
          <div></div>
          <CarouselItem className="xl:flex xl:gap-7">
            <div className="h-max flex items-center justify-center gap-x-2">
              Time
              <Button
                className="ml-3 buttonDark text-[3vw] sm:text-xl rounded-full h-max"
                variant="primary"
              >
                <span className="text-green-700">✓ </span>AM
              </Button>
              <Button
                className="buttonLight text-[3vw] sm:text-xl rounded-full h-max"
                variant="primary"
              >
                AM
              </Button>
              <Button
                className="buttonLight text-[3vw] sm:text-xl rounded-full h-max"
                variant="primary"
              >
                AM
              </Button>
            </div>
            <div className="hidden xl:flex h-max items-center justify-center gap-x-2">
              Day
              <Button
                className="ml-3 buttonDark text-[3vw] sm:text-xl rounded-full h-max"
                variant="primary"
              >
                <span className="text-green-700">✓ </span>Today - Sat
              </Button>
              <Button
                className="buttonLight text-[3vw] sm:text-xl rounded-full h-max"
                variant="primary"
              >
                Sun - Wed
              </Button>
              <CalendarForm />
            </div>
          </CarouselItem>
          <CarouselItem className="xl:hidden">
            <div className="h-max flex items-center justify-center gap-x-2">
              Day
              <Button
                className="ml-3 buttonDark text-[3vw] sm:text-xl rounded-full h-max"
                variant="primary"
              >
                <span className="text-green-700">✓ </span>Today - Sat
              </Button>
              <Button
                className="buttonLight text-[3vw] sm:text-xl rounded-full h-max"
                variant="primary"
              >
                Sun - Wed
              </Button>
              <CalendarForm />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
