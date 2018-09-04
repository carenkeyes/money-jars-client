import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerChild} from '../../actions/users';
import Input from '../Input/input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import './registration-child.css';
import SelectInput from '../SelectInput/select-input';

const passwordLength = length({min: 7, max: 12});
const matchesPassword = matches('password');


export class RegistrationChild extends React.Component {

    onSubmit(values){
        console.log(values)
        const {username, password} = values;
        const user = {username, password};
        user.type = 'child';
        user.group_id = values.group_id.value,
        user.category_id = values.category_id.value,
        user.account = this.props.account
        user.budget_id = this.props.budget_id
        console.log(user);
        return this.props
            .dispatch(registerChild(user))
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
        console.log(this.props.categories)
        console.log(`account: ${this.props.account}`)

        return (
            <div className='child-form-wrapper'>
                <div className='child-form form-single'>
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
                        <h6>Select a category group </h6>
                        <Field 
                            component={SelectInput}
                            type='text'
                            name='group_id'
                            options={catGroups}
                            onChange={this.props.onChange}
                        />
                        <h6>Assign a category</h6>
                        <Field
                        component={SelectInput}
                            type='text'
                            name='category_id'
                            options={this.props.categories}
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
