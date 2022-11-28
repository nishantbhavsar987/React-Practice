import React from "react";

function Person({ person }) {
  return (
    <h2>
      I Am {person.name}, My Age Is {person.age}
    </h2>
  );
}

export default Person;
