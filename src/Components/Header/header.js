import React from 'react';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import './header.css';

export default function Header(props){

    const buttonStyle = {
        width: '250px',
        color: 'red'
    }

    return (
        <div className={`header ${props.className}`}>
            <Avatar className={`header-image ${props.leftImage}`} />
            <div className='header-info'>
                <h1>{props.title}</h1>
                {props.message}
                <Button 
                    label={props.label}
                    onClick={props.onClick}
                    style={buttonStyle}
                />
            </div>
            <Avatar className={`header-image ${props.rightImage}`} />
        </div>
    )
}