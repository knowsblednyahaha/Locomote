import React from "react";

export default function Payment() {
  return (
    <section className="max-w-[1440px] w-full px-5 md:px-10 lg:px-20 text-black m-auto">
      <div className="w-full mt-10 m-auto font-bold text-3xl text-center">
        Payment
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row gap-x-5 px-10 py-5 mt-10 m-auto">
        <div className="md:w-1/2 h-fit border border-black rounded-2xl ">
          <div className="flex justify-between border-b border-black px-10 py-5">
            <div className="text-xl">Victory Liner</div>
            <div>02/07/24</div>
          </div>
          <div className="flex justify-between border-b border-black px-10 py-5">
            <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
              <div className="md:w-4/12">
                <span className="text-xl font-bold">00-15</span>
                <p className="uppercase">Baguio City Bus Station</p>
              </div>
              <div className="w-full hidden md:flex flex-col justify-center items-center md:w-4/12 md:text-center px-5">
                <div className="w-full text-[#747474]">
                  <i className="gg-arrow-right"></i>
                </div>
              </div>
              <div className="md:w-4/12">
                <span className="text-xl font-bold">04-45</span>
                <p className="uppercase">Cubao Bus Station</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 border-b border-black px-10 py-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Bus Company:</div>
              <div className="font-semibold">02/07/24</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Estimate travel duration:</div>
              <div className="font-semibold">4hr 30mins</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Seat Number:</div>
              <div className="font-semibold">9, 10</div>
            </div>
          </div>
          <div className="flex justify-between px-10 py-5">
            <div>Number of total seats: 2</div>
            <div>
              Total: <span className="font-bold">₱1478</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-fit ">
          <div className="border border-black rounded-2xl">
            <div>Credit Card</div>
          </div>
          <div className="border border-black rounded-2xl">
            <div>Credit Card</div>
          </div>
          <div className="border border-black rounded-2xl">
            <div>Credit Card</div>
          </div>
          <div className="border border-black rounded-2xl">
            <div>Credit Card</div>
          </div>
          <div className="border border-black rounded-2xl">
            <div>Credit Card</div>
          </div>
        </div>
      </div>
    </section>
  );
}
