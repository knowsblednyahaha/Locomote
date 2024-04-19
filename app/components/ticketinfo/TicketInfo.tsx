"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import "../Book/sass/arrow.scss";
import Barcode from "./Barcode";
import BackButton from "../BackButton";
import moment from "moment";
import "moment-timezone";

interface Data {
  id: string;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
};

const TicketInfo: React.FC<Data> = ({ id }) => {
  const search = useSearchParams();
  const seatId = search.get("sIds");
  const selectedSeatsId = encodeURI(seatId || "");
  console.log(selectedSeatsId);

  const { data, error, isLoading } = useSWR(
    `/api/ticketinfo/${id}?sIds=${selectedSeatsId}`,
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
      <div className="flex items-center justify-center p-10">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-4 border-t-gray-800 rounded-full animate-spin"></div>
      </div>
    );

  if (!data) {
    return null;
  }

  console.log(data[0].ticket);

  return (
    <section className="max-w-[1440px] w-full m-auto ">
      <div className="max-w-[1440px] w-full flex flex-col px-5 md:px-10 lg:px-20">
        <div>
          <BackButton />
        </div>
        <div className="w-full pt-10 text-center">
          <h1 className="text-2xl font-semibold">Ticket Info</h1>
        </div>
        <div className="w-full flex justify-center gap-x-10">
          {data[0].ticket.map((info: any, i: number) => (
            <div
              className="w-2/6 border rounded-2xl mt-10  drop-shadow-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
              key={i}
            >
              <div className="flex justify-between border-b border-gray-300 p-5">
                <div>
                  <span>{data[0].bus[0].busCompany}</span>
                </div>
                <div>
                  <span>
                    {moment(data[0].bookingDate).tz("Asia/Manila").format("LL")}
                  </span>
                </div>
              </div>
              <div className="flex border-b border-gray-300 p-5">
                <div className="w-2/3 flex flex-col text-center">
                  <span>
                    {moment(data[0].departureTime)
                      .tz("Asia/Manila")
                      .format("LT")}
                  </span>
                  <span>{data[0].route[0].location}</span>
                </div>
                <div className="w-1/3 flex justify-center items-center px-5">
                  <i className="gg-arrow-right !h-[23px]"></i>
                </div>
                <div className="w-2/3 flex flex-col text-center">
                  <span>
                    {moment(data[0].arrivalTime).tz("Asia/Manila").format("LT")}
                  </span>
                  <span>{data[0].route[0].destination}</span>
                </div>
              </div>
              <div className="flex border-b border-gray-300 p-5">
                <div className="w-2/6 flex flex-col text-center">
                  <span>{data[0].bus[0].type}</span>
                  <span>Bus Type</span>
                </div>
                <div className="w-2/6 flex flex-col text-center">
                  <span>{data[0].route[0].traveltime} Hours</span>
                  <span>Travel Duration</span>
                </div>
                <div className="w-2/6 flex flex-col text-center">
                  <span>{data[0].route[0].travelprice}</span>
                  <span>Price</span>
                </div>
              </div>
              <div className="flex border-b border-gray-300 p-5">
                <div className="w-1/2 flex gap-x-2 justify-center">
                  <span>Fullname:</span>
                  <span>{info.fullname}</span>
                </div>
                <div className="w-1/2 flex gap-x-2 justify-center">
                  <span>Seat Number:</span>
                  <span>{info.seatNumber}</span>
                </div>
              </div>
              <div className="flex p-5">
                <div className="w-full flex flex-col gap-x-5 items-center">
                  <span className="font-bold">
                    Present this to the bus conductor.
                  </span>
                  <Barcode />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default TicketInfo;
