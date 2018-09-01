import React from 'react';
import config from '../../config';
import Button from '../Button/button';
import './request.css';
import { connect } from 'react-redux';
import {fetchUserBasicInfo} from '../../actions/index.actions';
import {fetchYnabBudgets} from '../../actions/index.actions';
import { ChooseBudget } from '../ChooseBudget/choose-budget';

const clientId = `524cb6ed48eb7037b8391bc45974590dace8e9b2434cc03e5ae595b54412cced`
const redirectUrl = 'urn:ietf:wg:oauth:2.0:oob'

export class Request extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ynabUrl: `https://app.youneedabudget.com/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}&response_type=code&state=${this.props.userId}`,
            authorized: false,
            budget: false,
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
        this.setState = {initiated: true}
        this.refresh = setTimeout(() => this.getBudgets, 15000)
    }

    openYnabWindow(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    getBudgets(){
        this.props.dispatch(fetchYnabBudgets(this.props.user._id))
    }

    render(){
        let authURL = this.state.url;

        if(!this.state.initiated && !this.props.user.account){
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
                    </div>
                </div>
            )
        }else if(this.props.ynabData === null){
            return(
            <div>
                <p>We're having trouble accessing your ynab account </p>
                <Button 
                    label='Try again'
                    type='text'
                    onClick={this.getBudgets}
                />
            </div>)

        }else if(this.props.ynabData !== null && this.props.ynabData.length >0){
             return(
                <div>
                    <ChooseBudget data={this.props.ynabData}/> 
                </div>
            )
        }

        return(
            <section>
                <p>Now you can add kids!</p>
            </section>
        )
    }
}

const mapStatetoProps = state => ({
    userId: state.user.data._id,
    user: state.user.data,
    ynabData: state.ynab.data
})

export default connect(mapStatetoProps)(Request)