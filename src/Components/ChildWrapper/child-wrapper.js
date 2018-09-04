import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Goal from '../Goal/goal';
import Child from '../Child/child';
import AddGoal from '../AddGoal/addgoal';

import {fetchYnabCategoryBalance, fetchUserBasicInfo} from '../../actions/index.actions';

export class ChildWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            addNew: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(fetchYnabCategoryBalance(this.props.user._id))
    }

    handleClick(){
        this.setState({
            addNew: !this.state.addNew
        })
    }

    render(){

        if(!this.props.loggedIn){
            return(
                <Redirect to='/register/login' />
            )
        }

        let goals;
        goals = this.props.user.goals.map(goal =>
            <Goal key={goal.title} {...goal} />
        )

        let budgeted = 0;

        for(let i=0; i<goals.length; i++){
            budgeted = budgeted+this.props.goals[i].saved_amount
        }

        console.log(this.props.budget)

        let toBudget;
        

        toBudget=(this.props.budget.balance)-budgeted;
        console.log(this.props.budget.balance)
        console.log(budgeted)
        toBudget=toBudget/1000
        
        console.log(`toBudget: ${toBudget}`)
        let message;
        if(!this.props.goals){
            message =
                <div className='budget-message'>
                    <p> You have <span className='amount-to-budget'>${toBudget}</span> that needs a job!</p>
                    <p> Would you like to make a savings goal now? </p>
                </div>
        }else{
            message = 
                <div className='budget-message'>
                    <p> You have <span className='amount-to-budget'>${toBudget}</span> </p>
                    <p> What should it do? </p>
                    <AddGoal 
                    form='new-goal'
                    addNew={this.state.addNew}
                    userId={this.props.user._id}
                />
                </div>
        }

        return(
            <Child
                title={`Hi ${this.props.user.username}!`}
                message={message}
                but1Label={this.state.addNew ? 'Cancel' : 'Add New Goal'}
                but1OnClick={this.handleClick}
                addNew={this.state.addNew}
                userId={this.props.user._id}
                goals={goals}
            />
        )

    }
}

const mapStatetoProps = state => ({
    loggedIn: state.user.data !==null,
    user: state.user.data,
    goals: state.user.data.goals,
    budget: state.ynab,
});

export default connect(mapStatetoProps)(ChildWrapper)