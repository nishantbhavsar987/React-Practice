import React from "react";
import Person from "./Person";

function List() {
  //   const names = ["Nishant", "Rahul", "Raj"];
  //   const nameList = names.map((item) => <h1>{item}</h1>);

  const persons = [
    {
      id: 1,
      name: "Nishant",
      age: 19,
    },
    {
      id: 2,
      name: "Hardik",
      age: 22,
    },
    {
      id: 3,
      name: "Raj",
      age: 20,
    },
  ];

  //   const personList = person.map((person) => {
  //     return (
  //       <h2>
  //         I Am {person.name}, My Age Is {person.age}
  //       </h2>
  //     );
  //   })
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default List;
/*A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists. */
// if we don't have any unique key in array of object we can use index of map mathod ===> array.map((item,index,array)=>{reutrn;}) //it's Dangeras
