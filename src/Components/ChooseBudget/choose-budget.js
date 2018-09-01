
import React from 'react';
import Select from 'react-select';
import Input from '../Input/input';
import SelectInput from '../SelectInput/select-input';
import {Field, reduxForm} from 'redux-form';

const goals = [
    {value: '1', label: 'Bicycle'},
    {value: '2', label: 'Christmas'},
    {value: '3', label: "Dad's birthday"}
]

export class ChooseBudget extends React.Component{

    onSubmit(values){
        console.log(values);
    }

    render(){

            return(
                <div className="move-from-goal">
                <form
                        className='edit-goal-form'
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                    )}>
                        <div className='form-input-fields'>
                        <Field
                            component={Input}
                            className='edit-goal-input'
                            type='number'
                            id={this.props.id}
                            label='How much would you like to move?'
                            name='amount'
                        />
                        <Field
                            component={SelectInput}
                            type='text'
                            options={goals}
                            className='edit-goal-select'
                            label='Where are you moving your money?'
                            name='category'
                        />
                        </div>
                        <button
                            className='submit-edit-goal click green'
                            type="submit">
                            Move
                        </button>
                    </form>
                </div>
            )
        }
}

export default reduxForm({form: 'choose-budget'})(ChooseBudget);

/*import React from 'react';
import SelectInput from '../SelectInput/select-input';
import {Field, reduxForm} from 'redux-form';


export class ChooseBudget extends React.Component {
    constructor(props){
        super(props);
    }

    onSubmit(values){
        console.log(values);
    }


    render(){

        return(
            <div className='choose-budget'>
                <h2> Now select a YNAB budget to use </h2>
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
                        options={this.props.data}
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

export default reduxForm({form: 'choose-budget'})(ChooseBudget);*/