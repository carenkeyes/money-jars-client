import React from 'react';
import SelectInput from '../SelectInput/select-input';
import {Field, reduxForm} from 'redux-form';


export class ChooseBudgetForm extends React.Component {
    constructor(props){
        super(props);
    }

    handleSubmit(values){
        console.log(values)
    }

    render(){
        console.log(this.props.options)
        return(
            <div className='choose-budget'>
                <form
                    className='choose-budget-form'
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                )}>
                    <Field
                        component={SelectInput}
                        type='text'
                        label='Budget'
                        name='budget'
                        options={this.props.options}
                    />
                    <button
                        type="submit">
                        Assign
                    </button>
                </form>
            </div>
        )
    }
}

export default reduxForm('choose-budget-form')(ChooseBudgetForm)