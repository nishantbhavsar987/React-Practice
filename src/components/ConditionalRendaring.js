/** we have four conditional rendaring approches
 * if/else
 * Element Variable
 * Ternaru conditional operator
 * short circuit operator
 */

import React, { Component } from "react";

class ConditionalRendaring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }
  userLogin = () => {
    this.setState({
      isLogin: true,
    });
  };
  render() {
    // 1) if/else
    /*
        if (this.state.isLogin) {
        return  <h1>Thank You For Login</h1>;
        } else {
        return (
            <>
            <h1>Welcome Geust Please Login</h1>
            <button onClick={this.userLogin}>Login</button>
            </>
        );
        }
    */
    // 2) Element Variable
    /*
        let message;
        if (this.state.isLogin) {
        message = <h1>Thank You For Login</h1>;
        } else {
        message = (
            <>
            <h1>Welcome Geust Please Login</h1>
            <button onClick={this.userLogin}>Login</button>
            </>
        );
        }
        return <div>{message}</div>;
     */
    // 3) Ternary Operator
    /*
        return this.state.isLogin ? (
            <h1>Thank You For Login</h1>
        ) : (
        <>
            <h1>Welcome Geust Please Login</h1>
            <button onClick={this.userLogin}>Login</button>
        </>
        );
    */
    return this.state.isLogin && <h1>Thank You For Login</h1>;
  }
}
export { ConditionalRendaring };
