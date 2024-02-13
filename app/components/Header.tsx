import React from "react";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <header className="max-w-[1440px] w-full m-auto ">
      <div className="max-w-[1440px] w-full absolute w-full flex justify-between items-center text-white py-5 px-5 md:px-10 lg:px-20 z-20">
        <div>
          <h3>Locomote</h3>
        </div>
        <div className="hidden gap-x-12 items-center sm:flex flex-row sm:text-sm md:text-md">
          <ul className="flex gap-x-12">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
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
