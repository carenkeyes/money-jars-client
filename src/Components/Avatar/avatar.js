import React from 'react';
import './avatar.css';


export default class Avatar extends React.Component{
    render(){
        if(!this.props.className){
            return null;
        }
        return(
            <div className={`avatarImage ${this.props.className}`}>
            </div>
        )
    }
}
