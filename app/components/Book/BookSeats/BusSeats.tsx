import { useState } from "react";
import BusSeat from "./BusSeat";

interface PassengerNumber {
  passengerCount: number;
}

const BusSeats: React.FC<PassengerNumber> = ({ passengerCount }) => {
  const [selectedSeat, setSelectedSeat] = useState<number[]>([]);

  return (
    <div className="w-full flex flex-col items-center gap-y-2">
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={1}
          // disabled={passengerCount === 0 || true}
          passengerCount={passengerCount}
        />
        <BusSeat seatNumber={2} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={3} passengerCount={passengerCount} />
        <BusSeat seatNumber={4} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={5} passengerCount={passengerCount} />
        <BusSeat seatNumber={6} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={7} passengerCount={passengerCount} />
        <BusSeat seatNumber={8} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={9} passengerCount={passengerCount} />
        <BusSeat seatNumber={10} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={11} passengerCount={passengerCount} />
        <BusSeat seatNumber={12} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={13} passengerCount={passengerCount} />
        <BusSeat seatNumber={14} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={15} passengerCount={passengerCount} />
        <BusSeat seatNumber={16} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={17} passengerCount={passengerCount} />
        <BusSeat seatNumber={18} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={19} passengerCount={passengerCount} />
        <BusSeat seatNumber={20} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={21} passengerCount={passengerCount} />
        <BusSeat seatNumber={22} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={23} passengerCount={passengerCount} />
        <BusSeat seatNumber={24} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={25} passengerCount={passengerCount} />
        <BusSeat seatNumber={26} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={27} passengerCount={passengerCount} />
        <BusSeat seatNumber={28} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={29} passengerCount={passengerCount} />
        <BusSeat seatNumber={30} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={31} passengerCount={passengerCount} />
        <BusSeat seatNumber={32} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={33} passengerCount={passengerCount} />
        <BusSeat seatNumber={34} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={35} passengerCount={passengerCount} />
        <BusSeat seatNumber={36} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={37} passengerCount={passengerCount} />
        <BusSeat seatNumber={38} passengerCount={passengerCount} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={39} passengerCount={passengerCount} />
        <BusSeat seatNumber={40} passengerCount={passengerCount} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={41} passengerCount={passengerCount} />
        <BusSeat seatNumber={42} passengerCount={passengerCount} />
        <BusSeat seatNumber={43} passengerCount={passengerCount} />
        <BusSeat seatNumber={44} passengerCount={passengerCount} />
        <BusSeat seatNumber={45} passengerCount={passengerCount} />
      </div>
      {/* Add more rows and seats as needed */}
    </div>
  );
};

export default BusSeats;
