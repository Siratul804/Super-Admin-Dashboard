"use client";

import React, { useState, useRef, useEffect } from "react";
import UpdateUser from "../UpdateUser/UpdateUser";
import UpdatePass from "../UpdateUser/UpdatePass";
import AddUser from "../AddUser/AddUser";
import Pagination from "../Pagination/Pagination";

const SearchDataTable = ({ searchDeal, PaginationCount, PaginationData }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  //press enter
  const buttonRef = useRef(null);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      buttonRef.current.click();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterPress);
    return () => {
      document.removeEventListener("keydown", handleEnterPress);
    };
  }, []);

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
    setShowResults(true);
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
                <option value="">Select</option>
                <option>Active</option>
                <option>Disable</option>
              </select>
            </div>
            <div>
              <br />
              <button
                onClick={handleSearch}
                ref={buttonRef}
                className="btn btn-neutral btn-sm text-white h-[6vh] w-[35vh]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </>

      <div className="py-5"></div>

      <section className="bg-white w-full shadow-lg rounded-lg">
        <div className="">
          <div className="p-3  flex justify-between  ">
            <h1 className="text-lg font-bold text-black ">Advance User List</h1>
            <AddUser />
          </div>
        </div>
        {/* ......... */}

        {showResults ? (
          <>
            <div className="overflow-x-auto w-full h-auto ">
              <table className="w-full border-collapse border border-slate-100">
                <thead>
                  <tr>
                    <th className="px-1 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Number
                    </th>
                    <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <>
                    {searchResults.length > 0 ? (
                      <>
                        {searchResults.map((val) => (
                          <>
                            <>
                              <tr>
                                <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                                  <div className="flex ">
                                    <div className="h-10 w-10">
                                      <img
                                        src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                                        alt="No Img"
                                        className="rounded-full"
                                      />
                                    </div>
                                    <div className="px-2 py-3   ">
                                      <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                        {val.name}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                                  <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                    {val.number}
                                  </p>
                                </td>
                                <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                                  <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                    {val.email}
                                  </p>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                  {val.status === "Active" ? (
                                    <>
                                      <div className=" p-0.2 bg-[#22c55e29] text-center rounded-md">
                                        <p className="text-center text-sm leading-4  font-bold  text-[#118d57]  tracking-wider">
                                          Active
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className=" p-0.2 bg-[#ff563029] text-center rounded-md">
                                        <p className="text-center text-sm leading-4  font-bold  text-[#b71d18]  tracking-wider">
                                          Disable
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                  <div className="flex">
                                    <div>
                                      <UpdateUser
                                        id={val.id}
                                        name={val.name}
                                        email={val.email}
                                        number={val.number}
                                        role={val.role}
                                        status={val.status}
                                      />
                                    </div>
                                    <div className="">
                                      <UpdatePass
                                        email={val.email}
                                        id={val.id}
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </>
                          </>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className="p-4">
                          <p>No data found</p>
                        </div>
                      </>
                    )}
                  </>
                </tbody>
              </table>
            </div>
            <Pagination PaginationCount={PaginationCount} />
          </>
        ) : (
          <>
            <div className="overflow-x-auto w-full h-auto ">
              <table className="w-full border-collapse border border-slate-100">
                <thead>
                  <tr>
                    <th className="px-1 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Number
                    </th>
                    <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white  ">
                  <>
                    {PaginationData.map((val) => (
                      <>
                        <>
                          <tr>
                            <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex ">
                                <div className="h-10 w-10">
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                                    alt="No Img"
                                    className="rounded-full"
                                  />
                                </div>
                                <div className="px-2 py-3   ">
                                  <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                    {val.name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                              <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                {val.number}
                              </p>
                            </td>
                            <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                              <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                {val.email}
                              </p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              {val.status === "Active" ? (
                                <>
                                  <div className=" p-0.2 bg-[#22c55e29] text-center rounded-md">
                                    <p className="text-center text-sm leading-4  font-bold  text-[#118d57]  tracking-wider">
                                      Active
                                    </p>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className=" p-0.2 bg-[#ff563029] text-center rounded-md">
                                    <p className="text-center text-sm leading-4  font-bold  text-[#b71d18]  tracking-wider">
                                      Disable
                                    </p>
                                  </div>
                                </>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex">
                                <div>
                                  <UpdateUser
                                    id={val.id}
                                    name={val.name}
                                    email={val.email}
                                    number={val.number}
                                    role={val.role}
                                    status={val.status}
                                  />
                                </div>
                                <div className="">
                                  <UpdatePass email={val.email} id={val.id} />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      </>
                    ))}
                  </>
                </tbody>
              </table>
            </div>
            <Pagination PaginationCount={PaginationCount} />
          </>
        )}
      </section>

      {/* <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            {result.name} - {result.status} - {result.number}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchDataTable;
