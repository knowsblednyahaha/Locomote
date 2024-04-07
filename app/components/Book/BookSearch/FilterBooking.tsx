import { SlidersHorizontal } from "lucide-react";
import React from "react";

export default function FilterBooking() {
  return (
    <div className="w-fit border border-black rounded-2xl h-fit px-5 py-3">
      <div className="flex gap-x-2">
        <SlidersHorizontal />
        <span className="text-base font-semibold">Filters</span>
      </div>
      <div></div>
    </div>
  );
}
