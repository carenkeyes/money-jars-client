import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

export default function Navbar(){
    return (
            <div className='navbar'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/parent'>Parent Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/child'>Child Account</Link>
                    </li>
                    <li>
                        <Link to='/privacy'>Privacy Policy</Link>
                    </li>
                </ul>
            </div>
    )
}