import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Header = () => {
    return (
        <>
            <header className='page-row'>
                <img src="icon.jpg" alt="logo" height="50px" width="50px" className='icon-logo' />
                <h2 className='page-name'>InstaClone</h2>
                <Link to="/uploads">
                    <img src="https://t4.ftcdn.net/jpg/01/28/14/71/240_F_128147104_X3FSbE9J0Si3b6TJteOsSwUaaVsZDfZb.jpg" className="page-img" alt='camera'></img>
                </Link>
            </header>
        </>
    )
}

export default Header
