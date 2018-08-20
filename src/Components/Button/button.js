import React from 'react';
import './button.css';

export default class Button extends React.Component{
    render(){
        if(!this.props.type && !this.props.label){
            return null;
        }
        return(
            <button 
                onClick={this.props.onClick}
                className={this.props.className}
                type={this.props.type}>
                {this.props.label}
            </button>
        )
    }
}