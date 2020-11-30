import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user, setuser } = useContext(UserContext);

    console.log(user);

    return (
        <div>
            <h1>Home Screen</h1>
            <hr></hr>
        </div>
    )
}
