import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '../Button/button';
import {logoutUser} from '../../actions/index.actions';
import './navbar.css';

export class Navbar extends React.Component{
    constructor(){
        super()
    }

    /*logOut = () => {
        console.log('log out');
        this.props.dispatch(logoutUser());
    }*/

    render(){
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
                            label={this.props.loggedIn? '':'Sign Up'}
                            className='nav-button'
                        />
                    </Link>
                    <Link to={`/register/login`}>
                        <Button 
                            label={this.props.loggedIn ? 'Switch User':'Log In'}
                            className='nav-button'
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    loggedIn: state.user._id !== null,
});

export default connect(mapStatetoProps)(Navbar)
