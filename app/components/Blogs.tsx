import React from "react";
import Image from "next/image";

export default function Blogs() {
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
        <div className="w-full h-48 flex flex-col items-center gap-y-10">
          <div>
            <h5>"10 Must-Visit Destinations for Solo Travelers"</h5>
          </div>
          <div className="relative w-full h-72 sm:h-44 md:h-32 lg:h-44 xl:h-64 bg-no-repeat overflow-hidden">
            <Image
              src="/img/destinations/baguio.jpg"
              className="object-contain"
              fill={true}
              sizes="(max-width: 640px) 100vw, 50vw"
              alt="Image"
              priority
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
