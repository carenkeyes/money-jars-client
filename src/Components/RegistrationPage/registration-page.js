import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import './registration-page.css';

import RegistrationForm from '../RegistrationForm/registration-form';
import LoginForm from '../LoginForm/login-form';
import registrationChild from '../RegistrationChild/registration-child';

export function RegistrationPage(props){
    if(props.loggedIn){
        return <Redirect to="/dashboard" />;
    }

    return(
        <div className='registration'>
            <Route exact path={`${props.match.url}/login`} component={LoginForm} />
            <Route exact path={`${props.match.url}/signup`} component={RegistrationForm} />
            <Route exact path={`${props.match.url}/signup/child`} component={registrationChild} />
        </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(RegistrationPage);