"use client";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { CircleAlert, CircleChevronUp, CircleMinus, Clock } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "../ui/avatar";
export default function MyTicketsList() {
  return (
    <>
      <div>
        <div>
          <Input placeholder="Search tickets" />
        </div>
        <Separator />
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="text-[15px] font-medium">soluta quam velit </p>
            <p className="text-[13px]">Nov 28</p>
          </div>
          <div className="flex flex-row justify-between items-baseline">
            <div className="flex items-center gap-1">
              <Label htmlFor="terms" className="text-[13px]">
                APPS-216
              </Label>
              <Checkbox id="terms" />
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Badge className="bg-blue-400 ">To Do</Badge>
              <Clock size={16} className="text-red-500" />
              <CircleAlert size={16} className="text-red-500" />
              <Avatar className="w-8 h-8 flex justify-center items-center">
                <AvatarFallback>TK</AvatarFallback>
                <AvatarImage src="0" />
              </Avatar>
            </div>
          </div>
          <div></div>
        </div>
        <Separator />
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="text-[15px] font-medium">soluta quam velit </p>
            <p className="text-[13px]">Dec 1</p>
          </div>
          <div className="flex flex-row justify-between items-baseline">
            <div className="flex items-center gap-1">
              <Label htmlFor="terms" className="text-[13px]">
                APPS-216
              </Label>
              <Checkbox id="terms" />
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Badge className="bg-blue-400 ">To Do</Badge>

              <CircleChevronUp className="text-red-500" size={16} />
              <Avatar className="w-8 h-8 flex justify-center items-center">
                <AvatarFallback>TK</AvatarFallback>
                <AvatarImage src="0" />
              </Avatar>
              <Badge className="text-white bg-red-500 rounded-4xl py-1">
                2
              </Badge>
            </div>
          </div>
          <div></div>
        </div>
        <Separator />
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="text-[15px] font-medium">soluta quam velit </p>
            <p className="text-[13px]">Dec-5</p>
          </div>
          <div className="flex flex-row justify-between items-baseline">
            <div className="flex items-center gap-1">
              <Label htmlFor="terms" className="text-[13px]">
                APPS-216
              </Label>
              <Checkbox id="terms" />
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Badge className="bg-blue-400 ">To Do</Badge>
              <CircleMinus className="text-green-400" size={16} />
              <Avatar className="w-8 h-8 flex justify-center items-center">
                <AvatarFallback></AvatarFallback>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOOp7Ae6JdqU8o-6BLyjvrep4SEd8mfKx2w&s" />
              </Avatar>
            </div>
          </div>
          <div></div>
        </div>
        <Separator />
      </div>
    </>
  );
}
