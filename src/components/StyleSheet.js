import React from "react";
import "./style.css";
function StyleSheet(props) {
  const className = props.className ? props.className : " ";
  return (
    <div>
      <h1 className={className}>Nishant</h1>
    </div>
  );
}

export default StyleSheet;
