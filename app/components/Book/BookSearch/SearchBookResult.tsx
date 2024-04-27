"use client";
import React from "react";
import { AirVent, Music, Tv2, Wifi } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import moment from "moment";
import "moment-timezone";
import { Deluxe, FirstClassExpress, LuxuryBus, SuperDeluxe } from "./BusIcons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useSWR from "swr";

interface NestedObject {
  departureTime: string; // Assuming dateTime is a string in ISO 8601 format
}

interface DataProps {
  travelDate: string;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
};

const SearchBookResult: React.FC<DataProps> = ({ travelDate }) => {
  const search = useSearchParams();
  const searchLocationQuery = search ? search.get("location") : null;
  const searchDestinationQuery = search ? search.get("destination") : null;

  const encodedSearchLocationQuery = encodeURI(searchLocationQuery || "");
  const encodedSearchDestinationQuery = encodeURI(searchDestinationQuery || "");

  const busCompany = search ? search.get("busCompany") : null;
  let busCompanies: string = "";

  // Function to format the date in YYYY-MM-DD format
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Get the current date in YYYY-MM-DD format
  const currentDate = formatDate(new Date());

  if (travelDate == "") {
    travelDate = currentDate;
  }

  if (busCompany) {
    // Split the comma-separated string into an array
    busCompanies = busCompany;
  } else {
    // If busCompanyParam is null or undefined, use default values
    busCompanies = "JoyBus,Genesis,Partas,Solid North,Victory Liner";
  }

  const busType = search ? search.get("busType") : null;

  let busTypes: string = "";

  if (busType) {
    // Split the comma-separated string into an array
    busTypes = busType;
  } else {
    // If busCompanyParam is null or undefined, use default values
    busTypes = "Deluxe,Super Deluxe,First Class Express,Luxury Bus";
  }

  const { data, error, isLoading } = useSWR(
    `/api/search?location=${encodedSearchLocationQuery}&destination=${encodedSearchDestinationQuery}&traveldate=${travelDate}&busCompany=${busCompanies}&busType=${busTypes}`,
    fetcher,
    {
      revalidateOnMount: true,
      revalidateIfState: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      initialData: {
        distance: 0,
        members: 0,
        activities: 0,
      },
    }
  );

  if (error) return <div>Error fetching data</div>;
  if (isLoading)
    return (
      <div className="w-full flex flex-col gap-y-5">
        <div className="animate-pulse w-full border border-black rounded-2xl h-fit px-10 py-5">
          <div className="w-full pb-3">
            <span className="text-sm flex flex-row gap-x-3 uppercase justify-center md:justify-start">
              <span className="bg-gray-300 h-4 w-60 block rounded-xl"></span>
              <span className="hidden md:block"></span>
              <span className="md:flex flex-row gap-x-1 hidden ">
                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
              </span>
            </span>
          </div>
          <div className="flex items-center flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
            <div className="md:w-3/12 flex flex-col items-center md:items-start">
              <span className="text-xl font-bold bg-gray-300 h-7 w-24 block rounded-xl"></span>
              <p className="uppercase bg-gray-300 h-5 w-28 block mt-2 rounded-xl"></p>
            </div>
            <div className="w-full hidden md:flex flex-col justify-center items-center md:w-2/12 md:text-center px-5 rounded-xl">
              <span className="text-sm text-[#747474] bg-gray-300 h-5 w-28 block rounded-xl"></span>
              {/* <div className="w-full text-[#747474] bg-gray-300 h-6 mt-2"></div> */}
            </div>
            <div className="md:w-3/12 flex flex-col items-center md:items-start">
              <span className="text-xl font-bold bg-gray-300 h-7 w-24 block rounded-xl"></span>
              <p className="uppercase bg-gray-300 h-5 w-28 block mt-2 rounded-xl"></p>
            </div>
            <div className="md:w-2/12 text-center flex flex-col items-center md:items-start">
              <span className="text-base font-bold bg-gray-300 h-7 w-24 md:w-16 block rounded-xl"></span>
              <span className="text-base bg-gray-300 h-5 w-28 md:w-24 block mt-2 rounded-xl"></span>
            </div>
            <div className="md:w-1/12 text-center">
              <span className="text-lg font-bold bg-gray-300 h-7 w-20 md:w-14 block rounded-xl"></span>
            </div>
            <div className="md:w-1/12 text-center">
              <span className="bg-gray-300 h-12 w-32 md:w-12 lg:w-16 xl:w-24 block rounded-xl"></span>
            </div>
          </div>
        </div>
      </div>
    );
  //checking data if it contains info if not it will return null
  if (!data) {
    return null;
  }

  //a function that parsing data of time
  const compareDateTime = (a: string, b: string) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();
    return dateB - dateA;
  };
  //Sorting time
  data.sort((a: NestedObject, b: NestedObject) =>
    compareDateTime(b.departureTime, a.departureTime)
  );

  const storedDate =
    typeof window !== "undefined" ? sessionStorage.getItem("travelDate") : null;

  return (
    <div className="w-full flex flex-col gap-y-5">
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
                <span className="md:flex flex-row gap-x-2 hidden">
                  {item.bus[0].type === "Deluxe" ? (
                    <Deluxe />
                  ) : item.bus[0].type === "Super Deluxe" ? (
                    <SuperDeluxe />
                  ) : item.bus[0].type === "First Class Express" ? (
                    <FirstClassExpress />
                  ) : item.bus[0].type === "First Class Express" ? (
                    <LuxuryBus />
                  ) : (
                    ""
                  )}
                </span>
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
              <div className="md:w-3/12 flex flex-col items-center justify-center">
                <span className="text-xl font-bold">
                  {moment(item.departureTime).tz("Asia/Manila").format("LT")}
                </span>
                <p className="uppercase">{item.route[0].location}</p>
              </div>
              <div className="w-full hidden md:flex flex-col justify-center items-center md:w-2/12 md:text-center px-5">
                <span className="text-sm text-[#747474]">
                  {item.route[0].traveltime} hours
                </span>
                <div className="w-full text-[#747474]">
                  <i className="gg-arrow-right"></i>
                </div>
              </div>
              <div className="md:w-3/12 flex flex-col items-center justify-center">
                <span className="text-xl font-bold">
                  {moment(item.arrivalTime).tz("Asia/Manila").format("LT")}
                </span>
                <p className="uppercase text-center">
                  {item.route[0].destination}
                </p>
              </div>
              <div
                className={`md:w-2/12 text-center flex flex-col gap-y-1 justify-center items-center ${
                  item.bus[0].capacity - item.ticket.length <= 5
                    ? "text-red-500"
                    : ""
                }`}
              >
                <span className="text-base ">Available Seats</span>
                <span className="text-sm font-semibold">
                  {item.bus[0].capacity - item.ticket.length}
                </span>
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
                  <button
                    className={`w-32 md:w-full h-12 md:h-content text-sm md:text-base bg-[#FE2F2F] rounded-xl text-white ${
                      storedDate === null || storedDate === ""
                        ? "cursor-not-allowed opacity-25"
                        : ""
                    }`}
                    disabled={storedDate === null || storedDate === ""}
                  >
                    Book
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No result found.</div>
      )}
    </div>
  );
};
export default SearchBookResult;
