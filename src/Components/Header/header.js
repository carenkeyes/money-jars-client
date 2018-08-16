import React from 'react';
import Button from '../Button/button';
import './header.css';

export default function Header(props){

    const buttonStyle = {
        width: '250px',
        color: 'red'
    }

    return (
        <div className='header'>
            <h1>{props.title}</h1>
            {props.message}
            <Button 
                label={props.label}
                onClick={props.onClick}
                style={buttonStyle}
            />
        </div>
    )
}