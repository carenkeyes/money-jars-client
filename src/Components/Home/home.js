import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/registration-form';
import LoginForm from '../LoginForm/login-form';




export function Home(props){
    if(props.loggedIn){
        return <Redirect to='/parent' />;
    }
    return (
        <div>
            <section>
                <h2>Log In</h2>
                <LoginForm />
            </section>
            <section>
                <h2> Register </h2>
                <RegistrationForm />
            </section>
        </div>
    );
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(Home)