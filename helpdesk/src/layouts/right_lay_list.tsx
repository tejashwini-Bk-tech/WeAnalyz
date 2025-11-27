"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CopyPlus, Trash2, ChevronDown } from "lucide-react";
export default function RightList() {
  return (
    <>
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-row justify-between items-end">
            <h2 className="font-medium text-[13px] text-black">
              New inquiry<sup color="red">*</sup>
            </h2>
            <p className=" text-neutal-100 font-bold">+</p>
          </div>
          <div className=" w-full h-fit flex flex-col gap-3 justify-between  border-neutral-200 border  rounded-xl px-2 py-1">
            <p className="text-black">
              this is populated automatically inquiry
            </p>
            <div className="flex flex-row gap-1 justify-between w-full h-full items-end">
              <div>
                <Avatar className="w-7 h-7">
                  <AvatarImage src="" />
                  <AvatarFallback>TK</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-row gap-2">
                <CopyPlus size={14} />
                <Trash2 size={14} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="font-medium text-[13px] text-black">
            New Response<sup color="red">*</sup>
          </h2>
          <div className=" w-full h-fit flex flex-col gap-3 justify-between  border-neutral-200 border  rounded-xl px-2 py-1">
            <input
              type="text"
              placeholder="Add a response.."
              className="placeholder-stone-400 "
            />
            <div className="flex flex-row gap-1 justify-between w-full h-full items-end">
              <div>
                <Avatar className="w-7 h-7">
                  <AvatarImage src="" />
                  <AvatarFallback>TK</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-row gap-2">
                <CopyPlus size={14} />
                <Trash2 size={14} />
              </div>
            </div>
          </div>
        </div>
        <p className="text-[12px]">
          Tip:capacity works best with the answers that are short and specific
        </p>
        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="text-[13px] font-medium text-black">Save To</h2>
          <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded px-2 py-1">
            <div className="flex flex-row gap-1 items-center">
              <input type="text" placeholder="Choose a dialogue..." />
            </div>
            <ChevronDown className="w-5" />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="text-[13px] font-medium text-black">Expiration</h2>
          <div className=" w-full h-10 flex flex-row justify-between border-neutral-200 border items-center rounded-xl px-2 py-1">
            <input type="date" />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <h2 className="font-medium text-[13px] text-black">Autocomplete</h2>
          <div className="flex items-center space-x-2">
            <Switch/>
            <Label >On</Label>
          </div>
        </div>

        <div className="flex flex-row gap-3 mt-4">
          <Button className="bg-white text-neutral-500 hover:bg-white">Save to KB</Button>
          <Button className="bg-white text-blue-600 border-blue-600 border hover:bg-white">Save Local Draft</Button>
        </div>
      </div>
    </>
  );
}
