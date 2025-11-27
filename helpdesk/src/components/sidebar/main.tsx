"use client";

import { Separator } from "../ui/separator";
import HeaderMain from "./header_main";
import MainInner from "./main_inner";

export default function MainDashboard() {
  return (
    <>
      <div className="w-full">
        <HeaderMain />
        <Separator />
        <MainInner  />
        
      </div>
    </>
  );
}
