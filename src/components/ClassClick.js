import React, { Component } from "react";

export default class ClassClick extends Component {
  clickHandler() {
    console.log("ClickHandler Clicked ");
  }
  render() {
    return <button onClick={this.clickHandler}>Click Me</button>;
  }
}
