import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Newsletter() {
  return (
    <section className="max-w-[1440px] w-full px-5 md:px-10 lg:px-20 m-auto py-5">
      <div className="h-72 flex flex-col sm:flex-row justify-center sm:items-center gap-x-10">
        <div className="w-full sm:w-1/2 pb-5 sm:pb-0">
          <h3 className="text-lg md:text-2xl lg:text-4xl">
            Subscribe to our newsletter by entering your email address.
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex flex-row">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full h-12 md:h-14 lg:h-16 border-b border-black focus-visible:border-b pl-3 md:text-lg lg:text-xl xl:text-2xl focus:outline-none"
            id="Newsletter"
          />
          <button className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#FE2F2F] rounded-3xl lg:rounded-full text-white flex justify-center items-center ml-[-3rem] md:ml-[-3.5rem] ">
            <GoArrowRight className="text-xl md:text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
