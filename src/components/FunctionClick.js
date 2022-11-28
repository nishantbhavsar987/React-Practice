import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      {/* we can not use parantheses in onclick event */}
    </div>
  );
}

export default FunctionClick;
