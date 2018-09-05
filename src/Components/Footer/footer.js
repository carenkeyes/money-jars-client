import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

export default function Footer(){
    return (
        <div className='footer'>
            <div className='footer-credit'>
                <h4 className='footer-credit-text'>Created by Caren Keyes</h4>
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