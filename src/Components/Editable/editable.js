import React from 'react';

export default class Editable extends React.Component{
    render(){
        if(this.props.editing){
            return(
                <div>
                    <Edit />
                </div>
            )            
        }
        return(
            <div>
                <p>Something</p>
            </div>
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
        const value = e.target.value;
        this.logEdit(value)
        if(this.props.onEdit){
            this.props.onEdit(value);
        }
    }
    logEdit = value => {
        console.log(value)
    }

    render(){
        return(
            <input
                type={this.props.inputType}
                autoFocus="true"
                defaultValue={this.props.value}
                onKeyPress={this.checkEnter}
                {...props}
            />
        )
    }   
}