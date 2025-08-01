import { LucideIcon } from "lucide-react";

import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"


export function MenuItem({
    Icon,
    Lable,
    shortcut,
    className,

}:{
    Icon: LucideIcon;
    lable: string;
    shortcut: string;
    className?: string;
}){
    return(
        <DropdownMenuItem>
            <Icon className={`mr-2 h-4 w-4 ${className}`} />
            <span className={`${className}`}>{lable}</span>
            {shortcut && (
                <DropdownMenuShortcut className={`${className}`}>
                    {shortcut}
                </DropdownMenuShortcut>
            )}
        </DropdownMenuItem>
    )
};


