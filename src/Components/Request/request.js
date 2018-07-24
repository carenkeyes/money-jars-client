import React from 'react';
import {API_BASE_URL} from '../../config';

const clientId = `524cb6ed48eb7037b8391bc45974590dace8e9b2434cc03e5ae595b54412cced`
const redirectUrl = 'redirect_uri=urn:ietf:wg:oauth:2.0:oob'

export default class Request extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error: null,
            loading: false,
            url: `https://app.youneedabudget.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`
        }
    }

    getUrl(){
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
            .then(budgets =>
                console.log(budgets)
            )
            .catch(err => 
                this.setState({
                    error: 'Could not load url',
                    loading: false
                }))
    }

    render(){
        let authURL = this.state.url;
        return(
            <div>
                <a href={authURL}>Authorize YNAB</a>    
            </div>
        )
    }
}