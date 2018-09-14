import React from 'react';
import Avatar from '../Avatar/avatar';

export default function WarningScreen(props){
    return(
        <div>
            <Avatar />
            <h1>{this.props.title}</h1>
            <p>{this.props.message}</p>
        </div>
    )
}