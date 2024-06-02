"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleSearch = () => {
    setIsLoading(true); // Set loading to true before search starts

    console.log(status, date);

    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    params.set("status", status);
    params.set("date", date);

    // Simulating a delay (you can replace this with your actual search logic)
    setTimeout(() => {
      replace(`${pathname}?${params}`);
      setIsLoading(false); // Set loading to false after search completes
    }, 1000); // Replace 1000 with your desired delay (milliseconds)
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white w-full shadow-lg p-3 rounded-lg flex justify-center sm:justify-between flex-wrap">
          <div>
            <label className="text-sm text-black ">Month </label>
            <br />
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              onKeyPress={handleKeyPress}
              className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md sm:w-[47vh] w-[40vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
            >
              <option value="">Select</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
              <option value="Partial Paid">Partial Paid</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-black ">Valid Date </label>
            <br />
            <input
              type="date"
              placeholder="Enter The Date "
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onKeyPress={handleKeyPress}
              autoComplete="off"
              className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md sm:w-[47vh] w-[40vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </div>

          <div>
            <br />
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="btn btn-neutral btn-sm text-white h-[6vh] sm:w-[47vh] w-[40vh]"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
