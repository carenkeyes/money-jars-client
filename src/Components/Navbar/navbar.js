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
                <Button
                    className='home'
                    type='button'
                    label=''
                />
            </Link>
            <div className='nav-group'>
                <Link to={`/dashboard/child`}>
                    <Button 
                        type='button'
                        label='Child'
                        className='nav-button' 
                />
                </Link>
                <Link to={`/dashboard/parent`}>
                    <Button 
                        type='button'
                        label='Parent'
                        className='nav-button' 
                    />
                </Link>
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    //loggedIn: state.auth.currentUser !==null
});

export default connect(mapStatetoProps)(Navbar)
