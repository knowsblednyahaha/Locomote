"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRouter as nextRouter } from "next/router";
import "../sass/arrow.scss";

import BackButton from "../../BackButton";
import { SearchBookResult } from "./SearchBookResult";

export default function SearchBooking() {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDestination, setSearchDestination] = useState("");

  // useEffect(() => {
  //   if (sessionStorage.getItem("travelDate") === null) {
  //     window.addEventListener("beforeunload", () => {
  //       sessionStorage.clear();
  //     });
  //   }
  // }, []);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDate = sessionStorage.getItem("travelDate");
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

    router.push(
      `/book?location=${encodeSearchLocationQuery}&destination=${encodeSearchDestinationQuery}`
    );

    sessionStorage.setItem("travelDate", `${travelDate}`);
  };

  // const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setTravelDate(value);
  // };

  return (
    <section className="max-w-[1440px] w-full m-auto px-5 md:px-10 lg:px-20 text-black">
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
        <div className="w-full mt-10 flex flex-col md:flex-row gap-x-5 gap-y-5">
          <div className="w-full hidden lg:block lg:w-3/12 border border-black rounded-2xl h-96 p-5">
            <div>
              <span className="text-lg font-semibold">Filters</span>
            </div>
            <div>
              <h5>Bus Company</h5>
              <div>
                <input
                  type="checkbox"
                  id="victoryliner"
                  name="victoryliner"
                  value="Bike"
                />
                <label htmlFor="victoryliner"> Victory Liner</label>
                <br />
                <input
                  type="checkbox"
                  id="solidnorth"
                  name="solidnorth"
                  value="Bike"
                />
                <label htmlFor="solidnorth"> Solid North</label>
                <br />
                <input
                  type="checkbox"
                  id="genesis"
                  name="genesis"
                  value="Bike"
                />
                <label htmlFor="genesis"> Genesis</label>
                <br />
                <input type="checkbox" id="partas" name="partas" value="Bike" />
                <label htmlFor="partas"> Partas</label>
                <br />
                <input type="checkbox" id="joybus" name="joybus" value="Bike" />
                <label htmlFor="joybus"> JoyBus</label>
                <br />
              </div>
            </div>
            <div>
              <h5>Bus Type</h5>
              <div>
                <input
                  type="checkbox"
                  id="firstclassexpress"
                  name="firstclassexpress"
                  value="Bike"
                />
                <label htmlFor="firstclassexpress"> First Class Express</label>
                <br />
                <input type="checkbox" id="deluxe" name="deluxe" value="Bike" />
                <label htmlFor="deluxe"> Deluxe</label>
                <br />
                <input
                  type="checkbox"
                  id="superdeluxe"
                  name="superdeluxe"
                  value="Bike"
                />
                <label htmlFor="superdeluxe"> Super Deluxe</label>
                <br />
                <input
                  type="checkbox"
                  id="luxurybus"
                  name="luxurybus"
                  value="Bike"
                />
                <label htmlFor="luxurybus"> Luxury Bus</label>
                <br />
              </div>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBookResult />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
