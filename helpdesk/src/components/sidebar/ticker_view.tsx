"use client";
import {
  SidebarGroupContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenu,
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
      <div className="bg-neutral-100 w-52 h-full">
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <div className="bg-neutral-200 rounded">
                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180 mr-3" />
                <CollapsibleTrigger className="font-semibold text-black">
                  TICKET VIEWS
                </CollapsibleTrigger>
              </div>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent className="flex flex-col gap-2 items-baseline w-full h-full mt-3  ">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Button className="bg-neutral-100 hover:bg-neutral-100 text-black shadow-none w-full justify-start ">
                        My Tickets
                      </Button>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Button className="bg-neutral-100 hover:bg-neutral-100 text-black shadow-none w-full justify-start ">
                        Past Due
                      </Button>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Button className="bg-neutral-100 hover:bg-neutral-100 text-black shadow-none w-full justify-start ">
                        High Priority
                      </Button>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Button className="bg-neutral-100 hover:bg-neutral-100 text-black shadow-none w-full justify-start ">
                        Unassigned
                      </Button>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Button className="bg-neutral-100 hover:bg-neutral-100 text-black shadow-none w-full justify-start ">
                        All Tickets
                      </Button>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Button className="bg-neutral-100 hover:bg-neutral-100 text-black shadow-none w-full justify-start ">
                        <Headset /> LIVE CHATS
                      </Button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Button className="bg-neutral-100 hover:bg-neutral-100 text-black shadow-none w-full justify-start ">
                        <Table /> BOARDS
                      </Button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </div>
    </>
  );
}

// ButtonDesign not needed. Use Button directly inside SidebarMenuButton above.
