"use client";
import React, { Suspense, useState } from "react";
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
import moment from "moment";
import "moment-timezone";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Deluxe,
  FirstClassExpress,
  LuxuryBus,
  SuperDeluxe,
} from "../BookSearch/BusIcons";

interface DataId {
  id: string;
}

export type InputPost = {
  selectedSeats: number[];
  passengerNames: string[];
};

const BookUser: React.FC<DataId> = ({ id }) => {
  const [passengerCount, setpassengerCount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [passengerNames, setPassengerNames] = useState<string[]>([]);

  const handlePostData = async () => {
    try {
      const response = await axios.post(`/api/booking/${id}`, {
        selectedSeats: selectedSeats,
        passengerNames: passengerNames,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNameChange = (index: number, newName: string) => {
    setPassengerNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames[index] = newName;
      return updatedNames;
    });
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["bookUser"],
    queryFn: async () => {
      const response = await axios.get(`/api/booking/${id}`, {
        // query URL without using browser cache
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      return response.data;
    },
  });

  if (error) return <div>Error fetching data</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center p-10">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-4 border-t-gray-800 rounded-full animate-spin"></div>
      </div>
    );

  if (!data) {
    return null;
  }
  let date = sessionStorage.getItem("travelDate");

  if (!date) {
    return null;
  }

  // const seatIds = data[0].ticket.map((ticket: any) => ticket.id);
  // const stringSeatId = seatIds.join(", ");
  // console.log(data);

  // const [bookedSeats, setBookedSeats] = useState([]);
  const bookedSeats = data.ticket.map(
    (data: any, index: any) => data.seatNumber
  );

  console.log(data);

  const dateString = date;
  const [year, month, day] = dateString.split("-");
  const paddedMonth = month.length === 1 ? `0${month}` : month;
  const paddedDay = day.length === 1 ? `0${day}` : day;
  const isoDateString = `${year}-${paddedMonth}-${paddedDay}T00:00:00.000Z`;

  // console.log(isoDateString);

  // Array to hold the elements

  // Create an array of length 'count'
  const elements = Array.from({ length: passengerCount }, (_, index) => (
    <div className="w-full border border-black rounded-2xl pb-5" key={index}>
      <div className="p-5 border-b border-black flex justify-between">
        <span>Passenger {index + 1}</span>
        <span>
          Seat Number:{" "}
          <span className="font-semibold">{selectedSeats[index]}</span>
        </span>
      </div>
      <div className="p-5 flex justify-center items-center">
        <label htmlFor={`fullname-${index}`} className="text-lg">
          Fullname:
        </label>
        <input
          id={`fullname-${index}`}
          type="text"
          placeholder="Enter passenger name"
          className="w-full border-b border-black outline-none text-xl  p-4"
          value={passengerNames[index] || ""}
          onChange={(e) => handleNameChange(index, e.target.value)}
          required
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
              {data.bus[0].type === "Deluxe" ? (
                <Deluxe />
              ) : data.bus[0].type === "Super Deluxe" ? (
                <SuperDeluxe />
              ) : data.bus[0].type === "First Class Express" ? (
                <FirstClassExpress />
              ) : data.bus[0].type === "First Class Express" ? (
                <LuxuryBus />
              ) : (
                ""
              )}
            </span>
          </span>
          <span>{moment(isoDateString).tz("Asia/Manila").format("LL")}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
          <div className="md:w-4/12 flex flex-col items-center justify-center">
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
          <div className="md:w-4/12 flex flex-col items-center justify-center">
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
              {passengerCount == 0
                ? "Please enter the passenger number."
                : passengerCount === 1
                ? `Select ${passengerCount} Seat`
                : `Select ${passengerCount} Seats`}
            </div>
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <BusSeats
                  passengerCount={passengerCount}
                  sendDataBookUser={setSelectedSeats}
                  bookedSeats={bookedSeats}
                />
              </Suspense>
            </div>
          </div>
          <div className="flex justify-center md:hidden pt-5">
            <Link href={`/payment/${data.id}`} className="w-full">
              <button
                onClick={handlePostData}
                className={`w-full lg:w-2/3 h-12 text-white rounded-3xl ${
                  passengerCount === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#FE2F2F]"
                }`}
                disabled={passengerCount === 0}
              >
                Proceed to payment
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="w-full flex gap-y-5 border border-black rounded-2xl">
            <div className="w-full flex justify-between items-center border-black  ">
              <div
                className="w-2/12 px-5 lg:px-5 flex justify-center items-center border-r border-black py-7 cursor-pointer"
                onClick={() => {
                  setpassengerCount(
                    passengerCount == 0 ? 0 : passengerCount - 1
                  );
                }}
              >
                <FiMinus />
              </div>
              <div className="w-6/12 flex flex-col justify center items-center">
                <div>Passenger</div>
                <div>{passengerCount}</div>
              </div>
              <div
                className="w-2/12 px-5 lg:px-5 flex justify-center items-center border-l border-black py-7 cursor-pointer"
                onClick={() => {
                  setpassengerCount(
                    bookedSeats.length + passengerCount == data.bus[0].capacity
                      ? passengerCount
                      : passengerCount + 1
                  );
                }}
              >
                <FiPlus />
              </div>
            </div>
          </div>
          {passengerCount !== 0 ? (
            <div className="flex flex-col gap-y-5">{elements} </div>
          ) : (
            ""
          )}

          <div className="hidden md:flex justify-center">
            <Link
              href={`/payment/${data.id}?seatNumber=${selectedSeats}`}
              className="w-full text-center"
            >
              <button
                onClick={handlePostData}
                className={`w-full lg:w-2/3 h-12 text-white rounded-3xl ${
                  passengerCount === 0 || passengerNames.length === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#FE2F2F]"
                }`}
                disabled={passengerCount === 0 || passengerNames.length === 0}
              >
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
