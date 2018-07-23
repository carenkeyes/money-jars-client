import React from 'react';
import API_BASE_URL from '../../config';

export default class Request extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            url: "",
            error: null,
            loading: false
        }
    }

    componenetDidMount(){
        this.getUrl()
    }

    getUrl(){
        this.setState({
            error: null,
            loading: true
        });
        return fetch(`${API_BASE_URL}/auth`)
            .then(res => {
                if(!res.ok){
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(y =>
                this.setState({
                    url: y.url,
                    loading: false
                })
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