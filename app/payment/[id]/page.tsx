"use client";
import React from "react";
import Header from "../../components/Payment/Header";
import Payment from "../../components/Payment/Payment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function page({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Payment id={params.id} />
      </QueryClientProvider>
    </>
  );
}
