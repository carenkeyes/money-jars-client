import React from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';

import RegistrationForm from '../RegistrationForm/registration-form';

export function RegistrationPage(props){
    return(
        <div>
            <h2>Ready to Sign Up?</h2>
            <RegistrationForm />
        </div>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(RegistrationPage);