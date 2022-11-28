// import React from "react";

// function Greet() {
//   return <h1>Hello Nishant</h1>;
// }

export const Greet = (props) => {
  // const { name, children } = props;
  return (
    <>
      <h1>Hello {props.name}</h1>
      {props.children}
    </>
  );
};

//  Greet;
