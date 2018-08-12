import React from 'react';
import './button.css';

export default class Button extends React.Component{
    render(){
        return(
            <button>{this.props.label}</button>
        )
    }
}