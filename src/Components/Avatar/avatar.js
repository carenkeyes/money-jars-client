import React from 'react';
import './avatar.css';


export default class Avatar extends React.Component{
    render(){
        if(!this.props.className){
            return null;
        } else if(this.props.className === 'avatarImage'){
            return(
                <div className={`${this.props.className}`}>
                    <img src={this.props.image} alt='' />
                </div>
            )
        }
        return(
            <div className={`${this.props.className}`}>
            </div>
        )
    }
}
