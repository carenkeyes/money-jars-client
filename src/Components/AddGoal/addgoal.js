import React, {PropTypes} from 'react';
import SelectInput from '../SelectInput/select-input';
import {createGoal} from '../../actions/budget';
import {Field, reduxForm} from 'redux-form';
import Input from '../Input/input';
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
        console.log(values)
        const userId = this.props.userId
        console.log(userId)
        const {title, amount, category, imageurl} = values;
        const goal = {title, amount, category, imageurl};
        goal.amount = parseInt(goal.amount);
        goal.category = goal.category.value;
        //goal.amount = num;
        //console.log(num);
        console.log(goal);
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
                        className="add-goal-form"
                        onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}> 
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
                            label='Image URL'
                            name='imageurl'
                        />
                        <button
                            type="submit">
                            Create goal
                        </button>
                        <button
                            type="button">
                            Cancel
                        </button>
                    </form>
                </div>
                </div>
            )
        }

        return null;
    }
}

export default reduxForm ()(AddGoal);