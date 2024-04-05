"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdMusicalNotes } from "react-icons/io";
import Link from "next/link";
import useSWR from "swr";
import moment from "moment";
import "moment-timezone";

interface NestedObject {
  departureTime: string; // Assuming dateTime is a string in ISO 8601 format
}

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const SearchBookResult = () => {
  const search = useSearchParams();
  const searchLocationQuery = search ? search.get("location") : null;
  const searchDestinationQuery = search ? search.get("destination") : null;

  const encodedSearchLocationQuery = encodeURI(searchLocationQuery || "");
  const encodedSearchDestinationQuery = encodeURI(searchDestinationQuery || "");

  const { data, error, isLoading } = useSWR(
    `/api/search?location=${encodedSearchLocationQuery}&destination=${encodedSearchDestinationQuery}`,
    fetcher
  );

  //checking data if it contains info if not it will return null
  if (!data) {
    return null;
  }

  //a function that parsing data of time
  const compareDateTime = (a: string, b: string) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();
    return dateA - dateB;
  };
  //Sorting time
  data.sort((a: NestedObject, b: NestedObject) =>
    compareDateTime(b.departureTime, a.departureTime)
  );

  return (
    <div className="w-full lg:w-9/12 flex flex-col gap-y-5">
      {data.length !== 0 ? (
        data.map((item: any, i: number) => (
          <div
            className="w-full border border-black rounded-2xl h-fit px-10 py-5"
            key={i}
          >
            <div className="w-full pb-3">
              <span className="text-sm flex flex-row gap-x-3 uppercase justify-center md:justify-start">
                Bus Company: {item.bus[0].busCompany} - {item.bus[0].type}{" "}
                <span className="hidden md:block">-</span>
                <span className="md:flex flex-row gap-x-1 hidden ">
                  <FaWifi size={16} />
                  <PiTelevisionSimpleDuotone size={16} />
                  <TbAirConditioning size={16} />
                  <IoMdMusicalNotes size={16} />
                </span>
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
              <div className="md:w-3/12">
                <span className="text-xl font-bold">
                  {moment(item.departureTime).tz("Asia/Manila").format("LT")}
                </span>
                <p className="uppercase">{item.route[0].location}</p>
              </div>
              <div className="w-full hidden md:flex flex-col justify-center items-center md:w-4/12 md:text-center px-5">
                <span className="text-sm text-[#747474]">
                  {item.route[0].traveltime} hours
                </span>
                <div className="w-full text-[#747474]">
                  <i className="gg-arrow-right"></i>
                </div>
              </div>
              <div className="md:w-3/12">
                <span className="text-xl font-bold">
                  {moment(item.arrivalTime).tz("Asia/Manila").format("LT")}
                </span>
                <p className="uppercase">{item.route[0].destination}</p>
              </div>
              <div className="md:w-1/12 text-center">
                <span className="text-lg font-bold">
                  {item.route[0].travelprice}₱
                </span>
              </div>
              <div className="md:w-2/12 text-center">
                <Link
                  rel="preload"
                  href={`/bookuser/${item.id}`}
                  as={`bookuser/${item.id}`}
                >
                  <button className="w-32 md:w-28 h-12 md:h-content text-sm md:text-base bg-[#FE2F2F] rounded-xl text-white">
                    Book
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="font-bold"> No result found.</div>
      )}
      {isLoading && <div>Wait...</div>}
    </div>
  );
};
