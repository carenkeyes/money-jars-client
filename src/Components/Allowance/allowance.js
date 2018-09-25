import React from 'react'
import GiveAllowance from '../GiveAllowance/give-allowance';

export class Allowance extends React.Component{
    constructor(){
        super()
        this.state = {
            addFunds: true,
        }
        this.fundsAdded = this.fundsAdded.bind(this);
    }

    fundsAdded(){
        this.setState({
            addFunds: false,
        })
    }

    //display GiveAllowance intially, then return message stating
    //that funds were added once complete
    render(){
        const formId = this.props.childId
        if(this.state.addFunds){
            return(
                <div className='allowance'>
                    <GiveAllowance 
                        key={this.props.key}
                        username={this.props.username}
                        balance={this.props.balance}
                        childId={this.props.childId}
                        updateState={this.fundsAdded}
                        formKey={this.props.username}
                        form={formId}
                    />
                </div>
            )
        }
        return(
            <div className='allowance'>
                <p>Cha-ching! Funds added! </p>
            </div>
        ) 
    }
}

export default Allowance;