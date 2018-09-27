import React from 'react';
import './progress-bar.css'

export default function ProgressBar(props){

    let percentage = Math.floor(-props.savedAmount/(props.goalAmount)*100+100)
    return(
        <div className={`progressBar ${props.className}`}>
            <Filler percentage={percentage}/>
        </div>
    )
}

const Filler = (props) => {
    return <div className='filler' 
        style={{height: `${props.percentage}%`}}
    />
}