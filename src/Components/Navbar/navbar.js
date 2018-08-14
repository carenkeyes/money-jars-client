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
    return(
        <div className='navbar'>
            <Link to='/'>
                <button type="button">Home</button>
            </Link>
            <div className='log-buttons'>
                <button type="button">Switch User</button>
                <button type="button">Logout</button> 
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
});

export default connect(mapStatetoProps)(Navbar)
