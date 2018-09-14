import React from 'react';
import Avatar from '../Avatar/avatar';
import './warning-screen.css';

export default function WarningScreen(props){
    return(
        <div className='warning-screen'>
            <Avatar 
                className={`${props.className} warning-image`}
            />
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    )
}