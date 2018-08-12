import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './navbar.css';

export function Navbar(){
    return (
            <div className='navbar'>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to={`/register/signup`}><button type="button">Register</button></Link>
                    </li>
                    <li>
                        <Link to={`/register/login`}><button type="button">Login</button></Link>
                    </li>
                </ul>
            </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
});

export default connect(mapStatetoProps)(Navbar)
