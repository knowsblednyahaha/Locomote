import React from "react";
import Header from "../components/Book/Header";
import SearchBooking from "../components/Book/BookSearch/SearchBooking";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getSchedule() {
  const response = await prisma.schedule.findMany({
    include: {
      bus: true,
      route: true,
    },
    orderBy: {
      departureTime: "desc",
    },
  });
  return response;
}

export default async function page() {
  const schedule = await getSchedule();
  schedule.forEach((sched) => {
    console.log(
      `Departure: ${sched.departureTime}, Arrival: ${sched.arrivalTime}`
    );
    console.log("Bus:");
    sched.bus.forEach((bus) => {
      console.log(`Bus Company: ${bus.busCompany}, Type: ${bus.type}`);
    });
    if (Array.isArray(sched.bus)) {
      console.log("Bus:");
      sched.bus.forEach((bus) => {
        console.log(`Bus Company: ${bus.busCompany}, Type: ${bus.type}`);
      });
    } else {
      console.error("sched.bus is not an array.");
    }
    console.log("Route:");
    if (Array.isArray(sched.route)) {
      sched.route.forEach((route) => {
        console.log(
          `Location: ${route.location}, Destination: ${route.destination}, Travel Time: ${route.traveltime}, Price: ${route.travelprice}`
        );
      });
    } else {
      console.error("sched.bus is not an array.");
    }
  });
  return (
    <>
      <Header />
      <SearchBooking />
    </>
  );
}
