"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

export function CalendarForm() {
  // Declare the state without specifying the type
  const [date, setDate] = React.useState(null);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-fit justify-start text-left text-[2.5vw] font-normal buttonLight border border-[#1F2A37] rounded-full h-[5vw] px-2 md:h-max sm:text-xl"
          )}
        >Custom<span className="flex items-center"><ChevronDown size={1}/></span></Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
