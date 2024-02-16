import React from "react";

export default function SearchBooking() {
  return (
    <section className="max-w-[1440px] w-full m-auto px-5 md:px-10 lg:px-20 text-black">
      <div>
        <div className="w-full mt-10 flex flex-col md:flex-row justify-center gap-x-1 gap-y-3">
          <div className="border border-black md:w-3/12 lg:w-4/12 md:rounded-s-3xl">
            <input
              type="text"
              placeholder="From"
              className="p-5 w-full md:rounded-s-3xl"
            />
          </div>
          <div className="border border-black md:w-3/12 lg:w-4/12">
            <input type="text" placeholder="To" className="p-5 w-full" />
          </div>
          <div className="border border-black md:w-3/12 lg:w-3/12">
            <input type="date" name="" id="" className="p-5 w-full" />
          </div>
          <div className="md:rounded-e-3xl md:border border-black px-5 md:w-3/12 lg:w-2/12 flex justify-center items-center">
            <button className="w-60 md:w-full h-12 md:h-content text-sm md:text-base bg-[#FE2F2F] rounded-xl text-white">
              send
            </button>
          </div>
        </div>
        <div className="w-full mt-10 flex flex-col md:flex-row gap-x-5">
          <div className="w-full md:w-2/6 lg:w-3/12 border border-black rounded-2xl h-96 p-5">
            <div>filter</div>
            <div>
              <h5>Bus Company</h5>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> Victory Liner</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> Solid North</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> Genesis</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> Partas</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> JoyBus</label>
                <br />
              </div>
            </div>
            <div>
              <h5>Bus Type</h5>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> First Class Express</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> Deluxe</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> Super Deluxe</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> Luxury Bus</label>
                <br />
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/6 lg:w-9/12 border border-black rounded-2xl h-fit p-5">
            available tickets
          </div>
        </div>
      </div>
    </section>
  );
}
