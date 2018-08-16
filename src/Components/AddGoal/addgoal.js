import React from 'react';
import {addGoal} from '../../actions/budget';
import {Field, reduxForm} from 'redux-form';
import Input from '../Input/input';
import Button from '../Button/button';

export class AddGoal extends React.Component {
    /*constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }*/

    onSubmit(values){
        console.log(values)
        const {title, amount, category, imageurl} = values;
        const goal = {title, amount, category, imageurl};
        goal.amount = parseInt(goal.amount);
        //goal.amount = num;
        //console.log(num);
        console.log(goal);
        return this.props
            .dispatch(addGoal(goal))            
    }

    render(){
        if(this.props.addNew){
            return(
                <div>
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
                            component={Input}
                            type='text'
                            label='Category'
                            name='category'
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
            )
        }

        return null;
    }
}

export default reduxForm ()(AddGoal);