
import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Goal from '../Goal/goal';
import Header from '../Header/header';
import AddGoal from '../AddGoal/addgoal';
import './child.css';
import {fetchChildInfo, fetchUserBasicInfo} from '../../actions/index.actions';


export class Child extends React.Component{
    constructor(){
        super()
        this.state = {
            addNew: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
        console.log('fetch child info')
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

        console.log(this.props.user)
        let goals;
        goals = this.props.user.goals.map(goal =>
            <Goal key={goal.title} {...goal} />
        )

        let budgeted = 0;

        for(let i=0; i<goals.length; i++){
            budgeted = budgeted+this.props.goals[i].saved_amount
        }

        let toBudget = (this.props.total)-budgeted;

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


        return (
            <div className='child-page'>;
                <Header 
                    title={`Hi ${this.props.user.username}!`}
                    className='header-child'
                    message={message}
                    but1Label={this.state.addNew ? 'Cancel' : 'Add New Goal'}
                    but1OnClick={this.handleClick}
                    but1Class='home-button blue'
                    rightImage='header-image counting-money'
                />
                <AddGoal 
                    form='new-goal'
                    addNew={this.state.addNew}
                    userId={this.props.user._id}
                />
                <div>
                    {goals}
                </div>
            </div>
        )

    }
}
    
    const mapStatetoProps = state => ({
        loggedIn: state.user.data !==null,
        user: state.user.data,
        goals: state.user.data.goals,
    });
    
    export default connect(mapStatetoProps)(Child)