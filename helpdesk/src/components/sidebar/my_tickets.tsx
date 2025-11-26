"use client";

import {
  
  Sidebar,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { SlidersHorizontal } from "lucide-react";

import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function MyTickets() {
  return (
    <>
      <div className="flex flex-row">
        <div>
          
          
            <Sidebar className="relative w-64 h-[92vh] ">
              <SidebarMenu>
                <SidebarMenuItem>
                  <div className="flex flex-row items-center justify-between ">
                    <div className="">
                      <SidebarTrigger />
                    </div>
                    <div>
                      <SidebarMenuButton className="hover:bg-neutral-50 font-semibold">
                        My Tickets
                        <ChevronDown className="ml-2" />
                      </SidebarMenuButton>
                    </div>
                    <div>
                      <Button className="bg-neutral-100 hover:bg-neutral-300 text-black shadow-none rounded px-3 py-1 ">
                        <SlidersHorizontal />
                      </Button>
                    </div>
                    
                  </div>
                  <Separator className="my-2 mx-0.5 "/>
                </SidebarMenuItem>
              </SidebarMenu>
            </Sidebar>
          
          
        </div>
        
      </div>
    </>
  );
}
