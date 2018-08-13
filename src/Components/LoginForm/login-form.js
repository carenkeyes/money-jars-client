import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
//import {Link} from 'react-router-dom';
import Input from '../Input/input';
import {login} from '../../actions/auth';
import {required, nonEmpty} from '../../validators';
import {Link} from 'react-router-dom';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
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
            <div>                
                <h2>Log in to your account</h2>
                <p> or <Link to='/register/signup'>Create a new account</Link></p>
                <form
                    className='login-form'
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    {error}
                    <label htmlFor='username'>Username</label>
                    <Field
                        component={Input}
                        type='text'
                        name='username'
                        id='username'
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required,nonEmpty]}
                    />
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);