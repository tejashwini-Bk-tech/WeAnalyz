
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ArrowLeft, MessageSquareDiff } from "lucide-react";
import RightList from "./right_lay_list";

export default function RightSheet({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-80">
        <SheetHeader>
          <SheetClose asChild>
            <span className="flex flex-row gap-1 text-blue-700 text-[13px] items-center cursor-pointer">
              <ArrowLeft size={15} />
              Back
            </span>
          </SheetClose>
          <SheetTitle>
            <span className="flex flex-row gap-1 items-center mt-2 text-[15px]">
              <MessageSquareDiff size={16} />
              Create New Knowledge
            </span>
          </SheetTitle>
          <SheetDescription>
           <RightList/>
          </SheetDescription>
        </SheetHeader>
        
      </SheetContent>
    </Sheet>
  );
}
