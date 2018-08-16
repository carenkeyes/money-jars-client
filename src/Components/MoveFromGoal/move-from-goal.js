import React from 'react';
import Select from 'react-select';
import Input from '../Input/input';
import {Field, reduxForm} from 'redux-form';

const goals = [
    {value: '1', label: 'Bicycle'},
    {value: '2', label: 'Christmas'},
    {value: '3', label: "Dad's birthday"}
]

export class MoveFromGoal extends React.Component{

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
                    <Field
                        component={Input}
                        type='number'
                        id={this.props.id}
                        label='How much would you like to move?'
                        name='amount'
                    />
                    <Select
                        options={goals}
                        label='Where are you moving your money?'
                        onChange={opt => console.log(opt.label, opt.value)}
                    />
                    <button
                        type="submit">
                        Move
                    </button>
                    <button
                        type="button">
                        Cancel
                    </button>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'moveFromGoal'})(MoveFromGoal);