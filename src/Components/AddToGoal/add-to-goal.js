import React from 'react';
import Input from '../Input/input';
import {Field, reduxForm} from 'redux-form';
import {updateGoal} from '../../actions/index.actions';

export class AddToGoal extends React.Component{
    constructor(){
        super()
        //this.onSubmitWithProps = this.onSubmitWithProps.bind(this)
    }

    onSubmit(values){
        console.log(values)
        console.log(this.props)
        this.onSubmitWithProps(values, this.props)
        .then(() => this.props.dispatch(this.props.closeOptions))
    }

   onSubmitWithProps(values, props){
        let amount=parseFloat(values.amount, 10)*1000
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
                            <label>How much would you like to add?</label>
                            <Field
                                component={Input}
                                className='edit-goal-input'
                                type='number'
                                id={this.props.id}
                                name='amount'
                                max={this.props.max}
                                step={this.props.step}
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