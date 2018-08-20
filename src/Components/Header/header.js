import React from 'react';
import Button from '../Button/button';
import Avatar from '../Avatar/avatar';
import './header.css';

export default function Header(props){

    return (
        <div className={`header ${props.className}`}>
            <Avatar className={props.leftImage} />
            <div className='header-info'>
                <h1>{props.title}</h1>
                {props.message}
                <div className='header-buttons'>
                    <Button 
                        label={props.but1Label}
                        onClick={props.but1OnClick}
                        type={props.but1Type}
                        className={props.but1Class}
                    />
                    <Button 
                        label={props.but2Label}
                        onClick={props.but2OnClick}
                        type={props.but2Type}
                        className={props.but2Class}
                    />
                </div>
            </div>
            <Avatar className={props.rightImage} />
        </div>
    )
}