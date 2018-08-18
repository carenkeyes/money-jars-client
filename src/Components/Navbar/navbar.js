import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '../Button/button';
import './navbar.css';

export function Navbar(props){
    if(!props.loggedIn){
        return (
            <div className='navbar'>
                <Link to='/'>
                    <Button
                        className='home'
                        type='button'
                        label=''
                    />
                </Link>
                <div className='nav-group'>
                    <Link to={`/register/signup`}>
                        <Button 
                            type="button" 
                            label='Sign Up'
                            className='nav-button'
                        />
                    </Link>
                    <Link to={`/register/login`}>
                        <Button 
                            type="button" 
                            label='Log In'
                            className='nav-button'
                        />
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
            <div className='nav-group'>
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
