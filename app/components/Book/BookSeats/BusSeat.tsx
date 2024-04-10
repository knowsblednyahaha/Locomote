"use client";
import { useEffect, useState } from "react";

interface BusSeatProps {
  seatNumber: number;
  disabled?: boolean;
  passengerCount: number;
  selectedSeat: number[];
  onSelect: (seatNumber: number, isSelected: boolean) => void;
}

const BusSeat: React.FC<BusSeatProps> = ({
  seatNumber,
  disabled = false,
  passengerCount,
  selectedSeat,
  onSelect,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  // console.log(isSelected);
  // console.log(passengerCount);

  useEffect(() => {
    if (passengerCount === 0) {
      setIsSelected(false);
    }
  }, [passengerCount]);

  const handleSeatSelection = () => {
    if (!disabled) {
      const newSelectedState = !isSelected;
      setIsSelected(newSelectedState);
      onSelect(seatNumber, newSelectedState);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="checkbox"
        id={`seat-${seatNumber}`}
        className="hidden"
        checked={isSelected}
        onChange={handleSeatSelection}
        disabled={
          passengerCount === 0
            ? true
            : isSelected
            ? false
            : selectedSeat.length === passengerCount
        }
      />
      <label
        htmlFor={`seat-${seatNumber}`}
        className={`flex justify-center items-center border border-black  w-10 h-10 min-[375px]:w-14 min-[375px]:h-14 lg:w-16 lg:h-16 rounded-2xl text-center leading-16${
          isSelected ? " bg-[#FE2F2F] text-white " : ""
        } ${
          disabled
            ? "bg-[#747474] text-white cursor-no-drop cursor-not-allowed"
            : ""
        }${
          passengerCount === 0
            ? "cursor-not-allowed"
            : isSelected
            ? "cursor-pointer"
            : selectedSeat.length === passengerCount
            ? "cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        {seatNumber}
      </label>
    </div>
  );
};

export default BusSeat;
