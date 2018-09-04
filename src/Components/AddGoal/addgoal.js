import React, {PropTypes} from 'react';
import SelectInput from '../SelectInput/select-input';
import {createGoal} from '../../actions/budget';
import {Field, reduxForm, reset} from 'redux-form';
import Input from '../Input/input';
import Button from '../Button/button';
//import Button from '../Button/button';

import './addgoal.css'

const goalTypes = [
    {value: 'savings', label: 'Savings'},
    {value: 'spending', label: 'Spending'},
    {value: 'giving', label: 'Giving'},
]

export class AddGoal extends React.Component {
    /*constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }*/

    onSubmit(values){
        const userId = this.props.userId
        const {title, amount, category, imageurl} = values;
        const goal = {title, amount, category, imageurl};
        goal.amount = parseInt(goal.amount)*1000;
        goal.category = goal.category.value;
        return this.props
            .dispatch(createGoal(goal, userId))          
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
                                />
                                <Field
                                    component={Input}
                                    type='number'
                                    label='Amount'
                                    name='amount'
                                />
                            </div>
                            <div className='form-section'>
                                <h6> Choose category </h6>
                                <Field
                                    component={SelectInput}
                                    type='text'
                                    label='Category'
                                    name='category'
                                    options={goalTypes}
                                    min={0}
                                    step={0.01}
                                />
                                <Field
                                    component={Input}
                                    type='text'
                                    label='Image URL'
                                    name='imageurl'
                                />
                            </div>
                        </div>
                        <Button
                            type='submit'
                            className='form-button pink'
                            label='Create goal'
                        />

                    </form>
                </div>
                </div>
            )
        }

        return null;
    }
}

export default reduxForm ('add-goal-form')(AddGoal);