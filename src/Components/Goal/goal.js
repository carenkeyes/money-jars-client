import React from 'react';
import {connect} from 'react-redux';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import {Redirect} from 'react-router-dom';
import './goal.css';

export function Goal(props){
    if(!(props.loggedIn)){
        return <Redirect to='/' />;
    }

    return(
        <section>
            <div>
                <h3>{props.goalName}</h3>
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
                showDetail={props.showDetail}
                goalAmount={props.goalAmount}
                savedAmount={props.savedAmount}
                leftAmount={props.leftAmount}
            />
            

        </section>
    )
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !==null
})

export default connect(mapStatetoProps)(Goal)