import React from "react";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    {
      img: "/img/icons/star.jpg",
      text: "Effortless Booking",
      alt: "Star Image",
    },
    {
      img: "/img/icons/map.jpg",
      text: "Extensive Route Network",
      alt: "Map Image",
    },
    {
      img: "/img/icons/phone.jpg",
      text: "User-Friendly Interface",
      alt: "Phone Image",
    },
    {
      img: "/img/icons/card.jpg",
      text: "Secure Payment Options",
      alt: "Credit Card Image",
    },
    {
      img: "/img/icons/party.jpg",
      text: "Exclusive Deals and Discounts",
      alt: "Party Image",
    },
    {
      img: "/img/icons/call.jpg",
      text: "24/7 Customer Support",
      alt: "Caller Image",
    },
  ];

  return (
    <section className="max-w-[1440px] w-full h-content flex flex-col overflow-hidden m-auto py-20 px-5 md:px-10 lg:px-20">
      <div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center pt-10">
          <div className="text-center md:text-left w-full md:w-1/2 lg:w-3/5 pb-5 lg:mr-[-10rem] xl:mr-[-15rem] z-10">
            <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl md:leading-none font-bold">
              Our goal is to offer transportation solutions.
            </h3>
          </div>
          <div className="relative w-full md:w-1/2 lg:w-3/5 max-h-[400px] h-64 lg:h-[35vh] xl:h-[45vh] bg-no-repeat">
            <Image
              src="/img/aboutsection.jpg"
              className="rounded-3xl object-cover"
              fill={true}
              alt="About Section Image"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center pt-10 gap-y-10 md:gap-x-10">
          <div className="w-full md:w-10/12">
            <p className="text-lg">
              Start your journey in style with Locomotive, your go-to source for
              simple and stress-free bus reservations. We've developed an
              intuitive app that makes it simple for you to buy bus tickets
              whenever and wherever you choose because we understand how
              important your trip is.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-2/12">
            <button className="w-44 md:w-72 h-12 md:h-14 text-sm lg:text-base bg-[#FE2F2F] rounded-3xl text-white">
              View more
            </button>
          </div>
        </div>
        <div>
          <div className="pt-20">
            <h4 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
              Key Features
            </h4>
          </div>
          <div className="max-w-[1440px] m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-5 w-full pt-10">
            {features.map((item, i) => (
              <div className="flex flex-col items-center gap-y-3 pb-5" key={i}>
                <div className="relative w-full h-32 lg:h-44 bg-no-repeat overflow-hidden">
                  <Image
                    className="w-full h-full object-contain"
                    src={item.img}
                    fill={true}
                    alt={item.alt}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
