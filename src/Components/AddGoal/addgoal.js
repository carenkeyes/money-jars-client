import React, {PropTypes} from 'react';
import SelectInput from '../SelectInput/select-input';
import {createGoal} from '../../actions/budget';
import {Field, reduxForm, reset} from 'redux-form';
import Input from '../Input/input';
import Button from '../Button/button';
import {required, nonEmpty} from '../../validators';
//import Button from '../Button/button';

import './addgoal.css'

const goalTypes = [
    {value: 'saving', label: 'Savings'},
    {value: 'spending', label: 'Spending'},
    {value: 'giving', label: 'Giving'},
]

export class AddGoal extends React.Component {

    onSubmit(values){
        console.log('submit')
        const userId = this.props.userId
        const {title, amount, category, imageurl} = values;
        const goal = {title, amount, category, imageurl};
        goal.amount = parseFloat(goal.amount, 10)*1000;
        if(goal.category !== undefined){
            goal.category = goal.category.value;
        }else{goal.category = 'saving'}
        return this.props.dispatch(createGoal(goal, userId)) 
            .then(() => this.props.dispatch(this.props.closeForm))         
    }

    render(){
        if(this.props.addNew){
            return(
                <div className='wrapper'>
                <div className='add-goal'>
                    <h2>Add a new Goal</h2>
                    <form 
                        className='add-goal-form'
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                    )}>
                        <div className='double-form-section'> 
                            <div className='form-section'>
                                <Field
                                    component={Input}
                                    type='text'
                                    label='Name of goal'
                                    name='title'
                                    validate={[required, nonEmpty]}
                                />
                                <Field
                                    component={Input}
                                    type='number'
                                    label='How much does it cost?'
                                    name='amount'
                                    step={0.01}
                                    validate={[required, nonEmpty]}
                                />
                            </div>
                            <div className='form-section'>
                                <label> Choose category </label>
                                <Field
                                    component={SelectInput}
                                    type='text'
                                    label='Category'
                                    name='category'
                                    options={goalTypes}
                                />
                                <Field
                                    component={Input}
                                    type='text'
                                    label='Image URL (optional)'
                                    name='imageurl'
                                />
                            </div>
                        </div>
                        <Button
                            type='submit'
                            className='form-button pink'
                            label='Create goal'
                            disabled={this.props.pristine || this.props.submitting}
                        />

                    </form>
                </div>
                </div>
            )
        }

        return null;
    }
}

export default reduxForm ('add-goal-form', {enableReintialize: true})(AddGoal);