import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="max-w-[1440px] h-[51.1vh] w-full w-full py-10 px-5 md:px-10 lg:px-20 z-20 m-auto">
      <div className="w-full flex">
        <div className="w-1/3">
          <div className="mb-5">
            <h3 className="text-3xl">Contact Us</h3>
          </div>
          <div>
            <h3 className="text-xl">Are you in need of assistance?</h3>
          </div>
        </div>
        <form action="" className="w-2/3">
          <div className="flex gap-x-10 pb-5">
            <div className="flex flex-col w-1/2 gap-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="border border-gray-500 rounded-xl h-[50px] pl-3"
                id="name"
              />
            </div>
            <div className="flex flex-col w-1/2 gap-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="border border-gray-500 rounded-xl h-[50px] pl-3"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 pb-5">
            <label htmlFor="message">Message</label>
            <textarea
              className="border border-gray-500 rounded-xl pl-3 pt-2"
              id="message"
              rows={4}
            />
          </div>
          <div className="text-center">
            <button className="w-[100px] h-[50px] bg-[#FE2F2F] text-white rounded-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
