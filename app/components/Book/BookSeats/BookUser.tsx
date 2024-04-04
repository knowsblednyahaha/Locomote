"use client";
import React, { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdMusicalNotes } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import "../sass/arrow.scss";
import BusSeats from "./BusSeats";
import Link from "next/link";
import BackButton from "../../BackButton";

interface Schedule {
  data: {
    id: string;
    arrivalTime: string;
    bus: {
      busCompany: number;
      itemName: string;
    }[];
  }[];
}
const BookUser: React.FC<Schedule> = ({ data }) => {
  const [adultPassenger, setAdultPassenger] = useState(0);

  // const { id, arrivalTime } = data;

  return (
    <section className="max-w-[1440px] w-full px-5 md:px-10 lg:px-20 text-black m-auto">
      <div>
        <BackButton />
      </div>

      <form
        action=""
        className="flex flex-col-reverse md:flex-row gap-y-10 gap-x-10 w-full lg:px-10 xl:px-20 py-10"
      >
        <div className="w-full md:w-1/2">
          <div className="w-full flex flex-col gap-y-5 border border-black rounded-2xl p-5">
            <div className="flex justify-center gap-x-5 sm:gap-x-10 text-sm">
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
            <Link href={"/payment"} className="w-full">
              <button className="w-full lg:w-2/3 h-12 text-white rounded-3xl bg-[#FE2F2F]">
                Proceed to payment
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="w-full flex gap-y-5 border border-black rounded-2xl">
            <div className="w-1/2 flex justify-between items-center border-r-2 border-black px-5 lg:px-10 py-5">
              <FiPlusCircle />
              <div className="flex flex-col justify center items-center">
                <div>Adult</div>
                <div>{adultPassenger}</div>
              </div>
              <FiMinusCircle />
            </div>
            <div className="w-1/2 flex justify-between items-center px-5 lg:px-10 py-5">
              <FiPlusCircle />
              <div className="flex flex-col justify center items-center">
                <div>Child</div>
                <div>0</div>
              </div>
              <FiMinusCircle />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-5 border border-black rounded-2xl p-5">
            <div></div>
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
            <Link href={"/payment"} className="w-full text-center">
              <button className="w-full lg:w-2/3 h-12 text-white rounded-3xl bg-[#FE2F2F]">
                Proceed to payment
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};
export default BookUser;
