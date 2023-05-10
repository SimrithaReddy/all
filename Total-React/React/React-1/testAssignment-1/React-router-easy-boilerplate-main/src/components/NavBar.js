import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li  className='index-link'><Link to="/">Index</Link></li>
                    <li  className='home-link'><Link to="/home">Home</Link></li>
                </ul>
            </nav>

        </>
    )
}