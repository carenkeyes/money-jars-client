import React from 'react';
import {connect} from 'react-redux';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import './goal.css';

export class Goal extends React.Component{

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
                        <Button label='Details'/>
                    </div>
                    <div className='goalProgress'>
                        <ProgressBar />
                    </div>
                </div> 
                <GoalDetails
                    goalAmount={this.props.amount}
                    savedAmount={this.props.saved}
                    leftAmount={togo}
                />            
            </section>
        )
    }
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
    
})

export default connect(mapStatetoProps)(Goal)