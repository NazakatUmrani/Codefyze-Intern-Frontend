import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default function ScheduleCarousel() {
    return (
        <div>
            <Carousel className="">
                <CarouselContent className="">
                    <CarouselItem>
                        <div className='h-max flex items-center justify-center'>Time
                            <span className="ml-3 buttonDark"><span className="text-green-700">✓ </span>AM</span>
                            <span className="buttonLight">AM</span>
                            <span className="buttonLight">AM</span>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='h-max flex items-center justify-center'>Day
                            <span className="ml-3 buttonDark"><span className="text-green-700">✓ </span>Today - Sat</span>
                            <span className="buttonLight">Sun - Wed</span>
                            <span className="buttonLight">Custom <span className="relative bottom-1">⌄</span></span>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div className="relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4">
                        <CarouselPrevious />
                    </div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
                        <CarouselNext />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

