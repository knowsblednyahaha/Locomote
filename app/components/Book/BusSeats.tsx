import BusSeat from "../Book/BusSeat";

const BusSeats = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-2">
      {/* Row 1 */}
      <BusSeat seatNumber={1} disabled />
      <BusSeat seatNumber={2} />
      <BusSeat seatNumber={3} disabled />
      <BusSeat seatNumber={4} disabled />
      <BusSeat seatNumber={5} disabled />
      <BusSeat seatNumber={6} />
      <BusSeat seatNumber={7} disabled />
      <BusSeat seatNumber={8} disabled />
      <BusSeat seatNumber={9} />
      <BusSeat seatNumber={10} />
      <BusSeat seatNumber={11} />
      <BusSeat seatNumber={12} disabled />
      <BusSeat seatNumber={13} disabled />
      <BusSeat seatNumber={14} disabled />
      <BusSeat seatNumber={15} />
      <BusSeat seatNumber={16} />
      <BusSeat seatNumber={17} />
      <BusSeat seatNumber={18} />
      <BusSeat seatNumber={19} />
      <BusSeat seatNumber={20} />
      <BusSeat seatNumber={21} />
      <BusSeat seatNumber={22} />
      <BusSeat seatNumber={23} />
      <BusSeat seatNumber={24} disabled />
      <BusSeat seatNumber={25} disabled />
      <BusSeat seatNumber={26} disabled />
      <BusSeat seatNumber={27} />
      <BusSeat seatNumber={28} />
      <BusSeat seatNumber={29} />
      <BusSeat seatNumber={30} />
      <BusSeat seatNumber={31} />
      <BusSeat seatNumber={32} />
      <BusSeat seatNumber={33} />
      <BusSeat seatNumber={34} />
      <BusSeat seatNumber={35} />
      <BusSeat seatNumber={36} />
      <BusSeat seatNumber={37} />
      <BusSeat seatNumber={38} />
      <BusSeat seatNumber={39} />
      <BusSeat seatNumber={40} />
      <BusSeat seatNumber={41} disabled />
      <BusSeat seatNumber={42} />
      <BusSeat seatNumber={43} />
      <BusSeat seatNumber={44} disabled />
      <BusSeat seatNumber={45} disabled />
      {/* Add more rows and seats as needed */}
    </div>
  );
};

export default BusSeats;
