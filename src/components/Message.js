//With Functional components
/*export const Message = (props) => {
  return;
};

export default Message;

*/

// With Class components
import React, { Component } from "react";
export class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visistor",
    };
  }
  // const { name, children } = this.state;
  changeState() {
    this.setState({
      message: "Hello visistor",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeState();
          }}
          //we are not directly use this.changeState insteade of ()=>this.changeState(); in class components
        >
          Subscribe
        </button>
      </>
    );
  }
}
