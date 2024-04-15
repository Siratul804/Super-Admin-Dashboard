"use client";
import { useState } from "react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import View from "./MemberNavDetails/View";
import Edit from "./MemberNavDetails/Edit";
import Photo from "./MemberNavDetails/Photo";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const MemberDetalis = ({ MemberSpecificData, id }) => {
  const [selectedNav, setSelectedNav] = useState("view_member"); // State to track the selected navbar item

  const renderNavContent = () => {
    switch (selectedNav) {
      case "view_member":
        // Render General component
        return (
          <>
            <section className="p-[0vh]">
              <View MemberSpecificData={MemberSpecificData} />
            </section>
          </>
        );
      // Add more cases for other navbar items as needed
      case "edit_member":
        return (
          <>
            <section className="py-[0vh]">
              <Edit />
            </section>
          </>
        );
      case "member_photo":
        return (
          <>
            <section className="py-[0vh]">
              <Photo />
            </section>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="py-2"></div>
      <div className="p-3 bg-white shadow-lg rounded-lg flex justify-between ">
        <h1 className="font-bold text-black ">Member Details</h1>
        <section className="gym_details_nav flex flex-wrap ">
          <div
            className={`text-md flex cursor-pointer font-bold ${
              selectedNav === "view_member" &&
              "font-bold border-b-2 border-black text-black"
            }`}
            onClick={() => setSelectedNav("view_member")}
          >
            <p className="py-1 ">
              <BsFillPersonVcardFill />
            </p>
            <p className="pl-1">View Member</p>
          </div>
          {/* Add more navbar items with similar structure */}
          <div className="pl-4"></div>
          {/* Add more navbar items with similar structure */}
          <div
            className={`text-md flex  cursor-pointer font-bold ${
              selectedNav === "edit_member" &&
              "font-bold border-b-2 border-black text-black  "
            }`}
            onClick={() => setSelectedNav("edit_member")}
          >
            <p className="py-1 ">
              <FaUserEdit />
            </p>
            <p className="pl-1">Edit Member</p>
          </div>
          {/* Add more navbar items with similar structure */}
          <div className="pl-4"></div>
          {/* Add more navbar items with similar structure */}
          <div
            className={`text-md flex  cursor-pointer font-bold ${
              selectedNav === "member_photo" &&
              "font-bold border-b-2 border-black text-black  "
            }`}
            onClick={() => setSelectedNav("member_photo")}
          >
            <p className="py-1 ">
              <MdOutlineAddPhotoAlternate />
            </p>
            <p className="pl-1">Photo</p>
          </div>
        </section>
      </div>
      <section>{renderNavContent()}</section>
    </>
  );
};

export default MemberDetalis;
