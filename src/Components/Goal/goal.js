import React from 'react';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import ProgressBar from '../ProgressBar/progress-bar';
import './goal.css';

export default function Goal(){
    return(
        <section>
            <div>
                <h3>Goal Name</h3>
            </div>
            <div className = "goalContent">
                <div className='goalImage'>
                    <Avatar />
                    <Button />
                </div>
                <div className='goalProgress'>
                    <ProgressBar />
                </div>
            </div>    
        </section>
    )
}