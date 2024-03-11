import React from "react";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdMusicalNotes } from "react-icons/io";
import "./sass/arrow.scss";
import Link from "next/link";
import BackButton from "../BackButton";

export default function SearchBooking() {
  return (
    <section className="max-w-[1440px] w-full m-auto px-5 md:px-10 lg:px-20 text-black">
      <div>
        <div>
          <BackButton />
        </div>
        <form className="w-full mt-5 flex flex-col md:flex-row justify-center gap-x-1 gap-y-3">
          <div className="border border-black md:w-3/12 lg:w-4/12 md:rounded-s-3xl">
            <input
              type="text"
              placeholder="From"
              className="p-5 w-full md:rounded-s-3xl focus:outline-none font-bold"
            />
          </div>
          <div className="border border-black md:w-3/12 lg:w-4/12">
            <input
              type="text"
              placeholder="To"
              className="p-5 w-full focus:outline-none font-bold"
            />
          </div>
          <div className="border border-black md:w-3/12 lg:w-3/12">
            <input
              type="date"
              name=""
              id=""
              className="p-5 w-full focus:outline-none font-bold"
            />
          </div>
          <div className="md:rounded-e-3xl md:border border-black px-5 md:w-3/12 lg:w-2/12 flex justify-center items-center">
            <button className="w-60 md:w-full h-12 md:h-content text-sm md:text-base bg-[#FE2F2F] rounded-xl text-white">
              Search
            </button>
          </div>
        </form>
        <div className="w-full mt-10 flex flex-col md:flex-row gap-x-5 gap-y-5">
          <div className="w-full hidden lg:block lg:w-3/12 border border-black rounded-2xl h-96 p-5">
            <div>
              <span className="text-lg font-semibold">Filters</span>
            </div>
            <div>
              <h5>Bus Company</h5>
              <div>
                <input
                  type="checkbox"
                  id="victoryliner"
                  name="victoryliner"
                  value="Bike"
                />
                <label htmlFor="victoryliner"> Victory Liner</label>
                <br />
                <input
                  type="checkbox"
                  id="solidnorth"
                  name="solidnorth"
                  value="Bike"
                />
                <label htmlFor="solidnorth"> Solid North</label>
                <br />
                <input
                  type="checkbox"
                  id="genesis"
                  name="genesis"
                  value="Bike"
                />
                <label htmlFor="genesis"> Genesis</label>
                <br />
                <input type="checkbox" id="partas" name="partas" value="Bike" />
                <label htmlFor="partas"> Partas</label>
                <br />
                <input type="checkbox" id="joybus" name="joybus" value="Bike" />
                <label htmlFor="joybus"> JoyBus</label>
                <br />
              </div>
            </div>
            <div>
              <h5>Bus Type</h5>
              <div>
                <input
                  type="checkbox"
                  id="firstclassexpress"
                  name="firstclassexpress"
                  value="Bike"
                />
                <label htmlFor="firstclassexpress"> First Class Express</label>
                <br />
                <input type="checkbox" id="deluxe" name="deluxe" value="Bike" />
                <label htmlFor="deluxe"> Deluxe</label>
                <br />
                <input
                  type="checkbox"
                  id="superdeluxe"
                  name="superdeluxe"
                  value="Bike"
                />
                <label htmlFor="superdeluxe"> Super Deluxe</label>
                <br />
                <input
                  type="checkbox"
                  id="luxurybus"
                  name="luxurybus"
                  value="Bike"
                />
                <label htmlFor="luxurybus"> Luxury Bus</label>
                <br />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-9/12 border border-black rounded-2xl h-fit px-10 py-5">
            <div className="w-full pb-3">
              <span className="text-sm flex flex-row gap-x-3 uppercase justify-center md:justify-start">
                Bus Company: Victory Liner - Deluxe
                <span className="md:flex flex-row gap-x-1 hidden ">
                  <FaWifi size={16} />
                  <PiTelevisionSimpleDuotone size={16} />
                  <TbAirConditioning size={16} />
                  <IoMdMusicalNotes size={16} />
                </span>
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-3 w-full text-center md:text-left">
              <div className="md:w-4/12">
                <span className="text-xl font-bold">00-15</span>
                <p className="uppercase">Baguio City Bus Station</p>
              </div>
              <div className="w-full hidden md:flex flex-col justify-center items-center md:w-3/12 md:text-center px-5">
                <span className="text-sm text-[#747474]">4hrs 30mins</span>
                <div className="w-full text-[#747474]">
                  <i className="gg-arrow-right"></i>
                </div>
              </div>
              <div className="md:w-4/12">
                <span className="text-xl font-bold">04-45</span>
                <p className="uppercase">Cubao Bus Station</p>
              </div>
              <div className="md:w-1/12 text-center">
                <span className="text-lg font-bold">739₱</span>
              </div>
              <div className="md:w-2/12 text-center">
                <button className="w-32 md:w-28 h-12 md:h-content text-sm md:text-base bg-[#FE2F2F] rounded-xl text-white">
                  <Link href="/bookuser">Book</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
