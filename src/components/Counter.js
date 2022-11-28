import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increament() {
    this.setState(
      //   {
      //     counter: this.state.counter + 1,
      //   },
      //   () => {
      //     console.log("Callback Function Called On state Change");
      //   }

      // we can also get provious state as under
      (preState) => ({
        counter: preState.counter + 1,
      })
    );
  }
  increamentFive() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <button
          onClick={() => {
            this.increamentFive();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
