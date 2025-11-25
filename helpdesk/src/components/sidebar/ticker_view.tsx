"use client";
import {
  SidebarGroupContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "../ui/sidebar";

import { ChevronDown, Headset, Table } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { Button } from "../ui/button";

export default function TicketViews() {
  return (
    <>
      <div className="bg-neutral-100 w-52 h-screen">
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <div className="bg-neutral-200 rounded">
                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180 mr-3" />
                <CollapsibleTrigger className="font-semibold text-black" >
                TICKET VIEWS
                </CollapsibleTrigger>
              </div>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent className="flex flex-col gap-2 items-baseline w-full h-full mt-3  ">
              <ButtonDesign>My Tickets</ButtonDesign>
              <ButtonDesign>Past Due</ButtonDesign> 
              <ButtonDesign>High Priority</ButtonDesign> 
              <ButtonDesign>Unassigned</ButtonDesign> 
              <ButtonDesign>All Tickets</ButtonDesign> 
              <ButtonDesign><Headset/>LIVE CHATS</ButtonDesign>
              <ButtonDesign><Table/>BOARDS</ButtonDesign>  
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </div>
    </>
  );
}

function ButtonDesign({children}:{children:React.ReactNode}){
return(
    <>
    <div >
        <Button className="bg-neutral-100 hover:bg-neutral-50 text-black shadow-none">
        {children}
    </Button>
    </div>
    </>
)
}