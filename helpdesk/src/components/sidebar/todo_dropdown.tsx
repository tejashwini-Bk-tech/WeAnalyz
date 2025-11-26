"use client"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { X, ChevronDown, ArrowRight } from "lucide-react";
export default function TodoDropdown(){
    return(
        <>
        <div className="w-full h-full flex justify-between ">
          <div className=" flex items-center bg-blue-500 rounded h-8">
            <h1 className="text-white border-r px-2  text-[14px]">To Do</h1>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className=" w-7 bg-transparent hover:bg-blue-500 p-0  h-full rounded-none">
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent side="bottom" align="start" className="w-52">
                <DropdownMenuItem>
                  <ArrowRight className="relative bottom-2"/>
                  <p className="flex flex-col">
                    <span>Create Ticket</span>
                    <span className="text-neutral-400">In Progress</span>
                  </p>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                  <ArrowRight className="relative bottom-2"/>
                  <p className="flex flex-col">
                    <span>Needs Review</span>
                    <span className="text-neutral-400">In Progress</span>
                  </p>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowRight className="relative bottom-2"/>
                  <p className="flex flex-col">
                    <span>Completed</span>
                    <span className="text-neutral-400">Done</span>
                  </p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="">
            <Button
              variant="ghost"
              size="icon"
              className="bg-neutral-100 hover:bg-neutral-300 text-black shadow-none rounded px-3 py-1"
            >
              <X />
            </Button>
          </div>
        </div>
        </>
    )
}