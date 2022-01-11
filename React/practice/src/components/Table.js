import React, { Component } from "react";

class Table extends Component {
  render() {
    const { users } = this.props;

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
            <th scope="row">{users[0].id}</th>
            <td>{users[0].name}</td>
            <td>{users[0].surname}</td>
          </tr>
          <tr>
            <th scope="row">{users[1].id}</th>
            <td>{users[1].name}</td>
            <td>{users[1].surname}</td>
          </tr>
          <tr>
            <th scope="row">{users[2].id}</th>
            <td>{users[2].name}</td>
            <td>{users[2].surname}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
