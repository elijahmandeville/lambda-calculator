import React from "react";
import { specials } from '../../../data'
import SpecialButton from './SpecialButton';

const Specials = (props) => {
  const [commands] = useState(specials);

  const handleClick = (e) => {
    console.log(e.target.value, 'clicked a special operator');
  }

  return (
    <>
      {commands.map((command, index) => {
        return <button onClick={props.handleClick} value={props.value} className="special-button">
        {props.command}
      </button>
      })}
    </>
  );
};
