"use client";
import { Search } from "lucide-react";
import RightTopbar from "./topbar_right";


export default function Topbar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center h-12 w-full bg-blue-700 px-3">
        <div>
          <h1 className="font-semibold text-white text-[20px]">Helpdesk</h1>
        </div>

        <div className="flex flex-row items-center">
          <Search size={20} className="relative left-5 text-neutral-300" />
          <input
            type="text"
            placeholder="Search Capacity..."
            className=" w-72 h-9 px-7 rounded placeholder-neutral-300 text-neutral-300 bg-blue-950  "
          />
        </div>

        <RightTopbar/>
      </div>
    </>
  );
}
