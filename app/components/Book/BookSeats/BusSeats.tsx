import { useEffect, useState } from "react";
import BusSeat from "./BusSeat";

interface PassengerNumber {
  passengerCount: number;
  sendDataBookUser: (setSelectedSeats: number[]) => void;
  bookedSeats: number[];
}

const BusSeats: React.FC<PassengerNumber> = ({
  passengerCount,
  sendDataBookUser,
  bookedSeats,
}) => {
  const [selectedSeat, setSelectedSeat] = useState<number[]>([]);

  useEffect(() => {
    sendDataBookUser(selectedSeat);
  }, [sendDataBookUser, selectedSeat]);

  const handleSeatSelection = (seatNumber: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectedSeat((prevSelectedSeats) => [
        ...prevSelectedSeats,
        seatNumber,
      ]);
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
          disabled={bookedSeats.includes(1)}
          passengerCount={passengerCount}
          onSelect={handleSeatSelection}
          selectedSeat={selectedSeat}
        />
        <BusSeat
          seatNumber={2}
          disabled={bookedSeats.includes(2)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={3}
          disabled={bookedSeats.includes(3)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={4}
          disabled={bookedSeats.includes(4)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={5}
          disabled={bookedSeats.includes(5)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={6}
          disabled={bookedSeats.includes(6)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={7}
          disabled={bookedSeats.includes(7)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={8}
          disabled={bookedSeats.includes(8)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={9}
          disabled={bookedSeats.includes(9)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={10}
          disabled={bookedSeats.includes(10)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={11}
          disabled={bookedSeats.includes(11)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={12}
          disabled={bookedSeats.includes(12)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={13}
          disabled={bookedSeats.includes(13)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={14}
          disabled={bookedSeats.includes(14)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={15}
          disabled={bookedSeats.includes(15)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={16}
          disabled={bookedSeats.includes(16)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={17}
          disabled={bookedSeats.includes(17)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={18}
          disabled={bookedSeats.includes(18)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={19}
          disabled={bookedSeats.includes(19)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={20}
          disabled={bookedSeats.includes(20)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={21}
          disabled={bookedSeats.includes(21)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={22}
          disabled={bookedSeats.includes(22)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={23}
          disabled={bookedSeats.includes(23)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={24}
          disabled={bookedSeats.includes(24)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={25}
          disabled={bookedSeats.includes(25)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={26}
          disabled={bookedSeats.includes(26)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={27}
          disabled={bookedSeats.includes(27)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={28}
          disabled={bookedSeats.includes(28)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={29}
          disabled={bookedSeats.includes(29)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={30}
          disabled={bookedSeats.includes(30)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={31}
          disabled={bookedSeats.includes(31)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={32}
          disabled={bookedSeats.includes(32)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={33}
          disabled={bookedSeats.includes(33)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={34}
          disabled={bookedSeats.includes(34)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={35}
          disabled={bookedSeats.includes(35)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={36}
          disabled={bookedSeats.includes(36)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={37}
          disabled={bookedSeats.includes(37)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={38}
          disabled={bookedSeats.includes(38)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat
          seatNumber={39}
          disabled={bookedSeats.includes(39)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={40}
          disabled={bookedSeats.includes(40)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat
          seatNumber={41}
          disabled={bookedSeats.includes(41)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={42}
          disabled={bookedSeats.includes(42)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={43}
          disabled={bookedSeats.includes(43)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={44}
          disabled={bookedSeats.includes(44)}
          passengerCount={passengerCount}
          selectedSeat={selectedSeat}
          onSelect={handleSeatSelection}
        />
        <BusSeat
          seatNumber={45}
          disabled={bookedSeats.includes(45)}
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
