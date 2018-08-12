import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../Input/input';


export class SimpleForm extends React.Component{
    onSubmit(){
        console.log('form submitted')
    }

    render(){
            return(
                <form>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <Field
                        component={Input}
                        type={this.props.type}
                        name={this.props.name}
                    />
                    <button
                        type="submit">
                        Add
                    </button>
                    <button>
                        Cancel
                    </button>
                </form>
            )
        }
}

export default reduxForm({
    form: 'simpleform',

})(SimpleForm)