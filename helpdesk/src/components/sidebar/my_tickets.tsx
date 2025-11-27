"use client";

import { Input } from "../ui/input";
import MyTicketsHead from "./my_tickets_head";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { CircleMinus } from "lucide-react";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
export default function MyTickets() {
  return (
    <>
      <MyTicketsHead />
      <div>
        <div className="">
          <Input placeholder="Search tickets" />
        </div>
        <Separator />
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="text-[15px] font-medium">soluta quam velit </p>
            <p>jan 1</p>
          </div>
          <div className="flex flex-row justify-between items-baseline">
            <div className="flex items-center gap-1">
              <Label htmlFor="terms" className="text-[13px]">APPS-216</Label>
              <Checkbox id="terms" />
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Badge className="bg-blue-400 ">To Do</Badge>
              <CircleMinus className="text-green-400"/>
              <Avatar className="w-8 h-8 flex justify-center items-center">
                <AvatarFallback>TK</AvatarFallback>
                <AvatarImage src="0"/>
              </Avatar>
            </div>
          </div>
          <div></div>
        </div>
        <Separator/>
      </div>
    </>
  );
}
