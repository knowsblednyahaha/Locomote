"use client";
import React from "react";
import Header from "../../components/Book/Header";
import BookUser from "../../components/Book/BookSeats/BookUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <BookUser id={params.id} />
      </QueryClientProvider>
    </>
  );
}
