import React from 'react';
import Input from '../Input/input';
import {Field, reduxForm} from 'redux-form';
import {updateGoal, updateUserBalance} from '../../actions/index.actions';

export class WithdrawFromGoal extends React.Component{

    onSubmit(values){
        this.onSubmitWithProps(values, this.props)
        .then(() => this.props.dispatch(this.props.closeOptions))
    }

   onSubmitWithProps(values, props){
        const data = {}
        let amount=(-parseFloat(values.amount, 10)*1000)
        data.balance = amount;
        console.log(data)
        return this.props.dispatch(updateUserBalance(props.userId, data))
            .then(() => this.props.dispatch(updateGoal(props.goalId, props.userId, amount)))
    }

    render(){
        if(this.props.editType === 'withdraw'){
            return(
                <div className="add-to-goal">
                <form
                        className='edit-goal-form'
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                    )}>
                        <Field
                            component={Input}
                            className='edit-goal-input'
                            type='number'
                            id={this.props.id}
                            label='How much would you like to withdraw?'
                            name='amount'
                            max={this.props.max/1000}
                            step={0.01}
                        />
                        <button
                            className={`submit-edit-goal form-button click pink`}
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting}>
                            Withdraw
                        </button>
                    </form>
                </div>
            )
        }
        return null;
    }
}

export default reduxForm({form: 'withdrawFromGoal'})(WithdrawFromGoal);