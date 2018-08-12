import React from 'react';
import {connect} from 'react-redux';
import { Link, Route, Redirect} from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/registration-form';
import LoginForm from '../LoginForm/login-form';
import Header from '../Header/header';
//import RegistrationPage from '../RegistrationPage/registration-page';



export function Home(props){
    if(props.loggedIn){
        return <Redirect to='/parent' />;
    }
    return (
        <div>
            <Header title="Money Jars"/>
            <section>
                <h2>Welcome</h2>
                <p>Blah blah blah</p>
            </section>
            <section>
                    <Route exact path={`${props.match.url}/login`} component={LoginForm} />
                    <Route exact path={`${props.match.url}/register`} component={RegistrationForm} />
                <Link to={`${props.match.url}/login`}>Login</Link>
                <Link to={`${props.match.url}/register`}>Register</Link>           
            </section>
        </div>
    );
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(Home)