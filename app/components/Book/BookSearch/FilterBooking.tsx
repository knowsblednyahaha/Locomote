import { SlidersHorizontal, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FilterBooking() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const busCompany = [
    { name: "Genesis", attribute: "genesis" },
    { name: "JoyBus", attribute: "joybus" },
    { name: "Partas", attribute: "partas" },
    { name: "Solid North", attribute: "solidnorth" },
    { name: "Victory Liner", attribute: "victoryliner" },
  ];
  const busType = [
    { name: "Deluxe", attribute: "deluxe" },
    { name: "First Class Express", attribute: "firstclassexpress" },
    { name: "Super Deluxe", attribute: "superdeluxe" },
    { name: "Luxury Bus", attribute: "luxurybus" },
  ];
  const router = useRouter();
  const currentUrl = window.location.href;
  console.log(currentUrl);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  console.log(selectedCheckboxes);
  const maxSelected = 2; // Change this value to set the maximum number of selected checkboxes

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      if (selectedCheckboxes.length < maxSelected) {
        setSelectedCheckboxes([...selectedCheckboxes, value]);
      } else {
        // Prevent further selection if the maximum limit is reached
        event.preventDefault();
      }
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((checkbox) => checkbox !== value)
      );
    }
  };

  const handleApplyFilters = () => {
    const query =
      selectedCheckboxes.length > 0
        ? `?busCompany=${selectedCheckboxes.join(",")}`
        : "";
    router.push(`/book${query}`);
  };

  const handleClearFilters = () => {
    setSelectedCheckboxes([]);
    router.push("/book");
  };

  return (
    <div className="w-fit border border-black rounded-2xl h-fit px-5 py-3">
      <button className="flex gap-x-2 items-center" onClick={toggleModal}>
        <SlidersHorizontal size={20} />
        <span className="text-sm font-semibold">Filters</span>
      </button>
      {isOpen && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            {/* Modal content */}
            <div className="bg-white rounded-2xl p-8 w-5/6 md:w-3/6 lg:w-2/6 z-20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <X />
                </button>
              </div>
              <div className="">
                <div>
                  <h5 className="font-semibold">Bus Company</h5>
                </div>
                <div>
                  {busCompany.map((item, i) => (
                    <div key={i} className="p-1 flex items-center">
                      <input
                        type="checkbox"
                        name={item.attribute}
                        id={item.attribute}
                        value={item.name}
                        className="w-4 h-4 text-blue-600 border-gray-900 rounded-2xl focus:ring-blue-500  focus:ring-2 mr-1"
                        checked={selectedCheckboxes.includes(`${item.name}`)}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor={item.attribute}
                        className="ms-2 text-gray-900 "
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div>
                  <h5 className="font-semibold pt-5">Bus Type</h5>
                </div>
                <div>
                  {busType.map((item, i) => (
                    <div key={i} className="p-1 flex items-center">
                      <input
                        type="checkbox"
                        name={item.attribute}
                        id={item.attribute}
                        value={item.name}
                        className="w-4 h-4 text-blue-600 border-gray-900 rounded-2xl focus:ring-blue-500  focus:ring-2 mr-1"
                      />
                      <label
                        htmlFor={item.attribute}
                        className="ms-2 text-gray-900 "
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="pt-5 w-full flex flex-col md:flex-row gap-y-5 gap-x-5">
                  <button
                    className="w-full md:w-1/2 h-12 md:h-content text-sm md:text-base bg-[#FE2F2F] rounded-xl text-white "
                    onClick={handleApplyFilters}
                  >
                    Search Filters
                  </button>
                  <button
                    className="w-full md:w-1/2 h-12 md:h-content text-sm md:text-base bg-white border-black rounded-xl text-black border border-black"
                    onClick={handleClearFilters}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-0"></div>
          </div>
        </>
      )}
    </div>
  );
}
