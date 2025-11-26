"use client";


import { Separator } from "../ui/separator";
import TodoDown from "./todo_down";
import TodoDropdown from "./todo_dropdown";
import TodoList from "./todo_list";

export default function Todo() {
  return (
    <>
      <div className="w-64  p-2 flex flex-col items-center gap-2">
        <TodoDropdown />
        <Separator />
        <TodoList/>
        <Separator />
        <TodoDown/>
        
      </div>
    </>
  );
}
