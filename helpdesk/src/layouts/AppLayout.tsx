// import { Home,Ticket,Plus } from "lucide-react";
// import { NavLink } from "react-router-dom";
import Sidebar from "@/components/sidebar/sidebar";
import Topbar from "@/components/topbar/topbar";

export default function AppLayout() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <Topbar />
      </div>
    </>
  );
}
