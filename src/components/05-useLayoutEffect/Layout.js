import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter();

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { data } = useFetch(url);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {

        console.log(pTag.current.getBoundingClientRect())

    }, [quote])


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr></hr>

            <div>
                <blockquote className="blockquote text-right">
                    <p className="mb-0" ref={pTag} >
                        {quote}
                    </p>
                </blockquote>

                <div>
                    <button className="btn btn-primary" onClick={
                        () => increment()}>
                        Siguiente Quote
                                </button>
                </div>

            </div>




        </div>
    )
}
