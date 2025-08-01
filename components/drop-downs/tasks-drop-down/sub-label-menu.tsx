import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuPortal,
    DropdownMenuSubContent,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";


import { LABEL_OPTIONS } from "./constants";
import { Tag } from "lucide-react";

export function LabelSubMenu({
    value,
    onValueChange,
}:{
    value: string;
    onValueChange: (value:string) => void;
}) {
    return (
        <DropdownMenuSub>
            <DropdownMenuTrigger>
                <Tag className="mr-2 h-4 w-4" />
                <span>Label</span> 
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent className="poppins">
                    <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
                        {LABEL_OPTIONS.map(
                            (
                            option
                            ) => (
                                <DropdownMenuRadioItem key={option} value={option.toLowerCase()}>
                                    {option}
                                </DropdownMenuRadioItem >
                            )
                        )}
                    </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>

    )
}
