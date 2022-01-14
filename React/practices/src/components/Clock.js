import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tickTock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tickTock() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const clockStyle = {
      border: "2px solid blue",
      textAlign: "center",
      padding: "10px",
    };

    const { date } = this.state;

    return (
      <div className="clock" style={clockStyle}>
        It is {date.toLocaleTimeString()}.
      </div>
    );
  }
}

export default Clock;
