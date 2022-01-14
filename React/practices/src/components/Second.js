import React, { Component } from "react";

class Second extends Component {
  constructor(props) {
    super(props);

    this.state = {
      second: 0,
    };
  }

  tickTock() {
    this.setState({ second: this.state.second + 1 });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tickTock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { second } = this.state;

    return (
      <div>
        <p className="text-center">{`Seconds: ${second}`}</p>
      </div>
    );
  }
}

export default Second;
