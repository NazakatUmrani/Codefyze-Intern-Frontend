import { Calendar1, ChevronRight, CircleCheckBig, DollarSign, Star } from 'lucide-react';
import Image from 'next/image'
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export default function Card() {
    return (
        <div className="card min-h-max h-max w-[80vw] flex items-center gap-2 lg:w-full">
            <div className='profile w-[5rem] h-[5rem]'>
            {/* <div className='profile w-20 h-20'> */}
                <Image
                    src="/profile.jpg"
                    alt="Picture of the author"
                    width={80} // Provide the width property
                    height={80} // Provide the height property
                    className='profile-image w-full h-full object-cover'
                />
            </div>
            <div className='w-[65%] h-[90%] flex flex-col justify-center'>
                <div><b>William</b></div>
                <div className='mt-2'>
                    <span className='text-[0.75rem] text-[#1F2A37] border border-[#1F2A37] py-1 px-3 rounded-2xl'>View Profile</span>
                    <span className='text-[0.75rem] text-[#1F2A37] border border-[#1F2A37] py-1 px-3 rounded-2xl ml-2'>Book Online Now</span>
                </div>
                <div className='mt-4 flex'>
                    <span className='text-sm text-[#1F2A37] relative top-1'><Calendar1 /></span>
                    <span className='text-lg font-semibold text-[#1F2A37] ml-2 underline flex'>Check Availability<ChevronRight className='relative top-1'/></span>
                </div>
                <div className='mt-4 flex flex-col gap-1'>
                    <span className='text-sm relative top-1 flex'><DollarSign size={16}/>&nbsp;<span className='text-zinc-600'>$71.10 - 79.00/hr</span></span>
                    <span className='text-sm flex'><Star color="#f6d32d" size={16}/>&nbsp;&nbsp;<span className='text-zinc-600'>4.9 - 28 Ratings</span></span>
                    <span className='text-sm flex'><CircleCheckBig size={16}/>&nbsp;&nbsp;<span className='text-zinc-600'>292 Completed Lessons</span></span>
                </div>
            </div>
        </div>
    )
}