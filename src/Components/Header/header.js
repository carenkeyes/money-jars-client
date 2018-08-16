import React from 'react';
import Button from '../Button/button';
import './header.css';

export default function Header(props){
    return (
        <div className='header'>
            <h1>{props.title}</h1>
            {props.message}
            <Button 
                label={props.label}
                onClick={props.onClick}
            />
        </div>
    )
}