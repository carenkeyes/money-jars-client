import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/registration-form';
import LoginForm from '../LoginForm/login-form';




export function Home(props){
    if(props.loggedIn){
        return <Redirect to='/parent' />;
    }
    return (
        <div>
            <section>
                <h2>Welcome</h2>
                <p>Blah blah blah</p>
            </section>
            <section>
                <Router>
                    <Switch>
                        <Route exact path="/" component={RegistrationForm}/>
                        <Route exact path="/login" component={LoginForm} />
                    </Switch>
                </Router>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Log In</Link>                
            </section>
        </div>
    );
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(Home)