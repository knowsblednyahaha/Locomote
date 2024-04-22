import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="max-w-[1440px] w-full w-full flex flex-col justify-between items-center py-5 px-5 md:px-10 lg:px-20 z-20 m-auto">
      <div className="flex flex-col py-10">
        <div className="w-1/3">
          <h3 className="text-5xl font-medium">About Us</h3>
        </div>
        <div className="w-full">
          <div className="float-right w-2/3">
            <p className="text-lg">
              You may have a flawless travel experience with only a click at
              Locomote. Locomote is dedicated to make travel easy, convenient,
              and pleasurable for everyone. The company was founded with the
              goal of revolutionizing the way people purchase bus tickets.
            </p>
          </div>
        </div>
        <div className="w-full relative h-[400px] my-10">
          <Image
            src={"/img/busabout1.jpg"}
            className="w-full bg-no-repeat object-cover rounded-3xl"
            alt={"AboutImage"}
            fill={true}
            priority
          />
        </div>
      </div>
      <div className="w-full flex border-t border-b border-gray-500 py-16">
        <div className="w-1/3">
          <h5 className="text-2xl font-medium">Our Mission</h5>
        </div>
        <div className="w-2/3">
          <p className="text-lg">
            At Locomote, our mission is clear: to provide travelers with a
            stress-free and reliable way to book bus tickets, empowering them to
            explore new destinations and create lasting memories along the way.
            We believe that travel should be accessible to all, and we strive to
            make it easier than ever to embark on your next adventure.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
