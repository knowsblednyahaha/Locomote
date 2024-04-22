import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogItems = [
    {
      img: "/img/blog/blog1.jpg",
      alt: "Blog-1-Image",
      title: "10 Must-Visit Destinations for Solo Travelers",
      desc: "Dive into the world of solo travel with our top picks for destinations that offer the perfect mix of adventure and solitude.",
    },
    {
      img: "/img/blog/blog2.jpg",
      alt: "Blog-2-Image",
      title: "The Ultimate Guide to Traveling on a Budget",
      desc: "Discover practical tips and tricks for maximizing your travel experience without breaking the bank.",
    },
    {
      img: "/img/blog/blog3.jpg",
      alt: "Blog-3-Image",
      title: "Exploring Hidden Gems: Off-the-Beaten-Path Adventures",
      desc: "Uncover the charm of lesser-known destinations that promise a unique and authentic travel experience.",
    },
  ];
  return (
    <section className="max-w-[1440px] w-full w-full py-20 px-5 md:px-10 lg:px-20 z-20 m-auto">
      <div className="flex flex-col justify-between items-center pb-20 ">
        <div className="w-5/6 text-center pb-5">
          <h3 className="text-5xl font-medium">
            Welcome aboard to the Locomote Blog, your ultimate destination for
            travel inspiration, tips, and stories.
          </h3>
        </div>
        <div className="w-1/2 text-center">
          <p>
            Whether you're a seasoned traveler or new to the road, our blog is
            here to accompany you on your journey, offering insights, advice,
            and a glimpse into the exciting world of travel.
          </p>
        </div>
      </div>
      <div className="w-full flex gap-x-10">
        {blogItems.map((data, i) => (
          <div className="w-1/3" key={i}>
            <Link href={""} className="flex flex-col">
              <div className="relative w-full h-[200px] mb-5">
                <Image
                  src={data.img}
                  className="w-full bg-no-repeat object-cover "
                  alt={data.alt}
                  fill={true}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-medium">{data.title}</span>
                <span>{data.desc}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Blog;
