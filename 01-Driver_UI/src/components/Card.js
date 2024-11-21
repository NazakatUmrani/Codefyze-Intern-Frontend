import { Calendar1, ChevronRight, CircleCheckBig, DollarSign, Star } from 'lucide-react';
import Image from 'next/image'
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export default function Card() {
    return (
        <div className="card w-[90%] h-auto aspect-[2/1] flex items-center justify-center sm:w-full border-b-gray-100">
            <div className='profile h-2/4 lg:h-auto lg:w-1/2 aspect-square'>
                {/* <div className='profile w-20 h-20'> */}
                <Image
                    src="/profile.jpg"
                    alt="Picture of the author"
                    width={80} // Provide the width property
                    height={80} // Provide the height property
                    className='profile-image w-full h-full object-cover'
                />
            </div>
            <div className='w-full h-[95%] flex flex-col justify-center ml-[2vw]'>
                <div className='text-[3.7vw] font-semibold'>William</div>
                <div className='mt-[0.7vw]'>
                    <span className='text-[2vw] text-[#1F2A37] font-medium border border-[#1F2A37] py-[0.5vw] px-[2vw] rounded-2xl'>View Profile</span>
                    <span className='text-[2vw] text-[#1F2A37] font-medium border border-[#1F2A37] py-[0.5vw] px-[2vw] rounded-2xl ml-2'>Book Online Now</span>
                </div>
                <div className='mt-[2vw] flex'>
                    <span className='text-[#1F2A37] flex items-center'><Calendar1 className='h-auto w-[2.6vw]'/></span>
                    <span className='text-[2vw] font-medium text-[#1F2A37] ml-2 underline flex items-center'>Check Availability<ChevronRight className='h-auto w-[2vw]' /></span>
                </div>
                <div className='mt-[2vw] flex flex-col gap-[0.2vw]'>
                    <span className='text-[1.6vw] flex'><DollarSign className='h-auto w-[1.8vw]' />&nbsp;<span className='text-zinc-600'>$71.10 - 79.00/hr</span></span>
                    <span className='text-[1.6vw] flex'><Star color="#f6d32d" className='h-auto w-[1.8vw]' />&nbsp;&nbsp;<span className='text-zinc-600'>4.9 - 28 Ratings</span></span>
                    <span className='text-[1.6vw] flex'><CircleCheckBig className='h-auto w-[1.8vw]' />&nbsp;&nbsp;<span className='text-zinc-600'>292 Completed Lessons</span></span>
                </div>
            </div>
        </div>
    )
}