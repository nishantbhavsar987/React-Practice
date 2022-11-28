import React, { Component } from "react";

/** There are four approch for binding this in class Components
 * 1) use this.changeMessage.bind(this) for add this in the funciton --best
 * 2) use this.changeMessage as constuctor property
 * 3) use this.changeMessage in arrow function which calling that function
 * 4) create changeMessage function using arrow function syntax --best
 */

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    // this.changeMessage = this.changeMessage.bind(this);
    this.state = {
      message: "Hello",
    };
  }

  // changeMessage() {
  //   this.setState({
  //     message: "GoodByy",
  //   });
  //   console.log(this);
  // }

  changeMessage = () => {
    this.setState({
      message: "GoodByy",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.changeMessage()}>Click</button> */}
        {/* <button onClick={this.changeMessage}>Click</button> */}
        <button onClick={this.changeMessage}>Click</button>
      </div>
    );
  }
}
