"use client";
import React from "react";
import Header from "../../components/Book/Header";
import BookUser from "../../components/Book/BookSeats/BookUser";
import { usePathname } from "next/navigation";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export default function page({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useSWR(
    `/api/booking/${params.id}`,
    fetcher
  );
  return (
    <>
      <Header />
      <BookUser data={data} />
    </>
  );
}
