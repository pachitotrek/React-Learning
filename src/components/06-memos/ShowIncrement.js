import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log("me mostre");

    return (
        <button
         className="btn btn-primary"
         onClick={ ()=>{
            increment(5);
         }}
         >

             increment
            
        </button>
    )
}
)