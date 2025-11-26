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
                    <SidebarMenuButton>
                      <ButtonDesign>My Tickets</ButtonDesign>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ButtonDesign>Past Due</ButtonDesign>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ButtonDesign>High Priority</ButtonDesign>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ButtonDesign>Unassigned</ButtonDesign>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ButtonDesign>All Tickets</ButtonDesign>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ButtonDesign>
                        <Headset />
                        LIVE CHATS
                      </ButtonDesign>
                    </SidebarMenuButton>
                    
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ButtonDesign>
                        <Table />
                        BOARDS
                      </ButtonDesign>
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

function ButtonDesign({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Button
          className="bg-neutral-100 hover:bg-neutral-100 text-black shadow-none 
           w-full justify-start "
        >
          {children}
        </Button>
      </div>
    </>
  );
}
