import React, { useState } from "react";
import { numbers, operators, specials } from '../../../data';
import NumberButton from '../NumberButtons/NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [nums] = useState(numbers);
  const {setResult, currentNumber, setCurrentNumber} = props;

  const handleClick = (e) => {
    setCurrentNumber((prevState) => {
      return prevState + e.target.value;
    })
  }
  
  return (
    <React.Fragment>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    
       {nums.map((operator, index) => {
         return <button onClick={props.handleClick} value={props.num} className="number-button">
         {props.numbers}
       </button>
       })}
    </React.Fragment>
  );
};

export default Numbers;