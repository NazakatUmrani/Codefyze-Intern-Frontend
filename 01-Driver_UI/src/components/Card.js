import { Calendar1, ChevronRight, CircleCheckBig, DollarSign, Star } from 'lucide-react';
import Image from 'next/image'
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export default function Card() {
    return (
        <div className="card w-[90%] h-auto aspect-[2/1] flex items-center justify-center sm:w-full border-b-gray-100 lg:rounded-[3vw]">
            <div className='profile h-2/4 lg:h-auto lg:w-1/3 aspect-square'>
                {/* <div className='profile w-20 h-20'> */}
                <Image
                    src="/profile.jpg"
                    alt="Picture of the author"
                    width={80} // Provide the width property
                    height={80} // Provide the height property
                    className='profile-image w-full h-full object-cover lg:border-2'
                />
            </div>
            <div className='w-full h-[95%] flex flex-col justify-center ml-[2vw]'>
                <div className='text-[3.7vw] font-semibold lg:text-xl'>William</div>
                <div className='mt-[0.7vw] lg:mt-3'>
                    <span className='text-[2vw] text-[#1F2A37] font-medium border border-[#1F2A37] py-[0.5vw] px-[2vw] rounded-2xl lg:text-[1vw] lg:py-1'>View Profile</span>
                    <span className='text-[2vw] text-[#1F2A37] font-medium border border-[#1F2A37] py-[0.5vw] px-[2vw] rounded-2xl ml-2 lg:text-[1vw] lg:py-1'>Book Online Now</span>
                </div>
                <div className='mt-[2vw] flex lg:mt-[1vw]'>
                    <span className='text-[#1F2A37] flex items-center'><Calendar1 className='h-auto w-[2.6vw] lg:w-[1.3vw]'/></span>
                    <span className='text-[2vw] font-medium text-[#1F2A37] ml-2 underline flex items-center lg:text-[1vw]'>Check Availability<ChevronRight className='h-auto w-[2vw] lg:w-[1vw]' /></span>
                </div>
                <div className='mt-[2vw] flex flex-col gap-[0.2vw] lg:mt-[1vw]'>
                    <span className='text-[1.6vw] flex lg:text-[0.8vw]'><DollarSign className='h-auto w-[1.8vw] lg:w-[0.9vw]' />&nbsp;<span className='text-zinc-600'>$71.10 - 79.00/hr</span></span>
                    <span className='text-[1.6vw] flex lg:text-[0.8vw]'><Star color="#f6d32d" className='h-auto w-[1.8vw] lg:w-[0.9vw]' />&nbsp;&nbsp;<span className='text-zinc-600'>4.9 - 28 Ratings</span></span>
                    <span className='text-[1.6vw] flex lg:text-[0.8vw]'><CircleCheckBig className='h-auto w-[1.8vw] lg:w-[0.9vw]' />&nbsp;&nbsp;<span className='text-zinc-600'>292 Completed Lessons</span></span>
                </div>
            </div>
        </div>
    )
}