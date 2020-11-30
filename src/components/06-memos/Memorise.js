import React, { useState } from 'react';
import '../02-useEffect/effect.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorise = () => {

    const { counter, increment } = useCounter(10);
    const [Show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter <Small value={counter} /> </h1>
            <hr></hr>

            <button className="btn btn-primary"
                onClick={() => {
                    increment();
                }}>
                +1
            </button>

            <button className="btn btn-outline-primary ml-2"
                onClick={() => {
                    setShow(!Show);
                }}>
                    {  JSON.stringify(Show) }
            </button>


        </div>
    )
}
