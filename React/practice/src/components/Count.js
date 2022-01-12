import React, { useState } from "react";

const Count = (props) => {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="container d-flex justify-content-center mb-5">
      <h3 className="pt-3">{props.title}:</h3>
      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={decrementCount}
      >
        -
      </button>
      <p className="pt-3">{count}</p>
      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
};

export default Count;
