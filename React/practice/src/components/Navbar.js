import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }

  render() {
    const btnStyle = {
      backgroundColor: "#282c34",
      color: "#fff",
    };

    const { isVisible } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
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
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isVisible ? (
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Home
                    </a>
                  </li>
                ) : null}

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
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  style={btnStyle}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
