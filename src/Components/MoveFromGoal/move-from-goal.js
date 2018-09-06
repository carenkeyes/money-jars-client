
import React from 'react';
import Select from 'react-select';
import Input from '../Input/input';
import SelectInput from '../SelectInput/select-input';
import {Field, reduxForm} from 'redux-form';
import {updateGoal} from '../../actions/index.actions'


export class MoveFromGoal extends React.Component{

    onSubmit(values){
        console.log(values);
        this.onSubmitWithProps(values, this.props)
        .then(() => this.props.dispatch(this.props.closeOptions))
    }

    onSubmitWithProps(values, props){
        let amountToAdd=parseInt(values.amount)*1000;
        let amountToRemove=-amountToAdd;
        let addGoal=values.category.value;
        let removeGoal=props.goalId;
        console.log(addGoal)
        console.log(removeGoal)
        console.log(amountToRemove)
        return this.props
            .dispatch(updateGoal(addGoal, props.userId, amountToAdd))
            .then(() => this.props.dispatch(updateGoal(removeGoal, props.userId, amountToRemove)))
    }

    render(){

        console.log(this.props.goalOptions)

        if(this.props.editType === 'move'){
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
                        <label>Where are you moving your money?</label>
                        <Field
                            component={SelectInput}
                            type='text'
                            options={this.props.goalOptions}
                            className='edit-goal-select'
                            name='category'
                        />
                        </div>
                        <button
                        className={`submit-edit-goal form-button click ${this.props.category}`}
                            type="submit">
                            Move
                        </button>
                    </form>
                </div>
            )
        }
        return null;
    }
}

export default reduxForm({form: 'moveFromGoal'})(MoveFromGoal);