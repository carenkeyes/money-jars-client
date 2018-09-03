import React from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AddToGoal from '../AddToGoal/add-to-goal';
import WithdrawFromGoal from '../WithDrawFromGoal/withdraw-from-goal';
import MoveFromGoal from '../MoveFromGoal/move-from-goal';
import Deletegoal, { DeleteGoal } from '../DeleteGoal/delete-goal';
import Button from '../Button/button'

import './goal-details.css';

export class GoalDetails extends React.Component{
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

    confirmDelete(){
        console.log('delete action will go here')
    }

    render(){
        if(this.props.options){
            return(
                <div className='goal-options'>
                    <div className='change-goal'>
                        <AddToGoal editType={this.state.editType}/>
                        <WithdrawFromGoal editType={this.state.editType}/>
                        <MoveFromGoal editType={this.state.editType}/>
                        <DeleteGoal editType={this.state.editType} />
                    </div>
                    <div>
                        <div className='edit-goal-button-group'>
                            <Button 
                                className='edit-goal-button click yellow'
                                type={this.state.editType==='add' ? 'null': 'button'}
                                label='Add'
                                onClick={() => this.displayAdd()}
                            />
                            <Button 
                                className='edit-goal-button click yellow'
                                type={this.state.editType==='move' ? 'null': 'button'}
                                label='Move'
                                onClick={() => this.displayMove()}
                            />
                            <Button 
                                className='edit-goal-button click yellow'
                                type={this.state.editType==='withdraw' ? 'null': 'button'}
                                label='Withdraw'
                                onClick={() => this.displayWithdraw()}
                            />
                            </div>
                            <div className='delete-goal-button'>
                                <Button
                                    className='edit-goal-button click red'
                                    type='button'
                                    label='Delete'
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

const mapStateToProps = (state) =>{
    return {}
}

export default withRouter(connect(mapStateToProps)(GoalDetails))