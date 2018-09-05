import React from 'react';
//import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import {deleteGoal} from '../../actions/index.actions';
import './goal.css';

export class Goal extends React.Component{
    constructor(){
        super()
        this.state = {
            options: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('edit state ran');
        this.setState({
            options: !this.state.options
        })
    }

    render(){
        console.log(this.props._id)
        let togo = this.props.amount-this.props.saved;
        return(
            <section className='goal-section'>
                <div>
                    <h2 className='goal-title'>{this.props.title}: <span className={`${this.props.category}-title`}>{this.props.category}</span></h2>
                </div>
                <div className = 'goalContent'>
                    <div className='goalImage'>
                        <Avatar 
                            image={this.props.imageurl}
                            className={this.props.imageurl ? 'avatarImage' : `${this.props.category}-pig piggy-bank` }
                        />
                    </div>
                    <div className='goal-info'>
                        <div className='goal-total'>
                            <p className='goal-text'> I need: <span className='money-value'> ${this.props.amount/1000} </span> </p>
                            <Button 
                            label={this.state.options ? 'Close': 'Options'}
                            onClick={this.handleClick}
                            className={`${this.props.category}-button click`}
                        />                            
                        </div>
                        <div className='goal-progress-bar'>
                            <ProgressBar 
                                goalAmount={this.props.amount}
                                savedAmount={this.props.saved}
                                className={this.props.category}
                            />
                        </div>
                        <div className='goal-progress'>
                        <p className='goal-text'>I have: <span className='money-value'> ${this.props.saved/1000} </span> </p> 
                        <p className='goal-text'><span className='money-value'> ${togo/1000} </span> left to save! </p>
                        </div>
                    </div>
                    
                </div>
                <GoalDetails 
                    options={this.state.options}
                    goalId={this.props._id}
                    userId={this.props.userId}
                     />          
            </section>
        )
    }
}
const mapStatetoProps = state => ({
    user: state.user,
});

export default connect(mapStatetoProps)(Goal)
