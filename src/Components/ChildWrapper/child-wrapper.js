import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Goal from '../Goal/goal';
import Child from '../Child/child';
import {updateToBudget} from '../../actions/index.actions';

import {fetchYnabCategoryBalance} from '../../actions/index.actions';

export class ChildWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            addNew: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.updateBudget = this.updateBudget.bind(this);
    }

    componentDidMount(){
        if(this.props.user.budget_id !== 'manual'){
            this.props.dispatch(fetchYnabCategoryBalance(this.props.user._id))
        }
    }

    handleClick(){
        this.setState({
            addNew: !this.state.addNew
        })
    }

    updateBudget(toBudget){
        console.log(toBudget)
        this.props.dispatch(this.updateBudget(toBudget))
    }

    render(){

        if(!this.props.hasUserInfo){
            return(
                <Redirect to={'/dashboard'} />
            )
        }

        let budgeted = 0;
        for(let i=0; i<this.props.budget.goals.length; i++){
            budgeted = budgeted+this.props.budget.goals[i].saved_amount
        }

        let toBudget;       
        toBudget=(this.props.budget.total)-budgeted;
        let maxToBudget=toBudget;
        toBudget=(toBudget/1000).toFixed([2])
        
        let goals;
        goals = this.props.budget.goals.map(goal =>
            <Goal 
                key={goal._id}
                category={goal.category}
                title={goal.title}
                amount={goal.goal_amount}
                saved={goal.saved_amount}
                imgUrl={goal.goal_image ? goal.goal_image: null}
                userId={this.props.user._id}
                max={toBudget}
             {...goal} />
        )

        let message;
        if(this.props.budget.goals.length===0){
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
                </div>
        }

        return(
            <Child
                title={`Hi ${this.props.user.username}!`}
                message={message}
                but1Label={this.state.addNew ? 'Close Form' : 'Add New Goal'}
                but1OnClick={this.handleClick}
                addNew={this.state.addNew}
                userId={this.props.user._id}
                goals={goals}
                toBudget={maxToBudget}
            />
        )
    }
}

const mapStatetoProps = state => ({
    hasUserInfo: state.user._id !==null,
    user: state.user,
    ynab: state.ynab,
    budget: state.budget,
});

export default connect(mapStatetoProps)(ChildWrapper)