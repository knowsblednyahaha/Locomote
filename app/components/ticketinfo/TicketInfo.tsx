"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Data {
  id: string;
}

const TicketInfo: React.FC<Data> = ({ id }) => {
  const search = useSearchParams();
  const seatId = search ? search.get("sIds") : null;
  const selectedSeatsId = seatId !== null ? seatId : "";
  console.log(selectedSeatsId);

  return (
    <section className="max-w-[1440px] w-full m-auto ">
      <div className="max-w-[1440px] w-full flex justify-center items-center py-5 px-5 md:px-10 lg:px-20">
        <div className="pt-10">
          <h1 className="text-2xl font-semibold">Ticket Info</h1>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default TicketInfo;
