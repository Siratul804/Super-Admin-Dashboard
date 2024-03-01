"use client";
import { useState } from "react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { GiConfrontation } from "react-icons/gi";
import General from "./GymNavDetails/General";

const GymDetails = ({ GymSpecificData, id }) => {
  const [selectedNav, setSelectedNav] = useState("general"); // State to track the selected navbar item

  const renderNavContent = () => {
    switch (selectedNav) {
      case "general":
        // Render General component
        return (
          <>
            <section className="py-[8vh]">
              <General GymSpecificData={GymSpecificData} />
            </section>
          </>
        );
      // Add more cases for other navbar items as needed
      case "anotherNavItem":
        return <AnotherComponent />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="py-2"></div>
      <div className="p-3 bg-white shadow-lg rounded-lg">
        {GymSpecificData.map((val) => (
          <h1 key={val.id} className="text-black text-lg font-bold">
            {val.name}
          </h1>
        ))}
        <div className="py-5"></div>
        <section className="gym_details_nav flex flex-wrap">
          <div
            className={` text-md flex cursor-pointer font-bold ${
              selectedNav === "general" &&
              "font-bold border-b-2 border-black text-black"
            }`}
            onClick={() => setSelectedNav("general")}
          >
            <p className="py-1 ">
              <BsFillPersonVcardFill />
            </p>
            <p className="pl-1">General</p>
          </div>
          {/* Add more navbar items with similar structure */}
          <div className="pl-4"></div>
          {/* Add more navbar items with similar structure */}
          <div
            className={`text-md flex  cursor-pointer font-bold ${
              selectedNav === "anotherNavItem" &&
              "font-bold border-b-2 border-black text-black  "
            }`}
            onClick={() => setSelectedNav("anotherNavItem")}
          >
            <p className="py-1 ">
              <GiConfrontation />
            </p>
            <p className="pl-1">Another</p>
          </div>
        </section>
        <section>{renderNavContent()}</section>
      </div>
    </>
  );
};

const AnotherComponent = () => {
  return <div className="py-2">This is the Another Component</div>;
};

export default GymDetails;
