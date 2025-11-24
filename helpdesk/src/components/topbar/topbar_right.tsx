import { ChevronDown, CircleQuestionMark, Gift } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function RightTopbar() {
  return (
    <>
      <div className="flex flex-row gap-4 items-center ">
        <div className="flex flex-row items-center bg-blue-500 rounded h-8">
          <h1 className="text-white border-r px-2">create</h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-7 w-7 bg-blue-500 hover:bg-blue-500 flex justify-center p-0">
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>Create Ticket</DropdownMenuItem>
              <DropdownMenuItem>Create Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CircleQuestionMark className="text-blue-200" />
          <Gift className="text-blue-200"/>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>TK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
