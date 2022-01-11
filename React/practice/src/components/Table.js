import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: "Nezi",
          surname: "Isbendiyarova",
        },

        {
          id: 2,
          name: "Salman",
          surname: "Salahov",
        },
        {
          id: 3,
          name: "Nuriye",
          surname: "Sahibov",
        },
      ],
    };
  }

  render() {
    const { users } = this.state;

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
