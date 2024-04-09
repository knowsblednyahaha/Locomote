"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../sass/arrow.scss";

import BackButton from "../../BackButton";
import { SearchBookResult } from "./SearchBookResult";
import FilterBooking from "./FilterBooking";
import MonthPicker from "./MonthPicker";

export default function SearchBooking() {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDestination, setSearchDestination] = useState("");

  // Function to format the date in YYYY-MM-DD format
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Get the current date in YYYY-MM-DD format
  const currentDate = formatDate(new Date());
  const [travelDate, setTravelDate] = useState<string>("");

  console.log(sessionStorage.getItem("travelDate"));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDate =
        sessionStorage.getItem("travelDate") === null
          ? sessionStorage.setItem("travelDate", currentDate)
          : sessionStorage.getItem("travelDate");
      if (storedDate) {
        setTravelDate(storedDate);
      }
    }
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTravelDate(value);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("travelDate", value);
    }
  };

  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodeSearchLocationQuery = encodeURI(searchLocation);
    const encodeSearchDestinationQuery = encodeURI(searchDestination);

    encodeSearchLocationQuery === "" && encodeSearchDestinationQuery === ""
      ? router.push(`/book`)
      : router.push(
          `/book?location=${encodeSearchLocationQuery}&destination=${encodeSearchDestinationQuery}`
        );

    sessionStorage.setItem("travelDate", `${travelDate}`);
  };

  return (
    <section className="max-w-[1440px] w-full m-auto px-5 md:px-10 lg:px-20 text-black pb-5">
      <div>
        <div>
          <BackButton />
        </div>
        <form
          className="w-full mt-5 flex flex-col md:flex-row justify-center gap-x-1 gap-y-3"
          onSubmit={onSearch}
        >
          <div className="border border-black md:w-3/12 lg:w-4/12 md:rounded-s-3xl">
            <input
              id="location"
              list="location"
              value={searchLocation}
              onChange={(event) => setSearchLocation(event.target.value)}
              type="text"
              placeholder="From"
              className="p-5 w-full md:rounded-s-3xl focus:outline-none font-bold"
            />
            <datalist id="location">
              <option value="Baguio City" />
              <option value="Cubao, Quezon City" />
              <option value="Manila" />
            </datalist>
          </div>
          <div className="border border-black md:w-3/12 lg:w-4/12">
            <input
              id="destination"
              list="destination"
              value={searchDestination}
              onChange={(event) => setSearchDestination(event.target.value)}
              type="text"
              placeholder="To"
              className="p-5 w-full focus:outline-none font-bold"
            />
            <datalist id="destination">
              <option value="Baguio City" />
              <option value="Cubao, Quezon City" />
              <option value="Manila" />
            </datalist>
          </div>
          <div className="border border-black md:w-3/12 lg:w-3/12">
            <input
              type="date"
              name="travelDate"
              id="travelDate"
              className={`p-5 w-full font-bold focus:outline-none ${
                travelDate === "" ? "focus:ring focus:ring-blue-500" : ""
              }`}
              value={travelDate}
              onChange={handleDateChange}
              min={new Date().toISOString().split("T")[0]}
              onKeyDown={(e) => e.preventDefault()}
              autoFocus={travelDate === ""}
              required
            />
          </div>
          <div className="md:rounded-e-3xl md:border border-black px-5 md:w-3/12 lg:w-2/12 flex justify-center items-center">
            <button
              className="w-60 md:w-full h-12 md:h-content text-sm md:text-base bg-[#FE2F2F] rounded-xl text-white"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        <div className="pt-5 flex justify-between items-center">
          <FilterBooking />
          {/* <MonthPicker /> */}
        </div>
        <div className="w-full mt-5 flex flex-col md:flex-row gap-x-5 gap-y-5">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBookResult />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
