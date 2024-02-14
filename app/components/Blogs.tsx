import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      title: "10 Must-Visit Destinations for Solo Travelers",
      desc: "Dive into the world of solo travel with our top picks for destinations that offer the perfect mix of adventure and solitude.",
      image: "/img/blog/blog1.jpg",
      link: "",
    },
    {
      title: "The Ultimate Guide to Traveling on a Budget",
      desc: "Discover practical tips and tricks for maximizing your travel experience without breaking the bank.",
      image: "/img/blog/blog2.jpg",
      link: "",
    },
    {
      title: "Exploring Hidden Gems: Off-the-Beaten-Path Adventures",
      desc: "Uncover the charm of lesser-known destinations that promise a unique and authentic travel experience.",
      image: "/img/blog/blog3.jpg",
      link: "",
    },
  ];
  return (
    <section className="max-w-[1440px] flex flex-col w-full h-content px-5 md:px-10 lg:px-20 m-auto py-5">
      <div>
        <div className="pb-10">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
            Blogs
          </h3>
          <p className="font-light text-sm md:text-base lg:text-xl">
            become familiar with our website's blog.
          </p>
        </div>
        <div className="w-full h-full">
          {blogs.map((item, i) => (
            <div
              className="flex flex-col sm:flex-row items-center gap-y-10 py-10 border-t border-black last:border-b"
              key={i}
            >
              <div className="w-full sm:w-7/12 pr-10">
                <h5 className="font-semibold lg:text-xl xl:text-2xl pb-3">
                  {item.title}
                </h5>
                <p className="text-sm lg:text-base xl:text-lg xl:w-10/12">
                  {item.desc}
                </p>
              </div>
              <div className="relative w-full sm:w-3/12 h-52 sm:h-44 md:h-32 lg:h-40 xl:h-44 bg-no-repeat overflow-hidden">
                <Image
                  src={item.image}
                  className="object-cover"
                  fill={true}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  alt="Image"
                  priority
                />
              </div>
              <div className="w-full sm:w-2/12 text-center md:text-right md:pr-5 xl:pr-10">
                <GoArrowUpRight className="text-2xl lg:text-3xl xl:text-4xl hidden sm:inline-block" />
                <button className="sm:hidden w-40 h-12 text-sm bg-[#FE2F2F] rounded-3xl text-white">
                  <Link href="/blog">View</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
