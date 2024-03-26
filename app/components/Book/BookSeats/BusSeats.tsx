import BusSeat from "./BusSeat";

const BusSeats = () => {
  return (
    <div className="w-full flex flex-col items-center gap-y-2">
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={1} disabled />
        <BusSeat seatNumber={2} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={3} disabled />
        <BusSeat seatNumber={4} disabled />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={5} disabled />
        <BusSeat seatNumber={6} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={7} disabled />
        <BusSeat seatNumber={8} disabled />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={9} />
        <BusSeat seatNumber={10} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={11} />
        <BusSeat seatNumber={12} disabled />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={13} disabled />
        <BusSeat seatNumber={14} disabled />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={15} />
        <BusSeat seatNumber={16} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={17} />
        <BusSeat seatNumber={18} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={19} />
        <BusSeat seatNumber={20} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={21} />
        <BusSeat seatNumber={22} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={23} />
        <BusSeat seatNumber={24} disabled />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={25} disabled />
        <BusSeat seatNumber={26} disabled />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={27} />
        <BusSeat seatNumber={28} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={29} />
        <BusSeat seatNumber={30} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={31} />
        <BusSeat seatNumber={32} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={33} />
        <BusSeat seatNumber={34} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={35} />
        <BusSeat seatNumber={36} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={37} />
        <BusSeat seatNumber={38} />
        <div className="w-10 h-10 lg:w-16 lg:h-16"></div>
        <BusSeat seatNumber={39} />
        <BusSeat seatNumber={40} />
      </div>
      <div className="flex flex-row gap-x-2">
        <BusSeat seatNumber={41} disabled />
        <BusSeat seatNumber={42} />
        <BusSeat seatNumber={43} />
        <BusSeat seatNumber={44} disabled />
        <BusSeat seatNumber={45} disabled />
      </div>
      {/* Add more rows and seats as needed */}
    </div>
  );
};

export default BusSeats;
