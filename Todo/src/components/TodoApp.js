import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const input = document.querySelector("input");
    input.value = "";

    if (this.state.text.length === 0) return;

    const newItem = {
      text: this.state.text,
      id: (Math.random() * 1000).toFixed(),
    };

    this.setState({
      items: this.state.items.concat(newItem),
      text: "",
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="todo">
        <h1 className="fs-1">My To Do List</h1>
        <br />
        <form className="my-1" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            className="me-1"
            autoComplete="off"
            onChange={this.handleChange}
            placeholder="Title..."
          />
          <button type="submit" className="btn btn-primary ms-1">
            {`Add #${items.length + 1}`}
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default TodoApp;
