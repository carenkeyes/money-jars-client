import React from 'react';
import Input from '../Input/input';
import {Field, reduxForm} from 'redux-form';
import {updateGoal} from '../../actions/budget';

export class AddToGoal extends React.Component{
    constructor(){
        super()
        //this.onSubmitWithProps = this.onSubmitWithProps.bind(this)
    }

    onSubmit(values){
        console.log(values)
        console.log(this.props)
        this.onSubmitWithProps(values, this.props)
    }

   onSubmitWithProps(values, props){
        console.log(values)
        let amount=parseInt(values.amount)*1000
        console.log(amount)
        console.log(props.userId)
        console.log(props.goalId)
        return this.props.dispatch(updateGoal(props.goalId, props.userId, amount))
    }

   /* onSubmit(values){
        console.log(values);
        const data = {}
        data.amount = parseInt(values.amount)
        data.id = this.props.id
        user.id =
        console.log(data)
       // return this.props.dispatch(updateGoal(data))
    }*/

    render(){
        if(this.props.editType === 'add'){
            return(
                <div className="add-to-goal">
                <form
                        className='edit-goal-form'
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                        <div className='form-input-fields'>
                            <Field
                                component={Input}
                                className='edit-goal-input'
                                type='number'
                                id={this.props.id}
                                label='How much would you like to add?'
                                name='amount'
                                InputProps={{inputProps: {min: 0, max: 10}}} 
                            />
                        </div>
                        <button
                            className='submit-edit-goal form-button click green'
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