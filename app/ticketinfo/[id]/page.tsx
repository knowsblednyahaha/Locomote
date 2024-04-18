import Header from "@/app/components/Payment/Header";
import TicketInfo from "@/app/components/ticketinfo/TicketInfo";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <TicketInfo />
    </>
  );
}
