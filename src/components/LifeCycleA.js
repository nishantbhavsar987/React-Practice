import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nishant",
    };
    // console.log("LifeCycleA Constructor 1");
    console.log("Update LifeCycleA Constructor 1");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("LifeCycleA getDerivedFromProps 2");
    console.log("Update LifeCycleA getDerivedFromProps 2");
    return null;
  }

  componentDidMount() {
    // console.log("LifeCycleA componentDidMount 4");
    console.log("Update LifeCycleA componentDidMount 4");
  }

  shouldComponentUpdate() {
    console.log("Update LifeCycleA shouldComponentsUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevprops, prevState) {
    console.log("Update LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    // console.log("LifeCycleA componentDidMount 4");
    console.log("Update LifeCycleA componentDidUpdate 4");
  }
  changeState = () => {
    this.setState({
      name: "Nishant Bhavsar",
    });
  };
  render() {
    // console.log("LifeCycleA render 3");
    console.log("Update LifeCycleA render 3");
    return (
      <>
        <LifeCycleB />
        <button onClick={this.changeState}>Change State</button>
        <div>Life Cycle A</div>
      </>
    );
  }
}
