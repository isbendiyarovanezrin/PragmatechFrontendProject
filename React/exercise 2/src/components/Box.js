// Çox da tam yazmamışam, sadəcə əsas hissələrə fikir verdim

import React, { useState, useEffect } from "react";

const Box = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { informations } = props;

  useEffect(() => {
    const value = prompt("Hello, hello! What's your name?");
    alert(`Welcome, ${value}!🙃`);
  }, []);

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        {informations.map((information) => (
          <>
            <div
              className="col-lg-4 mx-auto"
              style={{ height: "40%" }}
              key={information.id}
              onClick={() => {
                if (information.id === 1) return setOpen(!isOpen);
              }}
            >
              <div className="card text-center shadow-sm m-3">
                <img
                  src={information.imgSrc}
                  className="card-img-top"
                  alt={information.imgAlt}
                />
                <div className="card-body">
                  <h5 className="card-title">{information.title}</h5>
                  <p className="card-text" style={{ fontSize: "12px" }}>
                    {information.summary}
                  </p>
                  <p className="card-text text-uppercase">{information.tag}</p>
                </div>
              </div>
              {isOpen && information.id === 1 ? (
                <div
                  className="text-center shadow-sm bg-dark text-danger p-2"
                  style={{ borderRadius: "4px", cursor: "pointer" }}
                  key={information.id}
                >
                  <h5 className="card-title">{information.title}</h5>
                  <p className="card-text" style={{ fontSize: "12px" }}>
                    {information.summary}
                  </p>
                  <p className="card-text text-uppercase ">{information.tag}</p>
                </div>
              ) : null}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Box;
