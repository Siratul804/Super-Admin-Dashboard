"use client";
import React, { useState } from "react";

const TestGrit = ({ searchDeal }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleInput3Change = (e) => {
    setInput3(e.target.value);
  };

  const handleSearch = () => {
    // Perform search/filter logic
    const filteredResults = searchDeal.filter((item) => {
      // Customize the condition based on your requirements
      return (
        item.name.toLowerCase().includes(input1.toLowerCase()) &&
        item.status.toLowerCase().includes(input2.toLowerCase()) &&
        item.number.toString().includes(input3)
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
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
                value={input1}
                onChange={handleInput1Change}
                autocomplete="off"
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
                value={input3}
                onChange={handleInput3Change}
                autocomplete="off"
                className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm text-black ">Status </label>
              <br />
              <select
                name="status"
                value={input2}
                onChange={handleInput2Change}
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
                onClick={handleSearch}
                className="btn btn-neutral btn-sm text-white h-[6vh] w-[35vh]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </>

      {/* Displaying search results */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            {result.name} - {result.status} - {result.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestGrit;
