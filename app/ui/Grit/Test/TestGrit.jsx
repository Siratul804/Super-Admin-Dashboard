"use client";
import React, { useState } from "react";

const TestGrit = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  const handleCheckboxChange = (e) => {
    if (toggle) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="flex items-center space-x-4 flex-col ">
        <label className="flex items-center">
          <span className="mr-2">Toggle</span>
          <input
            type="checkbox"
            checked={toggle}
            onChange={handleToggleChange}
            className="toggle"
          />
        </label>

        <label className="flex items-center">
          <span className="mr-2">Checkbox</span>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            disabled={toggle}
            className="form-checkbox h-5 w-5 text-black"
          />
        </label>
      </div>
    </>
  );
};

export default TestGrit;
