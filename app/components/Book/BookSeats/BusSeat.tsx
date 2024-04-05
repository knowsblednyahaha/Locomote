"use client";
import { useState } from "react";

interface BusSeatProps {
  seatNumber: number;
  disabled?: boolean;
}

const BusSeat: React.FC<BusSeatProps> = ({ seatNumber, disabled = false }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSeatSelection = () => {
    if (!disabled) {
      setIsSelected(!isSelected);
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
      />
      <label
        htmlFor={`seat-${seatNumber}`}
        className={`flex justify-center items-center border border-black  w-10 h-10 min-[375px]:w-14 min-[375px]:h-14 lg:w-16 lg:h-16 rounded-2xl text-center leading-16 cursor-pointer ${
          isSelected ? " bg-[#FE2F2F] text-white " : ""
        } ${
          disabled
            ? "bg-[#747474] text-white cursor-no-drop cursor-not-allowed"
            : ""
        }`}
      >
        {seatNumber}
      </label>
    </div>
  );
};

export default BusSeat;
