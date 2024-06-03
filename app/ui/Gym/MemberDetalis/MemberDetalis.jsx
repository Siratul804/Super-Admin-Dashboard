"use client";
import { useState } from "react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import View from "./MemberNavDetails/View";
import Edit from "./MemberNavDetails/Edit";
import Photo from "./MemberNavDetails/Photo";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import Credit from "./MemberNavDetails/Credit";
import Invoice from "./MemberNavDetails/Invoice";
import Package from "./MemberNavDetails/Package";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LuPackagePlus } from "react-icons/lu";

const MemberDetalis = ({
  MemberSpecificData,
  id,
  packgaeData,
  user,
  paginationInvoice,
  countNumber,
}) => {
  const [selectedNav, setSelectedNav] = useState("view_member"); // State to track the selected navbar item

  const renderNavContent = () => {
    switch (selectedNav) {
      case "view_member":
        // Render General component
        return (
          <>
            <section className="p-[0vh]">
              <View
                MemberSpecificData={MemberSpecificData}
                packgaeData={packgaeData}
              />
            </section>
          </>
        );
      // Add more cases for other navbar items as needed
      case "edit_member":
        return (
          <>
            <section className="py-[0vh]">
              <Edit
                MemberSpecificData={MemberSpecificData}
                packgaeData={packgaeData}
              />
            </section>
          </>
        );
      case "member_credit":
        return (
          <>
            <section className="py-[0vh]">
              <Credit />
            </section>
          </>
        );
      case "member_photo":
        return (
          <>
            <section className="py-[0vh]">
              <Photo id={id} />
            </section>
          </>
        );
      case "member_invoice":
        return (
          <>
            <section className="py-[0vh]">
              <Invoice
                MemberSpecificData={MemberSpecificData}
                id={id}
                packgaeData={packgaeData}
                user={user}
                paginationInvoice={paginationInvoice}
                countNumber={countNumber}
              />
            </section>
          </>
        );
      case "member_package":
        return (
          <>
            <section className="py-[0vh]">
              <Package
                id={id}
                packgaeData={packgaeData}
                user={user}
                MemberSpecificData={MemberSpecificData}
              />
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
              selectedNav === "member_credit" &&
              "font-bold border-b-2 border-black text-black  "
            }`}
            onClick={() => setSelectedNav("member_credit")}
          >
            <p className="py-1 ">
              <AiFillDollarCircle />
            </p>
            <p className="pl-1">Credit</p>
          </div>
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

          {/* Add more navbar items with similar structure */}
          <div className="pl-4"></div>
          {/* Add more navbar items with similar structure */}
          <div
            className={`text-md flex  cursor-pointer font-bold ${
              selectedNav === "member_invoice" &&
              "font-bold border-b-2 border-black text-black  "
            }`}
            onClick={() => setSelectedNav("member_invoice")}
          >
            <p className="py-1 ">
              <LiaFileInvoiceDollarSolid />
            </p>
            <p className="pl-1">Invoice List</p>
          </div>

          {/* Add more navbar items with similar structure */}
          <div className="pl-4"></div>
          {/* Add more navbar items with similar structure */}
          <div
            className={`text-md flex  cursor-pointer font-bold ${
              selectedNav === "member_package" &&
              "font-bold border-b-2 border-black text-black  "
            }`}
            onClick={() => setSelectedNav("member_package")}
          >
            <p className="py-1 ">
              <LuPackagePlus />
            </p>
            <p className="pl-1">Change Package</p>
          </div>
        </section>
      </div>
      <section>{renderNavContent()}</section>
    </>
  );
};

export default MemberDetalis;
