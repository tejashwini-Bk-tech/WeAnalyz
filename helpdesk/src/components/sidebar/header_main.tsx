"use client";

import { Ellipsis, Eye, Mail } from "lucide-react";
import { Separator } from "../ui/separator";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export default function HeaderMain(){
return(
    <>
       <header>
          <div className="w-full h-full">
            <h2>Laudantium neque veritatis</h2>
            <div className="flex justify-between ">
              <div className="flex flex-row gap-2 ">
                <p className="text-[12px]">OPS-102(100669518)</p>
                <Separator
                  orientation="vertical"
                  className="h-4 w-px bg-neutral-300"
                />
                <p className="text-[12px]">Created 11/14/22 12:32 PST</p>
              </div>
              <div className="flex items-baseline gap-2">
                <Mail size={15}/>
                <div className="flex gap-1 items-center" >
                  <Eye size={15}/><p className="text-[14px]">2</p>
                </div>
                <Ellipsis size={15}/>
                <div className="flex items-center">
                  <Avatar className="bg-neutral-200 w-7 h-7 relative bottom-1 ">
                    <AvatarImage/>
                    <AvatarFallback>DK</AvatarFallback>
                  </Avatar>
                  <Avatar className="bg-neutral-200 w-7 h-7 -ml-1 relative bottom-1">
                     <AvatarImage/>
                    <AvatarFallback>TK</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </header>
    </>
)
}