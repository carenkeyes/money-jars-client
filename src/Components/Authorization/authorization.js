import React from 'react'
import {connect} from 'react-redux';
import Parent from '../Parent/parent'
import Header from '../Header/header'
import {fetchYnabBudgets, fetchUserBasicInfo} from '../../actions/index.actions'
import {push} from 'connected-react-router';

export class Authorization extends React.Component{
    constructor(){
        super()
        this.state = {}
        this.getQueryString = this.getQueryString.bind(this)
    }

    //This component displays on redirect from YNAB
    //User data is fetched when component mounts
    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
            .then(() => this.getQueryString())
    }

    //then info from the redirect url is obtained and the list of 
    //budgets is retrieved from YNAB
    getQueryString(){
        let query = window.location.search
        this.props.dispatch(fetchYnabBudgets(query))
            .then(() => this.props.dispatch(push('/setup')))
    }
   
    render(){
        return null
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !== null,
    user: state.user,
    children: state.children,
});

export default connect(mapStateToProps)(Authorization);