import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";
import Clock from "./components/Clock";
import List from "./components/List";
import Collapse from "./components/Collapse";
import Count from "./components/Count";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: {
        name: "John",
        surname: "Doe",
        age: 33,
        city: "Baku",
        color: "black",
      },

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
    const { users, list } = this.state;

    return (
      <div className="wrapper">
        <Navbar />
        <Clock />
        <Form email="nezi@gamil.com" password="b1i2l3m4i5r6em" />
        <Table users={users} />
        <List title="Lists" subtitle="Look down!" list={list} />
        <Collapse>
          <List />
        </Collapse>
        <Count title="Counter" />
      </div>
    );
  }
}

export default App;
