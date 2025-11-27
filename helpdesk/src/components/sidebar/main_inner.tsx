"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useState, useRef } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Image, Paperclip, Send } from "lucide-react";

export default function MainInner() {
  const [text, setText] = useState("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  const format = (type: string): void => {
    const textarea = textRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);

    let open = "";
    let close = "";
    if (type === "bold") {
      open = "**";
      close = "**";
    }
    if (type === "italic") {
      open = "*";
      close = "*";
    }
    if (type === "underline") {
      open = "<u>";
      close = "</u>";
    }

    let newText = text;
    let newStart = start;
    let newEnd = end;

    function isWrapped(
      str: string,
      s: number,
      e: number,
      open: string,
      close: string
    ): boolean {
      if (s - open.length < 0) return false;
      if (e + close.length > str.length) return false;
      return (
        str.slice(s - open.length, s) === open &&
        str.slice(e, e + close.length) === close
      );
    }

    if (selectedText && selectedText.length > 0) {
      if (isWrapped(text, start, end, open, close)) {
        // Unwrap selection
        newText =
          text.slice(0, start - open.length) +
          selectedText +
          text.slice(end + close.length);
        newStart = start - open.length;
        newEnd = newStart + selectedText.length;
      } else {
        // Wrap selection
        newText =
          text.slice(0, start) + open + selectedText + close + text.slice(end);
        newStart = start + open.length;
        newEnd = newStart + selectedText.length;
      }
    } else {
      // No selection: check cursor context
      const beforeCursor =
        start >= open.length ? text.slice(start - open.length, start) : "";
      const afterCursor =
        start + close.length <= text.length
          ? text.slice(start, start + close.length)
          : "";
      if (beforeCursor === open && afterCursor === close) {
        // Unwrap tags around cursor
        newText =
          text.slice(0, start - open.length) + text.slice(start + close.length);
        newStart = Math.max(0, start - open.length);
        newEnd = newStart;
      } else {
        // Insert tags at cursor
        newText = text.slice(0, start) + open + close + text.slice(start);
        newStart = start + open.length;
        newEnd = newStart;
      }
    }
    setText(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = newStart;
      textarea.selectionEnd = newEnd;
    }, 0);
  };

  return (
    <>
      <main className="bg-neutral-100 w-full h-full p-3">
        <div className="bg-white rounded border border-neutral-200 shadow-lg">
          <div className="flex gap-2 ">
            <Button
              type="button"
              className="bg-white text-black hover:border-b-blue-600 border-b-4 hover:bg-white rounded-none shadow-none"
            >
              Public Replay
            </Button>
            <Button
              type="button"
              className="bg-white text-black hover:border-b-blue-600 border-b-4 hover:bg-white rounded-none shadow-none"
            >
              Private Comment
            </Button>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <div className="flex gap-1 px-2 py-1 ">
              <p className="text-[14px] font-medium ">To:</p>
              <input />
            </div>
            <div className="bg-neutral-100 rounded px-2">
              <p>Cc</p>
            </div>
          </div>
          <Separator />
          <div>
            <textarea
              ref={textRef}
              className="w-full h-40 p-2 outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div>
              <div className="flex justify-between items-baseline">
                <div className="border-b flex items-baseline  px-3 py-2">
                  <Button
                    type="button"
                    onClick={() => format("bold")}
                    className="bg-white hover:bg-white text-black shadow-none font-bold"
                  >
                    B
                  </Button>
                  <Button
                    type="button"
                    onClick={() => format("italic")}
                    className="bg-white hover:bg-white text-black shadow-none italic"
                  >
                    I
                  </Button>
                  <Button
                    type="button"
                    onClick={() => format("underline")}
                    className="bg-white hover:bg-white text-black shadow-none "
                  >
                    U
                  </Button>
                  <label className="p-1 hover:bg-neutral-100 rounded cursor-pointer relative top-2">
                    <Image size={15} />
                    <Input type="file" accept="image/*" className="hidden" />
                  </label>

                  <label className="p-1 hover:bg-neutral-100 rounded cursor-pointer relative top-2">
                    <Paperclip size={15} />
                    <Input type="file" className="hidden" />
                  </label>
                </div>
                <div className="flex gap-4 items-center mx-4">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="terms">Add to KB</Label>
                    <Checkbox id="terms" />
                  </div>
                  <div className="cursor-pointer p-1 hover:bg-blue-600 bg-neutral-300 rounded">
                    <Send size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
