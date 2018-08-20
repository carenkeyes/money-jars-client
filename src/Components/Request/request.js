import React from 'react';
import {API_BASE_URL} from '../../config';
import Dropdown from '../Dropdown/dropdown'
import Button from '../Button/button';
import './request.css';

const clientId = `524cb6ed48eb7037b8391bc45974590dace8e9b2434cc03e5ae595b54412cced`
const redirectUrl = 'urn:ietf:wg:oauth:2.0:oob'

export default class Request extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error: null,
            loading: false,
            url: `https://app.youneedabudget.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`,
            authorized: false,
            budget: false
        }

        this.getToken = this.getToken.bind(this);
        this.getBudgets = this.getBudgets.bind(this);
    }

    getToken(){
        this.setState({
            error: null,
            loading: true
        });
        return fetch(`${API_BASE_URL}/ynab/auth`, {method: 'POST'})
            .then(res => {
                if(!res.ok){
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(e =>
                //console.log(e)
                this.setState({authorized: true})
            )
            .catch(err => 
                this.setState({
                    error: 'Could not authorize YNAB',
                    loading: false
                }))
    }

    getBudgets(){
        this.setState({
            error: null,
            loading: true
        });
        return fetch(`${API_BASE_URL}/ynab/budgets`)
            .then(res => {
                if(!res.ok){
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(e =>
                console.log(e)
                //this.setState({budget: true})
            )
            .catch(err => 
                this.setState({
                    error: 'Could not load budgets',
                    loading: false
                }))
    }

    render(){
        let authURL = this.state.url;
        if(!this.state.authorized && !this.state.budget){
            return(
                <div className='new-user'>
                    <div className='ynab-option'>
                        <p className='auth-message'>If you would like to synch accounts, please authorize <a href={authURL} target="_blank">YNAB</a> first.</p>
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
        }else if(this.state.authorized && !this.state.budget){
             return(
                <div>
                    <p><button onClick={this.getBudgets}>Choose a Budget</button></p>
                    <Dropdown />   
                </div>
            )
        }

        return(
            <section>
                <p>Now you can add or manage kids!</p>
            </section>
        )
    }
}