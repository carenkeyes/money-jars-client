import React from 'react';
import Input from '../Input/input';
import {Field, reduxForm} from 'redux-form';
import {updateChildBalance} from '../../actions/index.actions';

export class GiveAllowance extends React.Component{
    constructor(){
        super()
        //this.onSubmitWithProps = this.onSubmitWithProps.bind(this)
    }

    onSubmit(values){
        this.onSubmitWithProps(values, this.props)
            .then(() => this.props.dispatch(this.props.updateState))
    }

   onSubmitWithProps(values, props){
        const data = {}
        let amount=parseFloat(values.amount, 10)*1000
        data.balance = amount;
        return this.props.dispatch(updateChildBalance(props.childId, data))            
    }

    render(){
        

        return(
            <div className="add-allowance">
            <form
                    className={`edit-goal-form ${this.props.username}-form`}
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <div className='form-input-fields'>
                        <label>Add funds for {this.props.username}</label>
                        <Field
                            component={Input}
                            className='edit-goal-input'
                            type='number'
                            id={this.props.childId}
                            name='amount'
                            step={0.01}
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
}

export default reduxForm({})(GiveAllowance);