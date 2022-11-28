import React, { Component } from "react";

export default class FormControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      topic: "",
    };
  }

  changeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        Username
        <input
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.changeValue}
        />
        <br />
        Comment
        <textarea
          name="comment"
          value={this.state.comment}
          onChange={this.changeValue}
        ></textarea>
        <br />
        Topic
        <select
          value={this.state.topic}
          name="topic"
          onChange={this.changeValue}
        >
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
