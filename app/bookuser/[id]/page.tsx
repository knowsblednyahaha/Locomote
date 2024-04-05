"use client";
import React from "react";
import Header from "../../components/Book/Header";
import BookUser from "../../components/Book/BookSeats/BookUser";

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <BookUser id={params.id} />
    </>
  );
}
