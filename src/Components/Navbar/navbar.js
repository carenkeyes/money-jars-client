import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './navbar.css';

export function Navbar(props){
    if(!props.loggedIn){
        return (
            <div className='navbar'>
                <Link to='/'>
                    <button type="button">Home</button>
                </Link>
                <div className='nav-buttons'>
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
    return(
        <div className='navbar'>
            <Link to='/'>
                <button type="button">Home</button>
            </Link>
            <div className='nav-buttons'>
                <Link to={`/dashboard/child`}>
                    <button type="button">Child</button>
                </Link>
                <Link to={`/dashboard/parent`}>
                    <button type="button">Parent</button>
                </Link>
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
});

export default connect(mapStatetoProps)(Navbar)
