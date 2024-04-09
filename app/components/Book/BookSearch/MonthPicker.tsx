"use client";
import React, { useState } from "react";

export default function MonthPicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <div className="w-full ">
        <input type="date" className="p-2 border border-black rounded-xl" />
      </div>
    </div>
  );
}
