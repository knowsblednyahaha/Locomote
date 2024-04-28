"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const [menu, setMenu] = useState(false);

  return (
    <header className="max-w-[1440px] w-full m-auto ">
      <div className="max-w-[1440px] w-full w-full flex justify-between items-center text-white py-5 px-5 md:px-10 lg:px-20 z-20 shadow-md shadow-black/20">
        <div className="cursor-pointer">
          <Link href={"/"}>
            <h3 className="text-black">Locomote</h3>
          </Link>
        </div>
        <div className="hidden gap-x-12 items-center sm:flex flex-row sm:text-sm md:text-md">
          <ul className="flex gap-x-12 text-black">
            {navItems.map((item, i) => (
              <li
                className={
                  item.href === pathname
                    ? "underline underline-offset-8"
                    : "hover:underline underline-offset-8"
                }
                key={i}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-5">
            <Link href={"/book"}>
              <button className="sm:h-10 sm:w-24 bg-white text-black rounded-3xl border border-black">
                Book
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:hidden md:invisible">
          <div className="text-2xl md:hidden text-black">
            <IoIosMenu onClick={() => setMenu(!menu)} />
          </div>
        </div>
        {menu && (
          <div className="fixed sm:hidden top-0 left-0 w-full h-screen z-0 bg-[#FFF] px-0 animate-[reveal_.5s_ease-in-out]  ">
            <div className="py-5 px-5 md:px-10 lg:px-20">
              <div className="flex justify-between text-black">
                <div>
                  <span></span>
                </div>
                <div className="text-2xl md:hidden text-black">
                  <IoClose onClick={() => setMenu(!menu)} />
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-center items-center text-black text-5xl gap-y-10">
              <div>
                <Link href={"/about"}>About</Link>
              </div>
              <div>
                <Link href={"/blog"}>Blog</Link>
              </div>
              <div>
                <Link href={"/contact"}>Contact</Link>
              </div>
              <div>
                <Link href={"/login"}>
                  <button className="h-20 w-52 bg-[#FE2F2F] text-white rounded-3xl">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
