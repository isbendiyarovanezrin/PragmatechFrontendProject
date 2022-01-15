import React, { Component } from "react";
import { Remarkable } from "remarkable";

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Hello, _you!_",
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getMarkdown() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Markdown Editor</h1>
        <h4>Input</h4>
        <label htmlFor="markdown-content">Enter markdown</label>
        <br />
        <textarea
          id="markdown-content"
          onChange={this.handleChange.bind(this)}
          defaultValue={this.state.value}
        ></textarea>
        <h4>Output</h4>
        <p id="content" dangerouslySetInnerHTML={this.getMarkdown()}></p>
      </div>
    );
  }
}

export default MarkdownEditor;
