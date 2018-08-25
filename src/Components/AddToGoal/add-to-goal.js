import React from 'react';
import Input from '../Input/input';
import {Field, reduxForm} from 'redux-form';
import {updateGoal} from '../../actions/budget';

export class AddToGoal extends React.Component{

    onSubmit(values){
        console.log(values);
        const data = {}
        data.amount = parseInt(values.amount)
        data.id = this.props.id
        console.log(data)
        return this.props
            .dispatch(updateGoal(data))
    }

    render(){
        if(this.props.editType === 'add'){
            return(
                <div className="add-to-goal">
                <form
                        className='edit-goal-form'
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                    )}>
                        <Field
                            component={Input}
                            className='edit-goal-input'
                            type='number'
                            id={this.props.id}
                            label='How much would you like to add?'
                            name='amount'
                            InputProps={{inputProps: {min: 0, max: 10}}} 
                        />
                        <button
                            className='submit-edit-goal click green'
                            type="submit">
                            Add
                        </button>
                    </form>
                </div>
            )
        }
        return null;
    }
}

export default reduxForm({form: 'addToGoal'})(AddToGoal);