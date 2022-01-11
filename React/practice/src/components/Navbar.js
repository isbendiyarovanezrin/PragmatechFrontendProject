import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const btnStyle = {
      backgroundColor: "#282c34",
      color: "#fff",
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href="/"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  className="dropdown-item"
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Action
                </a>
                <a
                  className="dropdown-item"
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn my-2 my-sm-0"
              type="submit"
              style={btnStyle}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
