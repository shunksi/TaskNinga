"use client";
import { useState } from "react";
import { Trash } from "lucide-react";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MENU_ITEMS } from "./constants";
import { MenuItem } from "./menu-items";
import { LabelSubMenu } from "./sub-label-menu"

export function TaskDropDown(){
    const [selectedLabel, setSelectedLabel] = useState("Bug");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <BsThreeDots>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 poppins">

                <DropdownMenuGroup>
                    {MENU_ITEMS.map(
                        (
                        item
                        ) =>(
                            <MenuItem 
                               key={item.label}
                               Icon={item.icon}
                               Label={item.label}
                               shortcut={item.shortcut}
                            >
                        )
                    )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <LabelSubMenu value={selectedLabel} onValueChange={setSelectedLabel}>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                        <MenuItem 
                            icon={Trash}
                            Label="Delete"
                            shortcut="⇧⌘Q"
                            className="text-red-500"
                            />          
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
