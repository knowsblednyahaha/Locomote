import BusSeat from "../Book/BusSeat";

const BusSeats = () => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="flex flex-row">
        <BusSeat seatNumber={1} disabled />
        <BusSeat seatNumber={2} />
        <div className="w-16 h-16"></div>
        <BusSeat seatNumber={3} disabled />
        <BusSeat seatNumber={4} disabled />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={5} disabled />
        <BusSeat seatNumber={6} />
        <BusSeat seatNumber={7} disabled />
        <BusSeat seatNumber={8} disabled />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={9} />
        <BusSeat seatNumber={10} />
        <BusSeat seatNumber={11} />
        <BusSeat seatNumber={12} disabled />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={13} disabled />
        <BusSeat seatNumber={14} disabled />
        <BusSeat seatNumber={15} />
        <BusSeat seatNumber={16} />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={17} />
        <BusSeat seatNumber={18} />
        <BusSeat seatNumber={19} />
        <BusSeat seatNumber={20} />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={21} />
        <BusSeat seatNumber={22} />
        <BusSeat seatNumber={23} />
        <BusSeat seatNumber={24} disabled />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={25} disabled />
        <BusSeat seatNumber={26} disabled />
        <BusSeat seatNumber={27} />
        <BusSeat seatNumber={28} />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={29} />
        <BusSeat seatNumber={30} />
        <BusSeat seatNumber={31} />
        <BusSeat seatNumber={32} />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={33} />
        <BusSeat seatNumber={34} />
        <BusSeat seatNumber={35} />
        <BusSeat seatNumber={36} />
      </div>
      <div className="flex flex-row">
        <BusSeat seatNumber={37} />
        <BusSeat seatNumber={38} />
        <BusSeat seatNumber={39} />
        <BusSeat seatNumber={40} />
      </div>
      <div className="flex flex-row">
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
