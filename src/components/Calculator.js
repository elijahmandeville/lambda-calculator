import React from 'react'
import { specials, operators, numbers  } from '../data';
import math from './math';

function Calculator() {
    return (
        <div>
            <div className="display">0</div>;
            {specials.map((special, index) => {
                return <button value={specials} className="special-button">
                    {special}
                </button>
            })}

            {operators.map((op, index) => {
                return <button key={index} value={op.value} className="operator-button">
                    {op.char}
                </button>
            })}

            {numbers.map((num, index) => {
                return <button value={num} className="number-button">
                    {num}
                </button>
            })}
        </div>

    )
}

export default Calculator;