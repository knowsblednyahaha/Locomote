"use client";
import React, { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdMusicalNotes } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import "./sass/arrow.scss";
import BusSeats from "./BusSeats";
import Link from "next/link";
import BackButton from "../BackButton";

export default function BookUser() {
  const [adultPassenger, setAdultPassenger] = useState(0);

  return (
    <section className="max-w-[1440px] w-full px-5 md:px-10 lg:px-20 text-black m-auto">
      <div>
        <BackButton />
      </div>
      <div className="w-full lg:w-3/4 xl:w-2/3 border border-black rounded-2xl h-fit px-10 py-5 mt-5 m-auto">
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
          <div className="flex justify-center md:hidden pt-5">
            <button className="w-full lg:w-2/3 h-12 text-white rounded-3xl bg-[#FE2F2F]">
              <Link href={"/payment"}>Proceed to payment</Link>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="w-full flex gap-y-5 border border-black rounded-2xl">
            <div className="w-1/2 flex justify-between items-center border-r-2 border-black px-10 py-5">
              <FiPlusCircle />
              <div className="flex flex-col justify center items-center">
                <div>Adult</div>
                <div>{adultPassenger}</div>
              </div>
              <FiMinusCircle />
            </div>
            <div className="w-1/2 flex justify-between items-center px-10 py-5">
              <FiPlusCircle />
              <div className="flex flex-col justify center items-center">
                <div>Child</div>
                <div>0</div>
              </div>
              <FiMinusCircle />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-5 border border-black rounded-2xl p-5">
            <input
              type="text"
              placeholder="Fullname"
              className="w-full border-b border-black outline-none text-xl"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full border-b border-black outline-none text-xl"
            />
            <div className="flex w-full gap-x-10 px-10">
              <div className="w-1/2">
                <input type="radio" id="male" className="hidden" />
                <label
                  htmlFor={`male`}
                  className={`flex justify-center items-center border border-black w-full h-14 rounded-2xl text-center leading-16 cursor-pointer peer-checked:bg-red-400`}
                >
                  Male
                </label>
              </div>
              <div className="w-1/2">
                <input type="radio" id="female" className="hidden" />
                <label
                  htmlFor={`female`}
                  className={`flex justify-center items-center border border-black w-full h-14 rounded-2xl text-center leading-16 cursor-pointer peer-checked:bg-red-400
                  `}
                >
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <button className="w-full lg:w-2/3 h-12 text-white rounded-3xl bg-[#FE2F2F]">
              <Link href={"/payment"}>Proceed to payment</Link>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
