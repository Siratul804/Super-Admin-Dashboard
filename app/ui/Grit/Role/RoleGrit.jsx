"use client";
import { addRole } from "@/app/lib/actions";
import { useState } from "react";
const RoleGrit = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");

  const [checkboxes, setCheckboxes] = useState([
    { id: 3, name: "create", isChecked: false },
    { id: 4, name: "edit", isChecked: false },
    { id: 5, name: "view", isChecked: false },
    // Add more checkboxes as needed
  ]);

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

    console.log(checkedItems); // Display in console

    await addRole(checkedItems, username, description);
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
      </div>
    </>
  );
};

export default RoleGrit;
