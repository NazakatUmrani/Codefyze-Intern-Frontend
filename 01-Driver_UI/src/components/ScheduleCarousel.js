import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default function ScheduleCarousel() {
    return (
        <div className='max-w-[90vw]'>
            <Carousel className="">
                <CarouselContent className="lg:flex lg:space-x-4 text-[4vw]">
                    <CarouselItem className="lg:w-1/2">
                        <div className='h-max flex items-center justify-center'>Time
                            <span className="ml-3 buttonDark text-[3vw]"><span className="text-green-700">✓ </span>AM</span>
                            <span className="buttonLight text-[3vw]">AM</span>
                            <span className="buttonLight text-[3vw]">AM</span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="lg:w-1/2">
                        <div className='h-max flex items-center justify-center'>Day
                            <span className="ml-3 buttonDark text-[3vw]"><span className="text-green-700">✓ </span>Today - Sat</span>
                            <span className="buttonLight text-[3vw]">Sun - Wed</span>
                            <span className="buttonLight text-[3vw]">Custom <span className="relative bottom-1">⌄</span></span>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

