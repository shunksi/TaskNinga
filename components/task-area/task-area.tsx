import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { IoCloseSharp } from "react-icons/io5";
import SearchInput from "./search-input";
import  TaskTable from "./task-table";
import PriorityDropDown from '@/components/drop-downs/priority-drop-down'
import StatusDropDown from '@/components/drop-downs/status-drop-down'
import ViewCoulmnsDropDown from '@/components/drop-downs/view-columns-drop-down'
import PaginationArea from "./pagination/pagination-area.tsx" 
export default function TaskArea(){
    return(
        <div className="px-7 mt-5">
            <Card>
                
            <CardHeader>
                <div className="flex item-center justify-between">
                    <div className="flex item-center gap-2">
                        <PriorityDropDown />
                    <StatusDropDown />
                        <Button variant={"ghost"} className="h-10">
                            <span>Reset</span>
                            <IoCloseSharp />
                        </Button>
                    </div>
                    <div className="flex item-center">
                    <ViewCoulmnsDropDown/>
                </div>
                </div>
            </CardHeader>
                <CardContent>
                    <TaskTable/>
                </CardContent>
                <CardFooter>
                    <PaginationArea />

                </CardFooter>
            </Card>
        </div>
    )

} 
