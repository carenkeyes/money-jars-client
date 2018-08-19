import React from 'react';
import {connect} from 'react-redux';
import Goal from '../Goal/goal';
import Header from '../Header/header';
import AddGoal from '../AddGoal/addgoal';
import './child.css';

export class Child extends React.Component{
    constructor(){
        super()
        this.state = {
            addNew: false,
            label: 'New Goal'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('edit state ran');
        if(this.state.addNew){
            this.setState({
                addNew: false,
                label: 'New Goal'
            })
        }
        else if(!this.state.addNew){
            this.setState({
                addNew: true,
                label: 'Close'
        })}
    }

    render(){

        let goals = this.props.goals.map(goal =>
            <Goal key={goal.title} {...goal} />
        )

        let budgeted = 0;

        for(let i=0; i<goals.length; i++){
            budgeted = budgeted+this.props.goals[i].saved
        }

        let toBudget = (this.props.total)-budgeted;

        console.log(`toBudget: ${toBudget}`)
        let message;
        if(!this.props.goals){
            message =
                <div className='budget-message'>
                    <p> You have ${toBudget} that needs a job!</p>
                    <p> Would you like to make a savings goal now? </p>
                </div>
        }else{
            message = 
                <div className='budget-message'>
                    <p> You have ${toBudget} that needs a job! </p>
                    <p> You can make a new goal or add it to something you are already saving for </p>
                </div>
        }


        return (
            <div className='child-page'>;
                <Header 
                    title={'Welcome [name]!'}
                    message={message}
                    label={this.state.label}
                    onClick={this.handleClick}    
                />
                <div className='content-heading'>
                    <h2>My Savings Goals</h2>
                </div>
                <AddGoal 
                    form='new-goal'
                    addNew={this.state.addNew}
                />
                <div>
                    {goals}
                </div>
            </div>
        )
    }
}
    
    const mapStatetoProps = state => ({
        goals: state.budget.goals,
        total: state.budget.total,
    });
    
    export default connect(mapStatetoProps)(Child)