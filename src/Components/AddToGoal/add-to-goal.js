import React from 'react';
import Input from '../Input/input';
import {Field, reduxForm} from 'redux-form';
import {updateGoal} from '../../actions/index.actions';

export class AddToGoal extends React.Component{

    onSubmit(values){
        this.onSubmitWithProps(values, this.props)
        .then(() => this.props.dispatch(this.props.closeOptions))
    }

    //form gets amount and dispatches action to update saved amount in goal
   onSubmitWithProps(values, props){
        let amount=parseFloat(values.amount, 10)*1000
        return this.props.dispatch(updateGoal(props.goalId, props.userId, amount))        
    }

    render(){
        if(this.props.editType === 'add'){
            return(
                <div className="add-to-goal">
                <form
                        className='edit-goal-form'
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                        <div className='form-input-fields'>
                            <label>How much would you like to add?</label>
                            <Field
                                component={Input}
                                className='edit-goal-input'
                                type='number'
                                id={this.props.id}
                                name='amount'
                                max={this.props.max}
                                step={0.01}
                            />
                        </div>
                        <button
                            className={`submit-edit-goal form-button click pink`}
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting}>
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