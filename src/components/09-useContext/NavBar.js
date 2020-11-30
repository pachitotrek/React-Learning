import React from 'react';
import { Link as NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="./">Use Context</NavLink>          
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact="true" activeclassname="active"  className="nav-link" to="./">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true" activeclassname="active" className="nav-link" to="./about">Features</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true" activeclassname="active" className="nav-link" to="./login">Pricing</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true" activeclassname="active" className="nav-link disabled" to="./">Disabled</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
