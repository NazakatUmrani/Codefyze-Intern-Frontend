// import Image from "next/image";
import { Combobox } from "@/components/ComboBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
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

export default function Voucher() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col w-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="flex justify-between navbar bg-[#1F2A37] w-full">
        <div className="hidden w-full h-20 bg-road bg-center bg-cover sm:block sm:w-[20vw] sm:h-auto"></div>
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
        <div className="hidden bg-road bg-center bg-cover sm:block sm:w-[20vw]"></div>
      </div>
      <main className="mx-4 flex flex-col md:mx-10 xl:mx-32 md:mt-11">
        {/* Hero S */}
        <section className="w-full flex flex-col-reverse md:flex-row lg:justify-center">
          {/* Content */}
          <section className="flex items-center sm:max-md:m-8 md:w-1/3 lg:w-fit">
            <div>
              <div className="mb-3 font-semibold">
                <Label className="text-xl md:text-base lg:text-xl xl:text-3xl">Delivery Method</Label>
              </div>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="email"
                    id="email"
                    className="custom-radio"
                  />
                  <Label htmlFor="email" className="xl:text-xl"> By Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="sms"
                    id="sms"
                    className="custom-radio"
                  />
                  <Label htmlFor="sms" className="xl:text-xl"> By SMS message</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="gift"
                    id="gift"
                    className="custom-radio"
                  />
                  <Label htmlFor="gift" className="xl:text-xl"> Print Gift Voucher</Label>
                </div>
              </RadioGroup>
              <div className="my-4 max-w-sm">
                <Label className="text-muted-foreground text-sm xl:text-base">
                  The recipient will receive a email with a URL to redeem the
                  Gift Voucher.
                </Label>
              </div>
              <div className="my-4">
                <Label className="text-base lg:text-xl xl:text-3xl">Delivery date & time</Label>
              </div>
              <RadioGroup defaultValue="option-one">
                <div className="flex flex-col gap-y-3 sm:flex-row gap-x-14">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem
                      value="send"
                      id="send"
                      className="custom-radio"
                    />
                    <Label htmlFor="send" className="xl:text-xl"> Send</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem
                      value="datetime"
                      id="datetime"
                      className="custom-radio"
                    />
                    <Label htmlFor="datetime" className="xl:text-xl"> Choose date/time</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </section>
          {/* Image */}
          <section className="md:w-2/3 lg:w-fit">
            <div className="w-full h-max relative inline-block">
              <img
                src="/previewemail.png"
                alt="preview-email"
                className="w-full h-auto block"
              />
              <div className="w-full h-full flex flex-col justify-center absolute top-0 left-0 overflow-hidden">
                <div className="flex flex-col px-[13vw] py-[12vw] md:px-[10vw]">
                  <div className="contents">
                    <Label className="text-[1.5vw] sm:max-md:text-[2vw] text-white">
                      Recipient&apos;s Gift Voucher Preview (Email)
                    </Label>
                  </div>
                  <img
                    src="/emailinner.png"
                    alt="inner-email"
                    className="w-4/5 h-auto block self-center my-2"
                  />
                  <div className="w-full relative contents">
                    <Label className="text-[1.5vw] sm:max-md:text-[2vw] text-white">
                      Dear (recipient name),
                    </Label>
                  </div>
                  <div className="w-full contents">
                    <Label className="text-[1.5vw] sm:max-md:text-[2vw] mt-3 leading-none truncate text-white sm:mt-6">
                      You have received a 1-hour driving lesson gift voucher
                      from (sender&apos;s name)
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="form">
          <div className="w-full md:w-max bg-[#1F2A37] mt-8 md:mt-0 px-3 py-2 rounded-lg text-white font-semibold">
            <span className="text-sm md:text-lg font-medium">
              How many hours of lessons would you like purchase?
            </span>
            <span className="flex flex-col gap-y-5 pt-5 items-center justify-between mt-2 sm:flex-row sm:pt-0">
              <div className="w-full flex justify-around items-center gap-4">
                <Combobox />
                <Label className="text-[#F0B000] font-semibold">
                  Lesson Hour/s
                </Label>
              </div>
              <div className="w-full flex justify-around items-center">
                <Label className="text-white font-semibold">
                  TOTAL &nbsp;&nbsp;&nbsp;&nbsp;$532
                </Label>
                <Label className="text-white bg-[#F83B00] ml-3 py-1 px-5 rounded-full text-[0.7rem] font-normal">
                  5% OFF
                </Label>
              </div>
            </span>
            <div className="text-[0.5rem] ml-4  mt-1 text-muted-foreground">
              Click to edit
            </div>
          </div>
          <div className="form flex flex-col mt-8">
            <Label className="text-base font-semibold">To</Label>
            <div className="space-y-2 md:space-y-1">
              <Input
                type="name"
                placeholder="Recipient first name"
                className="bg-gray-300"
              />
              <Input
                type="email"
                placeholder="Recipient email"
                className="bg-gray-300"
              />
            </div>
            <Label className="text-base font-semibold mt-8 md:mt-4">From</Label>
            <div className="space-y-2 md:space-y-1">
              <Input
                type="name"
                placeholder="Sender name"
                className="bg-gray-300"
              />
              <Input
                type="email"
                placeholder="Sender email"
                className="bg-gray-300"
              />
            </div>
            <Label className="text-base font-semibold mt-8 md:mt-4">Message</Label>
            <Textarea
              placeholder="Type your message here."
              className="min-h-28 bg-gray-300"
            />
            <Label className="text-xs ml-3 font-light text-muted-foreground">
              Max. 100 characters
            </Label>
            <Button
              className="mt-6 mb-10 px-3 text-center rounded-2xl text-sm py-1 border border-[#F0B000] h-7"
              variant="outline"
            >
              Continue to payment $000
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
