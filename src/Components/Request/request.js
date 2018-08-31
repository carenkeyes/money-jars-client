import React from 'react';
import config from '../../config';
import Button from '../Button/button';
import './request.css';
import { connect } from 'react-redux';

const clientId = `524cb6ed48eb7037b8391bc45974590dace8e9b2434cc03e5ae595b54412cced`
const redirectUrl = 'urn:ietf:wg:oauth:2.0:oob'

export class Request extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error: null,
            loading: false,
            ynabUrl: `https://app.youneedabudget.com/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}&response_type=code&state=${this.props.userId}`,
            authorized: false,
            budget: false
        }

        this.getToken = this.getToken.bind(this);
        this.getBudgets = this.getBudgets.bind(this);
    }

    //this part will be carried out by ynab
    /*getToken(){
        this.setState({
            error: null,
            loading: true
        });
        return fetch(`${config.API_BASE_URL}/ynab/auth`, {method: 'POST'})
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
    }*/

    getBudgets(){
        this.setState({
            error: null,
            loading: true
        });
        return fetch(`${config.API_BASE_URL}/ynab/budgets`)
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

const mapStatetoProps = state => ({
    userId: state.user.data._id
})

export default connect(mapStatetoProps)(Request)