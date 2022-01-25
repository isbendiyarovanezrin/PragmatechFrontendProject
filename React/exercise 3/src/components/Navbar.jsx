import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-around border-2 border-lime-500 p-2 text-lime-500 bg-lime-100">
      <Link to="/">Home</Link>
      <Link
        to={{
          pathname: "/about",
          search: "?sort=surname",
          hash: "#i-am-hash",
        }}
        state={{ active: "true" }}
      >
        About
      </Link>
      <NavLink
        to="/team"
        style={({ isActive }) => ({
          color: isActive ? "red" : "inherit",
        })}
        onClick={() => {
          alert("Bu yazı link üzərindən yaranıb.");
        }}
      >
        Team
      </NavLink>
    </nav>
  );
}

export default Navbar;
