"use client";

import { useState } from "react";
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { ChevronDown,  ChevronsRight } from "lucide-react";
import DropDown from "./dropdown";
import MyTicketsList from "./my_ticket_list";

export default function MyTicketsHead() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-neutral-200 rounded-md flex items-center gap-2"
      >
        < ChevronsRight size={16} />
       
      </button>

      
      {isOpen && (
        <Sidebar className="relative w-64 h-full mt-3 shadow-md rounded-xl">
          <SidebarMenu>
            <SidebarMenuItem className="mb-2 mt-1">
              <div className="flex flex-row items-center justify-between">
                <SidebarMenuButton className="hover:bg-neutral-50 font-semibold">
                  My Tickets
                  <ChevronDown className="ml-2" />
                </SidebarMenuButton>

                <div className="relative">
                  <DropDown />
                </div>
              </div>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <MyTicketsList />
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      )}
    </>
  );
}
