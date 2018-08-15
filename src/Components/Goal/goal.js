import React from 'react';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import './goal.css';

export default class Goal extends React.Component{
    constructor(){
        super()
        this.state = {
            detail: false,
            label: 'Details'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('edit state ran');
        if(this.state.detail){
            this.setState({
                detail: false,
                label: 'Details'
            })
        }
        else if(!this.state.detail){
            this.setState({
                detail: true,
                label: 'Close'
        })}
    }

    render(){
        let togo = this.props.amount-this.props.saved;

        return(
            <section>
                <div>
                    <h3>{this.props.title}</h3>
                </div>
                <div className = 'goalContent'>
                    <div className='goalImage'>
                        <Avatar />
                        <Button 
                            label={this.state.label}
                            onClick={this.handleClick}/>
                    </div>
                    <div className='goalProgress'>
                        <ProgressBar />
                    </div>
                </div> 
                <GoalDetails
                    showDetail={this.state.detail}
                    goalAmount={this.props.amount}
                    savedAmount={this.props.saved}
                    leftAmount={togo}
                />            
            </section>
        )
    }
}
