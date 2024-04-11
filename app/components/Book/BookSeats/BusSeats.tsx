import { useState } from "react";
import BusSeat from "./BusSeat";

interface PassengerNumber {
  passengerCount: number;
}

const BusSeats: React.FC<PassengerNumber> = ({ passengerCount }) => {
  const [selectedSeat, setSelectedSeat] = useState<number[]>([]);

  console.log(selectedSeat);

  const handleSeatSelection = (seatNumber: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectedSeat((prevSelectedSeats) => [
        ...prevSelectedSeats,
        seatNumber,
      ]);
    } else if (selectedSeat.length !== passengerCount) {
      selectedSeat.pop();
    } else {
      setSelectedSeat((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== seatNumber)
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-y-2">
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={1}
          // disabled={passengerCount === 0 || true}
          passengerCount={passengerCount}
          onSelect={handleSeatSelection}
          selectedSeat={selectedSeat}
        />
        <BusSeat
          seatNumber={2}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={3}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={4}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={5}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={6}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={7}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={8}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={9}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={10}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={11}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={12}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={13}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={14}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={15}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={16}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={17}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={18}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={19}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={20}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={21}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={22}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={23}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={24}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={25}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={26}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={27}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={28}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={29}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={30}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={31}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={32}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={33}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={34}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={35}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={36}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={37}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={38}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={39}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={40}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={41}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={42}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={43}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={44}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={45}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      {/* Add more rows and seats as needed */}
    </div>
  );
};

export default BusSeats;
