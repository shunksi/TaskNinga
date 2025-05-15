import { Card } from "@/components/ui/card";
import react, { ReactNode } from "react";
import { FaTasks, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";


type SingleCard = {
    title : string;
    value : string;
    icon  : ReactNode;
}

export default function StateCards(){
    
    const stats: SingleCard[] = [
        {
            title: "Total Tasks",
            value: "121",
            icon : <FaTasks />,
        },
        {
            title: "Completed Tasks",
            value: "75",
            icon : <FaCheckCircle />,
        },
        {
            title: "Hght priorty Tasks",
            value: "21",
            icon : <FaExclamationTriangle />,
        }
        
    ]

    return(
        <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-7 gap-6 p-6">
            {stats.map((stat ,index) => (
                <SingleStatCard key={index} SingleCard={stat} />

            ))}
        </div>

    );
}

function SingleStatCard({ SingleCard }: {SingleCard: SingleCard}) {
    return (
        <Card className="p-4 flex flex-col gap-2 shadow-none">
            <div className="flex item-center justify-between">
                <span className="text-sm font-semibold text-slate-600">
                    {SingleCard.title}
                </span>
                <div className="size-7 rounded-md flex items-center justify-center text-sm bg-primary/25 font-bold text-primary">
                    {SingleCard.icon}
                </div>
            </div>
            <div className="text-3xl font-bold"> {SingleCard.value} </div>
        </Card>
    );
}




