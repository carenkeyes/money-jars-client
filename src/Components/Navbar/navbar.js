import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './navbar.css';

export function Navbar(){
    return (
        <div className='navbar'>
            <Link to='/home'>
                <button type="button">Home</button>
            </Link>
            <div className='log-buttons'>
                <Link to={`/register/signup`}>
                    <button type="button">Register</button>
                </Link>
                <Link to={`/register/login`}>
                    <button type="button">Login</button>
                </Link>
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
});

export default connect(mapStatetoProps)(Navbar)
