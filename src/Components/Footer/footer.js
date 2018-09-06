import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

export default function Footer(){
    return (
        <div className='footer'>
            <div className='footer-credit'>
                <p className='footer-credit-text'>
                    Created by <span className='footer-credit-name'>Caren Keyes</span></p>
            </div>
            <ul>
                <li>
                    <Link to={`$/register/login`}>Logout</Link>
                </li>
                <li>
                    <Link to={`/privacy`}>Privacy Policy</Link>
                </li>
            </ul>
        </div>
    )
}