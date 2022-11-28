import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    // const { name, children } = this.props;//we can also use props and states after destructuring

    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        {this.props.children}
      </>
    );
  }
}
