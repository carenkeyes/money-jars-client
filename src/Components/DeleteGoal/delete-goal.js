import React from 'react';
import Input from '../Input/input';
import {Field, reduxForm} from 'redux-form';
import {updateGoal} from '../../actions/budget';

export class DeleteGoal extends React.Component{

    onSubmit(){
        const data = {}
        data.id = this.props.id
        console.log(data)
        return this.props
            .dispatch(updateGoal(data))
    }

    render(){
        if(this.props.editType === 'delete'){
            return(
                <div className="add-to-goal">
                <form
                        className='delete-goal-form'
                        onSubmit={() => this.props.onSubmit}>
                        <p>Are you sure you want to delete this goal?</p>
                        <button
                            className='submit-edit-goal click red'
                            type="submit">
                            Delete
                        </button>
                    </form>
                </div>
            )
        }
        return null;
    }
}

export default reduxForm({form: 'deleteGoal'})(DeleteGoal);