import React from "react";

function ReactFragment() {
  /* returning Two Perant Are Not Allow in React
    return (
        <div>
            Hello World
        </div>
        <h1>
                Title
        </h1>
    );
*/
  /* We can use React.Frangment or key attribute in this
  return (
    <React.Fragment key="unique">
      <h1>Title</h1>
      <p>This is Text from Paragram</p>
    </React.Fragment>
  );
  */
  // We can also use empty tag but disadvantage is we can not use key attribute in this
  return (
    <>
      <h1>Title</h1>
      <p>This is Text from Paragram</p>
    </>
  );
}

export default ReactFragment;
