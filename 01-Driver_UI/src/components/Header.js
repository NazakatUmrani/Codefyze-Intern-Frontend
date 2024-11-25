"use client";

import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

export function Header({ variant }) {
  return (
    <div className="flex justify-between navbar bg-[#1F2A37] w-full">
      <div className="hidden sm:flex w-full h-20 bg-road bg-center bg-cover sm:w-[20vw] sm:h-auto"></div>
      {variant == "homepage" ? (
        <div className="flex items-center w-full sm:w-[60vw] p-10 justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-3 w-[80vw]">
            <div className="flex flex-col justify-center gap-2 w-full sm:flex-row xl:w-max">
              <Button
                className="bg-[#FFFFFF] w-full sm:w-1/2 lg:w-32 h-8 text-center rounded-2xl text-sm py-1"
                variant="primary"
              >
                <span className="text-green-700">✓ </span>Auto
              </Button>
              <Button
                className="bg-[#F0B000] w-full sm:w-1/2 lg:w-32 h-8 text-center rounded-2xl text-sm"
                variant="primary"
              >
                Manual
              </Button>
            </div>
            <SearchBar />
          </div>
        </div>
      ) : variant == "voucher" ? (
        <div className="flex mx-auto flex-col items-center w-[60vw] py-7 justify-center">
          <div className="text-white text-[4vw] sm:text-2xl md:text-3xl mb-2 font-semibold">
            Get your gift voucher now!
          </div>
          <div className="w-full flex flex-col gap-2 items-center sm:flex-row sm:w-fit sm:gap-8">
            <Button
              className="w-full sm:w-auto bg-[#F0B000] px-3 text-center rounded-2xl text-[4vw] h-5 py-5 sm:text-sm sm:py-1 border border-[#F0B000] sm:h-7"
              variant="primary"
            >
              Step 1 - Gift Voucher
            </Button>
            <Button
              className="w-full sm:w-auto bg-[#FFFFFF] px-3 text-center rounded-2xl text-[4vw] h-5 py-5 sm:text-sm sm:py-1 border border-[#F0B000] sm:h-7"
              variant="primary"
            >
              Step 2 - Checkout
            </Button>
          </div>
        </div>
      ) : variant == "locations" ? (
        <div className="flex w-auto mx-auto flex-col items-center sm:w-[60vw] py-7 justify-center">
          <div className="text-white text-center text-[4vw] sm:text-xl xl:text-2xl mb-2 font-semibold">
            Confirm we have driving instructors in your recipient's location
          </div>
          <div className="w-[95vw] sm:w-[40vw]">
            <SearchBar />
          </div>
        </div>
      ) : variant == "locations/footer" ? (
        <div className="text-white text-center text-[2vw] px-5 py-6 font-semibold sm:w-[60vw] sm:text-sm sm:px-9 lg:px-16 xl:px-24">
          Driving lesson gift vouchers from EzLicence are a great way to show
          your loved ones you care. Gift cards for driving lessons hold their
          value for 3 years & provide access to the largest network of driving
          instructors in Australia. Driving lesson gift vouchers provide your
          recipient the flexibility to choose their own driving instructor and
          book driving lessons online at their leisure.
        </div>
      ) : (
        <></>
      )}
      <div className="hidden sm:block bg-road bg-center bg-cover sm:w-[20vw]"></div>
    </div>
  );
}
