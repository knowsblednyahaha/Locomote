"use client";
import React, { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdMusicalNotes } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import "../sass/arrow.scss";
import BusSeats from "./BusSeats";
import Link from "next/link";
import BackButton from "../../BackButton";
import useSWR from "swr";
import moment from "moment";
import "moment-timezone";

interface DataId {
  id: string;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const BookUser: React.FC<DataId> = ({ id }) => {
  const [adultPassenger, setAdultPassenger] = useState(0);

  const { data, error, isLoading } = useSWR(`/api/booking/${id}`, fetcher);

  if (!data) {
    return null;
  }
  let date = sessionStorage.getItem("travelDate");

  // console.log(date);

  if (!date) {
    return null;
  }

  const dateString = date;
  const [year, month, day] = dateString.split("-");
  const paddedMonth = month.length === 1 ? `0${month}` : month;
  const paddedDay = day.length === 1 ? `0${day}` : day;
  const isoDateString = `${year}-${paddedMonth}-${paddedDay}T00:00:00.000Z`;

  // console.log(isoDateString);

  // Array to hold the elements

  // Create an array of length 'count'
  const elements = Array.from({ length: adultPassenger }, (_, index) => (
    <div className="w-full border border-black rounded-2xl pb-5" key={index}>
      <div className="p-5 border-b border-black">
        <span>Passenger {index + 1}</span>
      </div>
      <div className="p-5 flex justify-center items-center">
        <label htmlFor="fullname" className="text-lg">
          Fullname:
        </label>
        <input
          id="fullname"
          type="text"
          placeholder="Enter passenger name"
          className="w-full border-b border-black outline-none text-xl  p-4"
        />
      </div>
    </div>
  ));

  return (
    <section className="max-w-[1440px] w-full px-5 md:px-10 lg:px-20 text-black m-auto">
      <div>
        <BackButton />
      </div>
      <div className="w-full lg:w-3/4 xl:w-2/3 border border-black rounded-2xl h-fit px-10 py-5 mt-5 m-auto">
        <div className="w-full pb-3 flex justify-between">
          <span className="text-sm flex flex-row gap-x-3 uppercase justify-center md:justify-start">
            Bus Company:
            {data.bus[0].busCompany} - {data.bus[0].type}
            <span className="md:flex flex-row gap-x-1 hidden ">
              <FaWifi size={16} />
              <PiTelevisionSimpleDuotone size={16} />
              <TbAirConditioning size={16} />
              <IoMdMusicalNotes size={16} />
            </span>
          </span>
          <span>{moment(isoDateString).tz("Asia/Manila").format("LL")}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
          <div className="md:w-4/12">
            <span className="text-xl font-bold">
              {moment(data.departureTime).tz("Asia/Manila").format("LT")}
            </span>
            <p className="uppercase">{data.route[0].location}</p>
          </div>
          <div className="w-full hidden md:flex flex-col justify-center items-center md:w-4/12 md:text-center px-5">
            <span className="text-sm text-[#747474]">
              {data.route[0].traveltime} hours
            </span>
            <div className="w-full text-[#747474]">
              <i className="gg-arrow-right"></i>
            </div>
          </div>
          <div className="md:w-4/12">
            <span className="text-xl font-bold">
              {moment(data.arrivalTime).tz("Asia/Manila").format("LT")}
            </span>
            <p className="uppercase">{data.route[0].destination}</p>
          </div>
        </div>
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
              {adultPassenger == 0
                ? ""
                : adultPassenger === 1
                ? `Select ${adultPassenger} Seat`
                : `Select ${adultPassenger} Seats`}
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
            <div className="w-full flex justify-between items-center border-black  ">
              <div
                className="w-2/12 px-5 lg:px-5 flex justify-center items-center border-r border-black py-7"
                onClick={() => {
                  setAdultPassenger(
                    adultPassenger == 0 ? 0 : adultPassenger - 1
                  );
                }}
              >
                <FiMinus />
              </div>
              <div className="w-6/12 flex flex-col justify center items-center">
                <div>Passenger</div>
                <div>{adultPassenger}</div>
              </div>
              <div
                className="w-2/12 px-5 lg:px-5 flex justify-center items-center border-l border-black py-7"
                onClick={() => {
                  setAdultPassenger(adultPassenger + 1);
                }}
              >
                <FiPlus />
              </div>
            </div>
          </div>
          {adultPassenger !== 0 ? (
            <div className="flex flex-col gap-y-5">{elements} </div>
          ) : (
            ""
          )}

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
