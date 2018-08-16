import React from 'react';
import Button from '../Button/button';

export default function Header(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            <Button 
                label={props.label}
                onClick={props.onClick}
            />
        </div>
    )
}