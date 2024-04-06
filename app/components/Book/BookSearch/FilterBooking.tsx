import React from "react";

export default function FilterBooking() {
  return (
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
            value="victoryliner"
          />
          <label htmlFor="victoryliner"> Victory Liner</label>
          <br />
          <input
            type="checkbox"
            id="solidnorth"
            name="solidnorth"
            value="solidnorth"
          />
          <label htmlFor="solidnorth"> Solid North</label>
          <br />
          <input type="checkbox" id="genesis" name="genesis" value="genesis" />
          <label htmlFor="genesis"> Genesis</label>
          <br />
          <input type="checkbox" id="partas" name="partas" value="partas" />
          <label htmlFor="partas"> Partas</label>
          <br />
          <input type="checkbox" id="joybus" name="joybus" value="joybus" />
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
          <input type="checkbox" id="luxurybus" name="luxurybus" value="Bike" />
          <label htmlFor="luxurybus"> Luxury Bus</label>
          <br />
        </div>
      </div>
    </div>
  );
}
