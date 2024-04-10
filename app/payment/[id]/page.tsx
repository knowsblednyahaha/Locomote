import React from "react";
import Header from "../../components/Payment/Header";
import Payment from "../../components/Payment/Payment";

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <Payment id={params.id} />
    </>
  );
}
