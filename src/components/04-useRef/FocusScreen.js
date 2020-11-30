import React, { useRef } from 'react'

export const FocusScreen = () => {
     const inpuRef = useRef();

     const handleClick=()=>{
         inpuRef.current.select();
     }

    return (
        <div className="p-5">
            <h1>FocusScreen</h1>
            <hr></hr>
            <input ref={inpuRef} className="form-control" placeholder="Su Nombre" />

            <button className="btn btn-primary mt-3" onClick={handleClick} >Click</button>
        </div>
    )
}
