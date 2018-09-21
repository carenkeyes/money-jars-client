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
    console.log(props.error)
    let serverError = props.error
    return(
        <div className='registration'>
            <Route exact path={`${props.match.url}/login`} render={(props)=><LoginForm {...props} serverError={serverError}/>} />
            <Route exact path={`${props.match.url}/signup`} component={RegistrationForm} />
        </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.user._id !==null,
    error: state.appState.serverErrorMessage,
});

export default connect(mapStatetoProps)(RegistrationPage);