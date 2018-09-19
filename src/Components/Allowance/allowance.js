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

    render(){
        if(this.state.addFunds){
            return(
                <div className='allowance'>
                    <GiveAllowance 
                        key={this.props.key}
                        username={this.props.username}
                        balance={this.props.balance}
                        childId={this.props.childId}
                        updateState={this.fundsAdded}
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