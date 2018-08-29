import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {Link} from 'react-router-dom';
//import {Link} from 'react-router-dom';
import Input from '../Input/input';
import {fetchUserLogin} from '../../actions/users';


export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(fetchUserLogin(values.username, values.password));
    }

    render(){
        let error;
        if (this.props.error){
            error = (
                <div className='form-error' aria-live='polite'>
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className='user-form'>                
                <h2>Log in to your account</h2>
                <form
                    className='login-form'
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    {error}
                    <Field
                        component={Input}
                        type='text'
                        label='Username'
                        name='username'
                        id='username'
                        validate={[required, nonEmpty]}
                    />
                    <Field
                        component={Input}
                        type="password"
                        label="Password"
                        name="password"
                        id="password"
                        validate={[required,nonEmpty]}
                    />
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                </form>
                <p> or <Link to='/register/signup'>Create a new account</Link></p>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);