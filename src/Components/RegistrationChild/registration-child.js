import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import Input from '../Input/input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import {Link} from 'react-router-dom';
import './registration-child.css';
import SelectInput from '../SelectInput/select-input';

const passwordLength = length({min: 7, max: 12});
const matchesPassword = matches('password');


export class RegistrationChild extends React.Component {
    constructor(){
        super()
    }

    onSubmit(values){
        const {username, password} = values;
        const user = {username, password};
        user.type = 'child';
        user.budget_id = this.props.budget_id;
        user.account = this.props.account
        console.log(user);
        return this.props
            .dispatch(registerUser(user))
    }

    render(){
        const catGroups = []
        
        for(let i=0; i< this.props.data.length; i++){
            catGroups.push({
                value: this.props.data[i].id,
                label: this.props.data[i].name
            })
        }
        console.log(`catGroups: ${catGroups[0].value}`)

        return (
            <div className='child-form-wrapper'>
                <div className='child-form'>
                    <h2>Register a Child Account</h2>
                    
                    <form  
                        className='register-child-form'
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                        <Field
                            component={Input}
                            type='text'
                            label='Username'
                            name='username'
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                        <Field
                            component={Input}
                            type='password'
                            label='Password'
                            name='password'
                            validate={[required, passwordLength, isTrimmed]}
                        />
                        <Field  
                            component={Input}
                            type='password'
                            label='Confirm Password'
                            name='passwordConfirm'
                            validate={[required, nonEmpty, matchesPassword]}
                        />
                        <Field 
                            component={SelectInput}
                            type='text'
                            label='Choose Category Group'
                            name='group_id'
                            options={catGroups}
                            onChange={this.props.onChange}
                        />
                        <button
                            type='submit'
                            disabled={this.props.pristine || this.props.submitting}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationChild);
