"use client"
import {
  Sidebar,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";


import { ChevronDown } from "lucide-react";
import DropDown from "./dropdown";
export default function MyTicketsHead(){
    return(
        <>
        <div>
          <Sidebar className="relative w-64 h-full ">
            <SidebarMenu>
              <SidebarMenuItem className="mb-2 mt-1">
                <div className="flex flex-row items-center justify-between ">
                  <div className="">
                    <SidebarTrigger />
                  </div>
                  <div>
                    <SidebarMenuButton className="hover:bg-neutral-50 font-semibold ">
                      My Tickets
                      <ChevronDown className="ml-2" />
                    </SidebarMenuButton>
                  </div>
                  <div className="relative">
                   <DropDown/>
                  </div>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </Sidebar>
        </div>
        </>
    )
}