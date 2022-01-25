import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Icon() {
  const navigate = useNavigate();
  return (
    <>
      <FontAwesomeIcon
        icon={faTimes}
        className="mx-3 mt-1 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
    </>
  );
}

export default Icon;
