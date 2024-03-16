"use client";
import React, { useState, useEffect } from "react";

const App = () => {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const handleClick = (index) => {
      setCurrent(index);
    };

    return () => {
      // Cleanup function not needed as we're not adding any event listeners directly to options
    };
  }, [current]);

  const handleBarClick = (index) => {
    setCurrent(index);
  };

  const renderOptions = (barColor) => {
    const options = ["ONE", "TWO", "THREE"];
    return options.map((option, index) => (
      <div
        className="option"
        key={index}
        onClick={() => handleBarClick(index + 1)}
      >
        {option}
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="bar bar-grey">{renderOptions("grey")}</div>
      <div className="bar-outer">
        <div className="bar bar-purple">{renderOptions("purple")}</div>
      </div>
    </div>
  );
};

export default App;
