import React from "react";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <React.Fragment>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {ops.map((op, index) => {
         return <button onClick={props.handleClick} value={props.value} className="operator-button">
         {props.operator}
       </button>
       })}
    </React.Fragment>
  );
};
