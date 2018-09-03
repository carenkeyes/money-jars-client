import React from 'react';
import config from '../../config';
import Button from '../Button/button';
import './request.css';
import { connect } from 'react-redux';
//import {fetchUserBasicInfo} from '../../actions/index.actions';
import {fetchYnabBudgets} from '../../actions/index.actions';
import ChooseBudget from '../ChooseBudget/choose-budget';
import {updateUserProfile} from '../../actions/index.actions';
import {Redirect} from 'react-router-dom';

export class Request extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ynabUrl: `https://app.youneedabudget.com/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}&response_type=code&state=${this.props.userId}`,
            declined: false,
            initiated: false,
        }

        this.getToken = this.getToken.bind(this);
        this.getBudgets = this.getBudgets.bind(this);
    }

    componentDidMount(){
        console.log(this.props.user.account)
        console.log(this.props.ynabData)
        /*if(this.props.user.account){
            this.setState ={
                authorized: true
            }
        }
        if(this.props.ynabData !== null){
            this.setState = {
                budget: true
            }
        }*/
    }

    getToken(){
        console.log('get token clicked')
        console.log(this.state.ynabUrl)
        this.openYnabWindow(this.state.ynabUrl)
        this.setState({
            initiated: true,
        })
    }

    updateState(){
        this.refresh = setTimeout(() => this.getBudgets, 15000)
    }

    openYnabWindow(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    getBudgets(){
        this.props.dispatch(fetchYnabBudgets(this.props.user._id))
    }

    budgetManually(){
        const data = {budget_id: 'manual'}
        this.props.dispatch(updateUserProfile(this.props.userId, data))
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

        if(!this.props.user.account && !this.state.initiated){
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
        }else if(!this.props.user.budget_id && this.props.ynabData === null){
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

        }else if(this.props.ynabData !== null && this.props.ynabData.length >0){
             return(
                <div>
                    <ChooseBudget 
                    data={this.props.ynabData}
                    userId={this.props.user._id}
                    /> 
                </div>
            )
        }

        return null;
    }
}

const mapStatetoProps = state => ({
    userId: state.user.data._id,
    user: state.user.data,
    ynabData: state.ynab.data
})

export default connect(mapStatetoProps)(Request)