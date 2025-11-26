import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";

export default function TodoDown(){
    return(
        <>
         <div className="flex flex-row w-full justify-between px-2">
            <p className="text-[12px] font-semibold">TASKS</p>
            <ChevronRight className="bg-neutral-400 rounded " size={16}/>
         </div>
         <Separator/>
         <div className="flex flex-row w-full justify-between px-2">
            <p className="text-[12px] font-semibold">COLLECTED FIELDS</p>
            <ChevronRight className="bg-neutral-400 rounded " size={16}/>
         </div>
         <Separator/>
         <div className="flex flex-row w-full justify-between px-2">
            <p className="text-[12px] font-semibold">LINKED TICKETS</p>
            <ChevronRight className="bg-neutral-400 rounded " size={16}/>
         </div>
         <Separator/>
         <div className="flex flex-row w-full justify-between px-2">
            <p className="text-[10px] font-semibold">HISTORY</p>
            <ChevronRight className="bg-neutral-400 rounded " size={16}/>
         </div>
         <Separator/>
        </>
    )
}