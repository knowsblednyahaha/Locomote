import React from "react";
import Image from "next/image";

export default function Destination() {
  const destination = [
    {
      image: "/img/destinations/baguio.jpg",
      location: "Baguio",
      alt: "Baguio Image",
    },
    {
      image: "/img/destinations/coron.jpg",
      location: "Coron",
      alt: "Coron Image",
    },
    {
      image: "/img/destinations/siargao.jpg",
      location: "Siargao",
      alt: "Siargao Image",
    },
    {
      image: "/img/destinations/bohol.jpg",
      location: "Bohol",
      alt: "Bohol Image",
    },
    {
      image: "/img/destinations/cebu.jpg",
      location: "Cebu",
      alt: "Cebu Image",
    },
    {
      image: "/img/destinations/elnido.jpg",
      location: "El Nido",
      alt: "El Nido Image",
    },
    {
      image: "/img/destinations/manila.jpg",
      location: "Manila",
      alt: "Manila Image",
    },
    {
      image: "/img/destinations/puertoprincesa.jpg",
      location: "Puerto Princesa",
      alt: "Puerto Princesa Image",
    },
  ];

  return (
    <section className="max-w-[1440px] flex flex-col w-full h-content px-5 md:px-10 lg:px-20 m-auto">
      <div>
        <div className="pt-5 pb-10">
          <h4 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
            Popular Destination
          </h4>
          <p className="font-light text-sm">travel to a well-known location</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 md:gap-y-10 gap-x-5">
          {destination.map((item, i) => (
            <div
              className="w-full h-full pb-5 rounded-3xl shadow-xl shadow-black/40"
              key={i}
            >
              <div className="relative w-full h-32 sm:h-44 md:h-32 lg:h-44 xl:h-64 bg-no-repeat overflow-hidden">
                <Image
                  src={item.image}
                  className="rounded-3xl object-cover"
                  fill={true}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  alt={item.alt}
                  priority
                />
              </div>
              <div className="px-5 py-1">
                <span className="font-semibold">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="py-14 flex justify-center">
          <button className="w-64 h-14 md:w-80 h-12 md:h-14 text-sm lg:text-base bg-[#FE2F2F] rounded-3xl text-white">
            See all our popular destination
          </button>
        </div>
      </div>
    </section>
  );
}
