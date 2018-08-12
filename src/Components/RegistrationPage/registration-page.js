import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import RegistrationForm from '../RegistrationForm/registration-form';
import LoginForm from '../LoginForm/login-form';

export function RegistrationPage(props){
    return(
        <div>
            <Route exact path={`${props.match.url}/login`} component={LoginForm} />
            <Route exact path={`${props.match.url}/signup`} component={RegistrationForm} />
        </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(RegistrationPage);