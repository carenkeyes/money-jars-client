import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

export default function Footer(){
    return (
        <div className='footer'>
        <ul>
                    <li>
                        <p>Created by Caren Keyes</p>
                    </li>
                    <li>
                        <Link to={`/register`}>Register</Link>
                    </li>
                    <li>
                        <Link to={`$/register/login`}>Login</Link>
                    </li>
                    <li>
                        <Link to={`/privacy`}>Privacy Policy</Link>
                    </li>
                </ul>
        </div>
    )
}