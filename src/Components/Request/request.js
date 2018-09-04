import React from 'react';
import config from '../../config';
import Button from '../Button/button';
import './request.css';
import { connect } from 'react-redux';

import {fetchYnabBudgets} from '../../actions/index.actions';
import ChooseBudget from '../ChooseBudget/choose-budget';
import {updateUserProfile} from '../../actions/index.actions';
import {Redirect} from 'react-router-dom';

export default class Request extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ynabUrl: `https://app.youneedabudget.com/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}&response_type=code&state=${this.user_id}`,
            declined: false,
            initiated: false,
        }

        this.getToken = this.getToken.bind(this);
        this.budgetManually = this.budgetManually.bind(this);
    }


    getToken(){
        console.log('get token clicked')
        console.log(this.state.ynabUrl)
        this.openYnabWindow(this.state.ynabUrl)
        this.setState({
            initiated: true,
        })
    }

    openYnabWindow(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    budgetManually(){
        const data = {budget_id: 'manual'}
        console.log(this)
        this.props.dispatch(updateUserProfile(this.props.user._id, data))
        this.setState({
            declined: true,
        })
    }

    render(){
        if(this.state.declined){
            return(
                <Redirect to={'/parent'} />
            )
        }
        if(this.state.initiated){
            return(
                <div>
                    <p>We need to fetch your YNAB budgets</p>
                    <Button 
                        label='Get Budgets'
                        className='home-button orange'
                        type='text'
                        onClick={this.getBudgets}
                    />
                </div>)
        }

        if(!this.props.account && !this.state.initiated){
            return(
                <div className='new-user'>
                    <div className='ynab-option'>
                        <p className='auth-message'>If you would like to synch accounts, please authorize YNAB first.</p>
                            <Button
                                onClick={this.getToken}
                                className='ynab-button click'
                                type='button'
                            />
                    </div>
                    <div>
                        <p>Or just starting setting up kid's accounts</p>
                        <Button
                            label='Budget Manually'
                            onClick={this.budgetManually}
                        />
                    </div>
                </div>
            )
        }else if(!this.props.budget_id && this.props.ynabData === null){
            return(
            <div>
                <p>We need to fetch your YNAB budgets</p>
                <Button 
                    label={this.props.label}
                    className='home-button orange'
                    type='text'
                    onClick={this.props.onClick}
                />
            </div>)

        }else if(this.props.ynabData !== null && this.props.ynabData.length >0){
            console.log(this.props.ynabData.length)
            console.log(this.props.user_id)
             return(
                <div>
                    <ChooseBudget 
                    data={this.props.ynabData}
                    userId={this.props.user_id}
                    /> 
                </div>
            )
        }

        return null;
    }
}

