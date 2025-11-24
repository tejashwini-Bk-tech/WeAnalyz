import {
  LayoutDashboard,
  Ticket,
  PlusCircle,
  UserCheck,
  BarChart3,
  Settings,
  
} from "lucide-react";
import type React from "react";

export default function Sidebar() {
  return (
    <>
      <aside className="bg-blue-700 w-10 h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-white bg-blue-500 w-4 px-4 rounded flex justify-center mt-1 ">
            C
          </h1>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <SideItem icon={LayoutDashboard} />
          <SideItem icon={Ticket} />
          <SideItem icon={PlusCircle} />
          <SideItem icon={UserCheck} />
          <SideItem icon={BarChart3} />
          <SideItem icon={Settings} />
        </div>
      </aside>
    </>
  );
  function SideItem({ icon: Icon }: { icon: React.ElementType }) {
    return (
      <>
        <div
          className="hover:text-orange-300 hover:border-l-3
         hover:border-l-orange-300 w-full flex justify-center"
        >
          <Icon />
        </div>
      </>
    );
  }
}
