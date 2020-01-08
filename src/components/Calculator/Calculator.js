import React, { useState } from 'react'
import { specials, operators, numbers } from '../../data';
import math from '../math';
import './Calculator.scss';

function Calculator() {
    const [display, setDisplay] = useState('');

    console.log(math.evaluate('1+2*2'))
    return (
        <div className="container">
            <div className="display">{display}</div>;
            <div className="buttonsContainer">
                <section className="col-1">
                    {specials.map((special, index) => {
                        return <button value={specials} className="special-button">
                            {special}
                        </button>
                    })}


                    {numbers.map((num, index) => {
                        return <button value={num} className="number-button">
                            {num}
                        </button>
                    })}
                </section>
                <section className="col-2">
                    {operators.map((op, index) => {
                        return <button key={index} value={op.value} className="operator-button">
                            {op.char}
                        </button>
                    })}
                </section>
            </div>
        </div>

    )
}

export default Calculator;