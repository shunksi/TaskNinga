"use client";
import * as React from "react";

import { Button } from "@/components/ui/button"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { GoPlusCircle } from "react-icons/go";
import { Checkbox } from "@/components/ui/checkbox";

import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { IconType } from "react-icons/lib";

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

type Status = {
    value: string;
    lable: string;
    icon: IconType;
}

const statuses : Status[] = [
    {
        value:"low",
        lable: "Low",
        icon: IoArrowDown,
    },
    {
        value:"medium",
        lable: "Medium",
        icon: IoArrowBack,
    },
    {
        value:"high",
        lable: "High",
        icon: IoMdArrowUp,
    },

]

export default function PriorityDropDown(){
    const [open, setOpen] = React.useState(false);
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        null
    );

console.log(selectedStatus);

return (
    <div className="flex item-center space-x-4">
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button size="sm" variant={"ouline"} className="h-10 justify-start border-dashed px-5">
                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-2">
                            <GoPlusCircle />
                            <span> Priority </span>
                        </div>

                        <Separator orientation="vertical" className="h-6 border-1 border-gray-300"/>

                        <div className="flex items-center gap-2">
                            <Badge variant={"secondary"}>Low</Badge>
                            <Badge variant={"secondary"}>Medium</Badge>
                        </div>

                    </div>
                </Button>
            </PopoverTrigger>
                    <PopoverContent className="p-0 poppins w-52" side="bottom" align="center">
                        <Command>
                          <CommandInput placeholder="Change Priority..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {statuses.map((status) => ( 
                                <CommandItem key={status.value} value={status.value} 
                                    className="flex justify-between" 
                                    onSelect={(value) => {
                                    setSelectedStatus(
                                        statuses.find((priority) => priority.value === value) ||
                                        null
                                    ); 
                                }}>
                                    <div className="felx items-center gap-3">
                                        <Checkbox />
                                        
                                        <status.icon />
                                        

                                    </div>
                                        <span> {status.lable} </span>
                                    <span>20</span>

                                    </CommandItem>
                                ))}

                            </CommandGroup>
                          </CommandList>
                        </Command>
                    </PopoverContent>
        </Popover>
    </div>
);}
































