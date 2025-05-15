import {Task, Status, Priority} from "@/components/data/task-data"
import { Star, StarOff, Clock, CheckCircle, XCircle, ListTodo, Loader2, Archive } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";
import { GrHide } from "react-icons/gr";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

function renderStatusIcons(status: Status){
    switch (status){
        case "Backlog": return Archive;
        case "ToDo": return ListTodo;
        case "In Progress": return loader2;
        case "Done": return CheckCircle;
        case "canceled": return XCircle;

        default: break;
        
    }

}
function renderPriorityIcons(priority: Priority){
    switch (priority){
        case "low": return IoArrowDown;
        case "medium": return ;IoArrowBack
        case "high": return IoMdArrowUp;
        case "urgent": return XCircle;
        
        default: break;
    }
}
 
function formatDate(date: Date): string{
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const suffix = 
        day % 10 === 1 && day !== 11
            ? "st"
            : day % 10 === 2 && day !== 12
            ? "nd"
            : day % 10 === 3 && day !== 13 
            ? "rd"
            : "th";
    return `${day}${suffix} ${month} ${year}`
}

type SortableHeaderProp = {
    column: Column<Task, unknown>;
    label: string;
} 

const SortableHeader: React.FC<SortableHeaderProp> = ({column, label}) => {
    const isSorted = column.getIsSorted();
    const SortingIcon = 
        isSorted === "asc"
        ? IoMdArrowUp
        : isSorted === "desc"
        ? IoMdArrowDown
        : ArrowUpDown

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="" asChild>
                <div className={`flex items-start py-[14px] select-none cursor-pointer p-2 gap-1 ${
                    isSorted && "text-primary"
                    }`}
                    aria-label={`Sort by ${label}`}
                    >
                    {label}
                    <SortingIcon className="h-4 w-4"/>
                </div>
            </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="bottom" className="poppins">
                    <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                        <IoMdArrowUp className="mr-2 h-4 w-4" />
                            Asc
                        </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                        <IoMdArrowDown className="mr-2 h-4 w-4" />
                            Desc
                        </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <GrHide className="mr-2 size-7 text-opacity-90" />
                            Hide 
                        </DropdownMenuItem>

                </DropdownMenuContent >
        </DropdownMenu>
    );
}




export const tasksColumns:ColumnDef<Task>[] = [
    {
        id: "select",
        header:({table}) => (
            <Checkbox 
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="select all"
                />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="select row"
            />
        ),
        enableSorting:false,
        enableHiding: false,

    },
    {
        accessorKey: "taskId",
        header: "Task",

    },
    
    {
        accessorKey: "title",
        header: ({column}) => <SortableHeader column={column} label="Title" />,
        cell: ({row}) =>    {
            const taskLable = row.original.label;
            const taskTitle = row.original.title;
            return (
                <div className="flex items-center gap-2">
                    <Badge variant={"outline"} /> 
                        {taskLable} 
                    <span>{taskTitle}</span>
                </div>
            );

        },
    
    },
    {
        accessorKey: "status",
        header: ({column}) => <SortableHeader column={column} label="Status" />,
        cell: ({row}) =>    {
            const StatusIcon = renderStatusIcons(row.original.status);
            const status = row.original.status;
            return (
                <div className="flex items-center gap-2 text-sm">
                    {StatusIcon && (
                        <StatusIcon size={17} className="text-slate-600 opacity-95"/>
                    )}
                    <span>{status}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "priority",
        header: ({column}) => <SortableHeader column={column} label="Priority" />,
        cell: ({row}) =>    {
            const PriorityIcon = renderPriorityIcons(row.original.priority);
            const priority = row.original.priority;
            return (
                <div className="flex items-center gap-2 text-sm">
                    {PriorityIcon && (
                        <PriorityIcon size={17} className="text-slate-600 opacity-95"/>
                    )}
                    {priority}
                </div>
            );
        },
    },
    {
        accessorKey: "isFavorite",
        header: "",
        cell: ({row}) => {
            const FavoriteIcon = row.original.isFavorite && Star;
            return FavoriteIcon && <FavoriteIcon size={14} />;
        },
    },
    {
        accessorKey: "DateAdded",
        header: ({ column }) => (<SortableHeader column={column} label="Date Added" />),
        cell: ({row}) => {
            const date = row.original.dateAdded
            const formattedDate = formatDate(date);
            return formattedDate;
        },
    },
    {
        id: "actions",      
    
    },

];














