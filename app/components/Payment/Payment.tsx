"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../Book/sass/arrow.scss";
import BackButton from "../BackButton";
import useSWR from "swr";
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

  return response.json();
};

const Payment: React.FC<Data> = ({ id }) => {
  const paymentMethod = [
    {
      paymentName: "Credit Card",
      radioItem: "creditcard",
      logoImg: [
        { img: "/img/paymentlogo/Visa_logo.svg", alt: "Visa" },
        { img: "/img/paymentlogo/Mastercard_logo.svg", alt: "MasterCard" },
        {
          img: "/img/paymentlogo/American Express_logo.svg",
          alt: "AmericanExpress",
        },
      ],
    },
    {
      paymentName: "Paypal",
      radioItem: "paypal",
      logoImg: [{ img: "/img/paymentlogo/PayPal_logo.svg", alt: "Paypal" }],
    },
    {
      paymentName: "Gcash",
      radioItem: "gcash",
      logoImg: [{ img: "/img/paymentlogo/GCash_logo.svg", alt: "Gcash" }],
    },
    {
      paymentName: "Paymaya",
      radioItem: "paymaya",
      logoImg: [{ img: "/img/paymentlogo/Maya_logo.svg", alt: "Paymaya" }],
    },
    {
      paymentName: "Bayad Center",
      radioItem: "bayadcenter",
      logoImg: [
        { img: "/img/paymentlogo/Bayad_logo.svg", alt: "Bayad Center" },
      ],
    },
  ];

  const { data, error, isLoading } = useSWR(`/api/payment/${id}`, fetcher);

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

  return (
    <section className="max-w-[1440px] w-full px-5 md:px-10 lg:px-20 text-black m-auto pb-20">
      <div>
        <BackButton />
      </div>
      <div className="w-full mt-10 m-auto font-bold text-3xl text-center">
        Payment
      </div>
      <div className="w-full h-fit flex flex-col justify-center md:flex-row gap-x-5 lg:gap-x-10 gap-y-5 lg:px-10 py-5 mt-10 m-auto">
        <div className="w-full md:w-1/2 h-fit border border-black rounded-2xl ">
          <div className="flex justify-between border-b border-black px-10 py-5">
            <div className="text-xl">{data.bus[0].busCompany}</div>
            <div>{moment(data.departureTime).format("LL")}</div>
          </div>
          <div className="flex justify-between border-b border-black px-10 py-5">
            <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
              <div className="md:w-4/12">
                <span className="text-xl font-bold">
                  {moment(data.departureTime).tz("Asia/Manila").format("LT")}
                </span>
                <p className="uppercase">{data.route[0].location}</p>
              </div>
              <div className="w-full hidden md:flex flex-col justify-center items-center md:w-4/12 md:text-center px-5">
                <div className="w-full text-[#747474]">
                  <i className="gg-arrow-right"></i>
                </div>
              </div>
              <div className="md:w-4/12">
                <span className="text-xl font-bold">
                  {moment(data.arrivalTime).tz("Asia/Manila").format("LT")}
                </span>
                <p className="uppercase">{data.route[0].destination}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 border-b border-black px-10 py-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Bus Type:</div>
              <div className="font-semibold">{data.bus[0].type}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Estimate travel duration:</div>
              <div className="font-semibold">
                {data.route[0].traveltime} Hours{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col border-b border-black px-10 py-5">
            <div className="text-gray-500">Passenger Info:</div>
            <div className="flex justify-between px-5 py-2">
              <div className="text-gray-500">
                Passenger Name:{" "}
                <span className="font-semibold text-black">Daniel Zyrick</span>
              </div>
              <div className="text-gray-500">
                Seat Number: <span className="font-semibold text-black">2</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between px-10 py-5">
            <div>Number of total seats: 2</div>
            <div>
              Total: <span className="font-bold">₱1,478</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-fit flex flex-col gap-y-5">
          {paymentMethod.map((item, i) => (
            <label
              className="w-full border border-black rounded-2xl p-5 flex justify-between"
              key={i}
              htmlFor={item.radioItem}
            >
              <div className="w-full">
                <input type="radio" id={item.radioItem} name="modesofpayment" />
                <label className="ml-3 font-bold" htmlFor={item.radioItem}>
                  {item.paymentName}
                </label>
              </div>
              <div className="w-full flex justify-end">
                {item.logoImg.map((imgItem, i) => (
                  <div className="relative w-1/2 xl:w-1/3" key={i}>
                    <Image
                      priority
                      src={imgItem.img}
                      alt={imgItem.alt}
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className="w-full mt-10 text-center">
        <button className="w-56 h-12 bg-[#FE2F2F] rounded-3xl text-white">
          <Link href="">Submit payment</Link>
        </button>
      </div>
    </section>
  );
};

export default Payment;
