"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";

import { useDebouncedCallback } from "use-debounce";
const SearchBox = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    // Set loading to true to show the loader
    setLoading(true);

    // Simulate an asynchronous action, like an API call
    setTimeout(() => {
      // After some time (simulated API call), set loading back to false
      setLoading(false);
    }, 400); // Change 2000 to your desired loading duration
  };

  const handleSearchName = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    params.set("name", e.target.value);

    replace(`${pathname}?${params}`);
  }, 300);

  const handleSearchNumber = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    params.set("number", e.target.value);

    replace(`${pathname}?${params}`);
  }, 300);

  const handleSearchStatus = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    params.set("status", e.target.value);

    replace(`${pathname}?${params}`);
  }, 300);
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white w-full shadow-lg p-3 rounded-lg flex justify-center sm:justify-between flex-wrap">
          <div>
            <label className="text-sm text-black ">Name </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name "
              name="name"
              onChange={handleSearchName}
              autocomplete="off"
              // className="input  input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[35vh]  "
              className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </div>
          <div>
            <label className="text-sm text-black ">Number </label>
            <br />
            <input
              type="number"
              placeholder="Enter Your Number "
              name="number"
              onChange={handleSearchNumber}
              autocomplete="off"
              // className="input input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[35vh]  "
              className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </div>
          <div>
            <label className="text-sm text-black ">Status </label>
            <br />
            <select
              name="status"
              onChange={handleSearchStatus}
              // className="select bg-white text-black border-black focus:outline-black focus:border-black select-sm w-[35vh]  "
              className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
            >
              <option disabled selected>
                Select
              </option>
              <option>Active</option>
              <option>Disable</option>
            </select>
          </div>
          <div>
            <br />
            <button
              className="btn btn-neutral btn-sm text-white h-[6vh] w-[35vh]"
              disabled={loading}
              onClick={handleClick}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
