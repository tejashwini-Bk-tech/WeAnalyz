"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown, ListTodo } from "lucide-react";

export default function TodoList() {
  return (
    <>
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-row justify-between items-end">
            <h2 className="font-medium text-[13px]">Priority</h2>
            <p className="text-[12px] text-blue-600 font-bold">Assign to me </p>
          </div>
          <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-xl px-2 py-1">
            <div className="flex flex-row gap-1 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage src="" />
                <AvatarFallback>TK</AvatarFallback>
              </Avatar>
              <p className="text-[14px]">Allie Harmon</p>
            </div>
            <ChevronDown className="w-5" />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="text-[13px] font-medium">Project</h2>
          <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-xl px-2 py-1">
            <div className="flex flex-row gap-1 items-center">
              <p className="text-[14px] ">Administrative</p>
            </div>
            <ChevronDown className="w-5" />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="text-[13px] font-medium">Project</h2>
          <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-xl px-2 py-1">
            <div className="flex flex-row gap-1 items-center">
              <ListTodo size={15} />
              <p className="text-[14px] ">Ticket Type</p>
            </div>
            <ChevronDown className="w-5" />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="text-[13px] font-medium">Due Date</h2>
          <div className=" w-fit h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-xl px-2 py-1">
            <input type="date" />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="font-medium text-[13px]">Reporter</h2>
          <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-xl px-2 py-1">
            <div className="flex flex-row gap-1 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage src="" />
                <AvatarFallback>TK</AvatarFallback>
              </Avatar>
              <p className="text-[14px]">Allie Harmon</p>
            </div>
            <ChevronDown className="w-5" />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="font-medium text-[13px]">Tags</h2>
          <p className="text-[12px] bg-neutral-400 w-fit rounded-2xl px-1">
            Add Tag +
          </p>
        </div>
</div>
    </>
  );
}
