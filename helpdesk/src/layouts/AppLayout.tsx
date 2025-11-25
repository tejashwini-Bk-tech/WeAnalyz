// import { Home,Ticket,Plus } from "lucide-react";
// import { NavLink } from "react-router-dom";
import Sidebar from "@/components/sidebar/sidebar";
import TicketViews from "@/components/sidebar/ticker_view";
import Topbar from "@/components/topbar/topbar";

export default function AppLayout() {
  return (
    <>
  
        <div className="flex flex-row w-full h-screen">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Topbar />
            <TicketViews />
          </div>
        </div>
      
    </>
  );
}
