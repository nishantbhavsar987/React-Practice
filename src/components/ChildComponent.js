import React from "react";

function ChildComponent(props) {
  //   return <button onClick={props.greetHandler}>Greet Parent</button>;
  return (
    <button onClick={() => props.greetHandler("Nishant")}>Greet Parent</button>
  );
}

export default ChildComponent;
