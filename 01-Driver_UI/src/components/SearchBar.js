import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchBar() {
    return (
        <div className="flex w-full gap-2">
            <Input type="name" placeholder="Enter your suburb" className="bg-[#FFFFFF] text-neutral-400 w-full h-8 rounded-2xl text-sm py-1 text-start pl-2" />
            <Button className="bg-[#F3B616] size-8 flex items-center justify-center rounded-full" variant="primary"><Search className="10vw" /></Button>
        </div>
    )
}