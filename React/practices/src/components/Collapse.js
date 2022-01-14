import React, { Component } from "react";

class Collapse extends Component {
  render() {
    const collapseStyle = {
      width: "200px",
      margin: "0 auto",
    };

    const { children } = this.props;

    return (
      <div
        style={{
          textAlign: "center",
        }}
        className="container"
      >
        <p style={collapseStyle}>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            Toggle width collapse
          </button>
        </p>
        <div
          style={{
            minHeight: "50px",
          }}
        >
          <div
            className="collapse collapse-horizontal mt-2"
            id="collapseWidthExample"
          >
            {children._self.state.users[0].surname}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;
