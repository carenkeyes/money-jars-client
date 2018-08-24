import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserBasicInfo} from '../../actions/users';
import './dashboard.css'


export class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usertype: 'child'
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
    }

    render(){
        console.log(this.props.data)    

        if(this.props.data.usertype === 'parent'){
            console.log('parent')
            return (
                <Redirect to={`/parent/`} />
            )
        }else if(this.props.data.usertype ==='child'){
            console.log('child')
            return (
                <Redirect to={`/child`} />
            )
        }

        return null;
    }
}

const mapStatetoProps = state => ({
    //loggedIn: state.auth.currentUser !==null,
    //data: state.protectedData.data,
});

export default connect(mapStatetoProps)(Dashboard)
