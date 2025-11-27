"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  CirclePlus,
  ListFilter,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { ChevronDown } from "lucide-react";

export default function DropDown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-neutral-100 hover:bg-neutral-300 text-black shadow-none rounded px-3 py-1">
            <SlidersHorizontal />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-[340px] h-[400px] p-4 flex flex-col gap-3"
        >
          <div className="flex justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <ListFilter size={14} />
              <span className="text-[14px] text-black">Ticket Filters</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <RotateCcw size={14} />
              <p className="text-[14px]">Rotate</p>
            </div>
          </div>

          <DropdownMenuItem className="hover:bg-white p-0 m-0">
            <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-lg px-3 ">
              <p>Project:All</p>
              <ChevronDown className="w-5" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white p-0 m-0">
            <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-lg px-3 ">
              <p>Type:All</p>
              <ChevronDown className="w-5" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white p-0 m-0">
            <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-lg px-3 ">
              <p>Status:All</p>
              <ChevronDown className="w-5" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white p-0 m-0">
            <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-lg px-3 ">
              <p>Assignee:All</p>
              <ChevronDown className="w-5" />
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-white p-0 m-0 text-blue-600">
            <span className="flex gap-1 items-center">
              <CirclePlus size={15} />
              <p>More</p>
            </span>
          </DropdownMenuItem>

          <div className="mt-6">
            <Separator className="my-2 mx-0.5 " />
            <div className=" flex gap-2">
              <Input placeholder="Name this view..." />
              <Button className="bg-blue-600 text-white hover:bg-blue-500">
                Save new view
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
