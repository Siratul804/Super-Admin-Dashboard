"use client";
import React, { useState } from "react";

import { test } from "@/app/lib/actions";

const TestGrit = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 3, name: "create", isChecked: false },
    { id: 4, name: "edit", isChecked: false },
    { id: 5, name: "view", isChecked: false },
    // Add more checkboxes as needed
  ]);

  const [checkedData, setCheckedData] = useState("");

  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      )
    );
  };

  const handleShowCheckedData = async () => {
    const checkedItems = checkboxes.filter((checkbox) => checkbox.isChecked);
    const checkedDataInfo = checkedItems
      .map((item) => `id: ${item.id}, name: ${item.name}`)
      .join(", ");
    console.log(checkedItems); // Display in console
    setCheckedData(checkedDataInfo); // Update state to display on the page
    await test(checkedItems);
  };

  return (
    <>
      <div>
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id}>
            <input
              type="checkbox"
              id={`checkbox-${checkbox.id}`}
              checked={checkbox.isChecked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            <label className="px-2" htmlFor={`checkbox-${checkbox.id}`}>
              {checkbox.name}
            </label>
          </div>
        ))}
        <div className="py-1"></div>
        <button
          className="btn btn-sm bg-white text-black hover:text-lime-50  "
          onClick={handleShowCheckedData}
        >
          Show Checked Data
        </button>
        {checkedData && (
          <>
            <div>
              <p className="font-bold text-black"> {checkedData}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TestGrit;
