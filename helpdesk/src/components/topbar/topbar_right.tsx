"use client"
import { useState } from "react";

import { ChevronDown, CircleQuestionMark, Gift } from "lucide-react";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import RightSheet from "@/layouts/right_layout";

export default function RightTopbar() {
  const [openSheet, setOpenSheet] = useState(false)
  return (
    <>
     <RightSheet open={openSheet} setOpen={setOpenSheet}/>
      <div className="flex flex-row gap-4 items-center ">
        <div className="flex flex-row items-center bg-blue-500 rounded h-8">
          <h1 className="text-white border-r px-2">create</h1>

         
              <Button className="h-7 w-7 bg-blue-500 hover:bg-blue-500 flex justify-center p-0"
              onClick={() => setOpenSheet(true)}>
                <ChevronDown />
              </Button>
        
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CircleQuestionMark className="text-blue-200" />
          <Gift className="text-blue-200"/>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>TK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
