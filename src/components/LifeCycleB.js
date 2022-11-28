import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nishant",
    };
    // console.log("LifeCycleB Constructor 1");
    console.log("Update LifeCycleB Constructor 1");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("LifeCycleB getDerivedFromProps 2");
    console.log("Update LifeCycleB getDerivedFromProps 2");
    return null;
  }

  componentDidMount() {
    // console.log("LifeCycleB componentDidMount 4");
    console.log("Update LifeCycleB componentDidMount 4");
  }

  shouldComponentUpdate() {
    console.log("Update LifeCycleB shouldComponentsUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevprops, prevState) {
    console.log("Update LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    // console.log("LifeCycleA componentDidMount 4");
    console.log("Update LifeCycleB componentDidUpdate 4");
  }
  render() {
    // console.log("LifeCycleB render 3");
    console.log("Update LifeCycleB render 3");
    return <div>Life Cycle B</div>;
  }
}
