import React from 'react';
import {reduxForm} from 'redux-form';
import {deleteGoal} from '../../actions/budget';

export class DeleteGoal extends React.Component{
    constructor(){
        super()
        this.onSubmitWithProps = this.onSubmitWithProps.bind(this)
    }


    onSubmit = (dispatch) => {
        this.onSubmitWithProps(dispatch, this.props)
    }

    onSubmitWithProps = (dispatch, props) => {
        console.log('submit clicked')
        console.log(props.userId)
        console.log(props.goalId)
        return this.props.dispatch(deleteGoal(props.goalId, props.userId))
    }

    render(){

        if(this.props.editType === 'delete'){
            return(
                <div className="add-to-goal">
                    <form
                        className='edit-goal-form'
                        onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <label>Are you sure you want to delete this goal?</label>
                        <button
                        className={`submit-edit-goal form-button click red`}
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