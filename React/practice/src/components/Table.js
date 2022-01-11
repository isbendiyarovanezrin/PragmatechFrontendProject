import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table className="container mt-4 mb-4 table table-dark table-striped table-hover text-center">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
