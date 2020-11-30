import React from 'react'
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
    
    const {state,increment,decrement,reset}=useCounter(100);


    return (
        <div>
            <h1>Counter with Hook {state}</h1>
            <hr></hr>
            <div className="d-flex flex-wrap justify-content-around">
            <button className="btn btn-primary" onClick={()=>increment(2)} >+1</button>
            <button className="btn btn-primary" onClick={()=>decrement()} >-1</button>
            <button className="btn btn-primary" onClick={reset} >Reset</button>
            </div>
        </div>
    )
}
