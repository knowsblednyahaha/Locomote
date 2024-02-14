"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <header className="max-w-[1440px] w-full m-auto ">
      <div className="max-w-[1440px] w-full absolute w-full flex justify-between items-center text-white py-5 px-5 md:px-10 lg:px-20 z-20">
        <div>
          <h3>Locomote</h3>
        </div>
        <div className="hidden gap-x-12 items-center sm:flex flex-row sm:text-sm md:text-md">
          <ul className="flex gap-x-12">
            {navItems.map((item, i) => (
              <li key={i}>{item.label}</li>
            ))}
          </ul>
          <div>
            <button className="sm:h-10 sm:w-24 bg-[#FE2F2F] text-white rounded-3xl">
              Book
            </button>
          </div>
        </div>
        <div className="sm:hidden md:invisible">
          <div className="text-2xl md:hidden">
            <IoIosMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
