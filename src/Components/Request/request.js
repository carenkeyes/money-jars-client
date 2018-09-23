import React from 'react';
import config from '../../config';
import Button from '../Button/button';
import './request.css';

export default class Request extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ynabUrl: `https://app.youneedabudget.com/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}&response_type=code&state=${this.props.user_id}`,
            declined: false,
            initiated: false,
        }
        this.getToken = this.getToken.bind(this);

    }

    //sends user to authorize YNAB API
    getToken(){
        this.openYnabWindow(this.state.ynabUrl)
        this.setState({
            initiated: true,
        })
    }

    openYnabWindow(url) {
        const win = window.open(url, '_self');
        win.focus();
    }

    render(){
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
                <div className='manual-budget-section'>
                    <p>Or you can choose to budget manually</p>
                    <Button
                        className='manual-budget-button click green'
                        label='Budget Manually'
                        onClick={this.props.budgetManually}
                    />
                </div>
            </div>
        )
    }
}
