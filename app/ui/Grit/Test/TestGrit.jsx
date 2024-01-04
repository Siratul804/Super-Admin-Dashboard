"use client";
import React, { useState } from "react";

import { test } from "@/app/lib/actions";

const TestGrit = ({ roleData }) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");

  const role_id = roleData.map((val) => val.id);

  let id = Number(role_id);

  const next_id = id + 1;

  console.log(next_id);

  const [checkboxes, setCheckboxes] = useState([
    { id: 3, name: "create", role_id: next_id, isChecked: false },
    { id: 4, name: "edit", role_id: next_id, isChecked: false },
    { id: 5, name: "view", role_id: next_id, isChecked: false },
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
      .map(
        (item) => `id: ${item.id}, name: ${item.name}, role_id: ${item.role_id}`
      )
      .join(", ");
    console.log(checkedItems); // Display in console
    setCheckedData(checkedDataInfo); // Update state to display on the page
    await test(checkedItems, username, description);
  };

  return (
    <>
      <div class="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="description"
        >
          Description
        </label>
        <textarea
          placeholder="Description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
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
