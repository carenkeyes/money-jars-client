import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

//import RegistrationForm from '../RegistrationForm/registration-form';
//import LoginForm from '../LoginForm/login-form';
import Header from '../Header/header';
//import RegistrationPage from '../RegistrationPage/registration-page';



export class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            register: false,
        }
    }

    handleClick = () => {
        this.setState({
            register: true,
        })
    }


    render(){
        let message = 
            <div className='home-message'>
                <p>Teach your kids to boss their money around!
                </p>
            </div>

        if(this.state.register){
            return <Redirect to='/register/signup' />
        }
        return (
            <div>
                {this.renderRedirect}
                <Header 
                    title='Money Jars' 
                    className='header-home'
                    leftImage='header-image home-left-image'
                    rightImage='header-image home-right-image'
                    but1Label='Sign Up Now'
                    but1Type='button'
                    but1Class='home-button pink'
                    but1OnClick={this.handleClick}
                    message={message}
                />
                <section>
                    <h2>Welcome</h2>
                    <p>Blah blah blah</p>
                </section>
                <section>
            
                </section>
            </div>
        );
}
}


/*<section>
        <Route exact path={`${props.match.url}/login`} component={LoginForm} />
        <Route exact path={`${props.match.url}/register`} component={RegistrationForm} />
    <Link to={`${props.match.url}/login`}>Login</Link>
    <Link to={`${props.match.url}/register`}>Register</Link>           
</section>*/

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(Home)