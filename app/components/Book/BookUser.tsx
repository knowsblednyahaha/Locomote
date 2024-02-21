import React from "react";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdMusicalNotes } from "react-icons/io";
import "./sass/arrow.scss";
import BusSeats from "./BusSeats";

export default function BookUser() {
  return (
    <section className="max-w-[1440px] w-full px-5 md:px-10 lg:px-20 text-black m-auto">
      <div className="w-full lg:w-3/4 xl:w-2/3 border border-black rounded-2xl h-fit px-10 py-5 mt-10 m-auto">
        <div className="w-full pb-3 flex justify-between">
          <span className="text-sm flex flex-row gap-x-3 uppercase justify-center md:justify-start">
            Bus Company: Victory Liner - Deluxe
            <span className="md:flex flex-row gap-x-1 hidden ">
              <FaWifi size={16} />
              <PiTelevisionSimpleDuotone size={16} />
              <TbAirConditioning size={16} />
              <IoMdMusicalNotes size={16} />
            </span>
          </span>
          <span>02/07/24</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
          <div className="md:w-4/12">
            <span className="text-xl font-bold">00-15</span>
            <p className="uppercase">Baguio City Bus Station</p>
          </div>
          <div className="w-full hidden md:flex flex-col justify-center items-center md:w-4/12 md:text-center px-5">
            <span className="text-sm text-[#747474]">4hrs 30mins</span>
            <div className="w-full text-[#747474]">
              <i className="gg-arrow-right"></i>
            </div>
          </div>
          <div className="md:w-4/12">
            <span className="text-xl font-bold">04-45</span>
            <p className="uppercase">Cubao Bus Station</p>
          </div>
        </div>
      </div>
      <form
        action=""
        className="flex flex-col-reverse md:flex-row gap-y-10 gap-x-10 w-full lg:px-10 xl:px-20 py-10"
      >
        <div className="w-full md:w-1/2">
          <div className="w-full flex flex-col gap-y-5 border border-black rounded-2xl p-5">
            <div className="flex justify-center gap-x-10 text-sm">
              <div className="flex items-center gap-x-1">
                <span className="w-3 h-3 bg-white border border-black rounded-2xl"></span>
                Available
              </div>
              <div className="flex items-center gap-x-1">
                <span className="w-3 h-3 bg-[#FE2F2F] border border-black rounded-2xl"></span>
                Selected
              </div>
              <div className="flex items-center gap-x-1">
                <span className="w-3 h-3 bg-[#747474] border border-black rounded-2xl"></span>
                Booked
              </div>
            </div>
            <div className="flex justify-center font-bold text-lg">
              Select 2 Seats
            </div>
            <div>
              <BusSeats />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="w-full flex gap-y-5 border border-black rounded-2xl p-5">
            <div className="w-1/2 flex flex-col justify center items-center border-r-2 border-black">
              <div>Adult</div>
              <div>0</div>
            </div>
            <div className="w-1/2 flex flex-col justify center items-center">
              <div>Child</div>
              <div>0</div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-5 border border-black rounded-2xl p-5">
            <input
              type="text"
              placeholder="Fullname"
              className="w-full border-b border-black"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full border-b border-black"
            />
            <div className="flex">
              <div>
                <input type="checkbox" id={`seat`} className="hidden" />
                <label
                  htmlFor={`seat`}
                  className={`flex justify-center items-center border border-black w-14 h-14 lg:w-16 lg:h-16 rounded-2xl text-center leading-16 cursor-pointer`}
                ></label>
              </div>
              <div>
                <input type="checkbox" id={`seat`} className="hidden" />
                <label
                  htmlFor={`seat`}
                  className={`flex justify-center items-center border border-black w-14 h-14 lg:w-16 lg:h-16 rounded-2xl text-center leading-16 cursor-pointer`}
                ></label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
