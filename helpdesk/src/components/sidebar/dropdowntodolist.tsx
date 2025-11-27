"use client";

import * as React from "react";
import { ChevronsUpDown, CircleMinus, Ticket, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "../ui/badge";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

export default function LinkedTickets() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full m-0 p-0">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex w-full flex-col gap-2 m-0 p-0"
      >
        <div className="flex items-center justify-between gap-4 px-4">
          <p className="text-[12px] font-semibold">LINKED TICKETS  <span className="bg-neutral-200 p-1 py-0 rounded">3</span></p>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="flex flex-col gap-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            <div className="flex justify-between w-full items-baseline">
              <span className="flex gap-1 items-center">
                <Ticket size={13} className="text-orange-400" />
                <p className="text-blue-500">CAP-123</p>
              </span>
              <div className="flex gap-1 items-center">
                <Badge className="bg-blue-200 text-blue-500 rounded p-0">
                  To<span>Do</span>
                </Badge>
                <CircleMinus className="text-green-500" size={12} />
                <Avatar className="">
                  <AvatarImage src="" />
                  <AvatarFallback>TK</AvatarFallback>
                </Avatar>
                <X size={12} />
              </div>
            </div>
            <p>quo vitae omnis</p>
           
          </div>
         <div className="rounded-md border px-4 py-2 font-mono text-sm">
            <div className="flex justify-between w-full items-baseline">
              <span className="flex gap-1 items-center">
                <Ticket size={13} className="text-orange-400" />
                <p className="text-blue-500">CAP-124</p>
              </span>
              <div className="flex gap-1 items-center">
                <Badge className="bg-blue-200 text-blue-500 rounded p-0">
                  In<span>Progress</span>
                </Badge>
                <CircleMinus className="text-green-500" size={12} />
                <Avatar className="">
                  <AvatarImage src="" />
                  <AvatarFallback>TK</AvatarFallback>
                </Avatar>
                <X size={12} />
              </div>
            </div>
            
            <p>autem paritu earum nesciut</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
