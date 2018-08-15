import React from 'react';
import {addGoal} from '../../actions/goal';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../Input/input';

export class AddGoal extends React.Component {
    /*constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }*/

    onSubmit(values){
        console.log(values)
        const {title, amount, category} = values;
        const goal = {title, amount, category};
        console.log(goal);
        return this.props
            .dispatch(addGoal(goal))            
    }

    render(){
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
                    <button
                        type="submit">
                        Create goal
                    </button>
                </form>
            </div>
        )
    }
}

export default reduxForm ()(AddGoal);