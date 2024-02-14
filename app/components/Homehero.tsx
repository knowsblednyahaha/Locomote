import React from "react";
import Image from "next/image";
import { HiMiniArrowLongRight } from "react-icons/hi2";

export default function Homehero() {
  return (
    <section className="relative max-w-[1440px] w-full h-screen flex flex-col w-full overflow-hidden m-auto">
      <div className="relative w-full h-[70vh] md:h-[70vh]">
        <Image
          src="/img/homehero.jpg"
          className="bg-no-repeat object-cover rounded-b-3xl object-[left_35%_bottom_45%] md:bg-center "
          fill={true}
          alt="Homehero Image"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] from-[5%] via-transparent via-30% to-transparent"></div>
      </div>
      <div className="w-full h-[30vh] md:h-[30vh] px-5 md:px-10 lg:px-20 text-center md:text-left flex flex-col md:flex-row justify-center items-center gap-x-5">
        <div className="md:w-3/5 xl:w-4/6 pb-5 md:pb-0 md:pr-5">
          <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] md:leading-none lg:text-[4.5rem] xl:text-[6rem]">
            Ride in comfort with Locomote.
          </h1>
        </div>
        <div className="flex flex-col md:w-2/5 xl:w-2/6 gap-y-5">
          <div className="hidden md:block">
            <p className="text-xs lg:text-sm xl:text-base">
              We understand that your journey matters, and that's why we've
              crafted an intuitive and user-friendly app to ensure you can book
              your bus tickets effortlessly, anytime, anywhere.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-60 md:w-72 h-12 md:h-14 text-sm md:text-base bg-[#FE2F2F] rounded-3xl text-white flex justify-center items-center">
              Book your destination
              <span className="text-3xl pl-4 hidden">
                <HiMiniArrowLongRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
