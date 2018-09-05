import React from 'react';
import AddToGoal from '../AddToGoal/add-to-goal';
import WithdrawFromGoal from '../WithDrawFromGoal/withdraw-from-goal';
import MoveFromGoal from '../MoveFromGoal/move-from-goal';
import DeleteGoal from '../DeleteGoal/delete-goal';
import Button from '../Button/button'

import './goal-details.css';

export default class GoalDetails extends React.Component{
    constructor(){
        super()
        this.state = {
            editType: 'add'
        }    
    }

    displayAdd(){
        this.setState({
            editType: 'add'
        })
    }

    displayMove(){
        this.setState({
            editType: 'move'
        })
    }

    displayWithdraw(){
        this.setState({
            editType: 'withdraw'
        })
    }

    setDelete(){
        this.setState({
            editType: 'delete'
        })
    }

    render(){ 

        if(this.props.options){
            return(
                <div className='goal-options'>
                    <div className='change-goal'>
                        <AddToGoal editType={this.state.editType}/>
                        <WithdrawFromGoal editType={this.state.editType}/>
                        <MoveFromGoal editType={this.state.editType}/>
                        <DeleteGoal 
                            editType={this.state.editType}
                            userId={this.props.userId}
                            goalId={this.props.goalId}  
                        />
                    </div>
                    <div>
                        <div className='edit-goal-button-group'>
                            <Button 
                                className='edit-goal-button click yellow'
                                label={this.state.editType==='add' ? null: 'Add'}
                                onClick={() => this.displayAdd()}
                            />
                            <Button 
                                className='edit-goal-button click yellow'
                                label={this.state.editType==='move' ? null: 'Move'}
                                onClick={() => this.displayMove()}
                            />
                            <Button 
                                className='edit-goal-button click yellow'
                                label={this.state.editType==='withdraw' ? null: 'Withdraw'}                                onClick={() => this.displayWithdraw()}
                            />
                            </div>
                            <div className='delete-goal-button'>
                                <Button
                                    className='edit-goal-button click red'
                                    label={this.state.editType==='delete' ? null: 'Delete'}
                                    onClick={() => this.setDelete()}
                                />
                            </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}
