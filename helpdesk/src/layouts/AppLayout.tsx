// import { Home,Ticket,Plus } from "lucide-react";
// import { NavLink } from "react-router-dom";
import Sidebar from "@/components/sidebar/sidebar";

import Topbar from "@/components/topbar/topbar";
import DashboardLayout from "./dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout() {
  return (
    <>
    <SidebarProvider>
      <div className="flex flex-row w-full h-screen">
        
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Topbar />
          <DashboardLayout />
        </div>
      </div>
      </SidebarProvider>
    </>
  );
}
