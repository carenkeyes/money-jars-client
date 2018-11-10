import React from 'react';

export default class Editable extends React.Component{
    render(){
        if(this.props.editing){
            return(
                <span>
                    <Edit {...this.props}/>
                </span>
            )            
        }
        return(
            <span onClick={this.props.onClick}>{this.props.value}</span>
        )
    }
}

class Edit extends React.Component{
    checkEnter = e => {
        if(e.key === 'Enter'){
            this.finishEdit(e);
        }
    }
    finishEdit = e => {
        console.log(e.target.goalId)
        const value = e.target.value;
        if(this.props.onEdit){
            this.props.onEdit(value);
        }
    }

    render(){
        return(
            <input
                type={this.props.inputType}
                autoFocus={true}
                defaultValue={this.props.value}
                onKeyPress={this.checkEnter}
                onEdit={this.onEdit}
                goalId={this.props.goalId}
            />
        )
    }   
}