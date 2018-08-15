import React from 'react';
import {connect} from 'react-redux';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import GoalDetails from '../GoalDetails/goal-details';
import './goal.css';

export default function Goal(props){
        let togo = props.amount-props.saved;

        return(
            <section>
                <div>
                    <h3>{props.title}</h3>
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
                    showDetail={props.showDetails}
                    goalAmount={props.amount}
                    savedAmount={props.saved}
                    leftAmount={togo}
                />            
            </section>
        )
}
