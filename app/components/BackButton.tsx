"use client";

import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="w-fit h-auto mt-5 rounded-2xl border border-black">
      <button
        className="flex w-full gap-2 text-sm p-3"
        onClick={() => {
          router.back();
        }}
      >
        <Undo2 size={18} />
        Back
      </button>
    </div>
  );
};

export default BackButton;
