/*import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Parent from '../Parent/parent';
import {fetchUserBasicInfo} from '../../actions/index.actions';

export class ParentRouter extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
        console.log('What is going on?')
    }

    render(){
        if(!this.props.loggedIn){
            return(
                <Redirect to='/register/login' />
            )
        }
        if(this.props.user.children.length === 0){
            console.log(this.props.user.children.length)
            return(
                <Redirect to='/setup' />
            )
        }
        let message=<p>See your kids accounts!</p>
        let greeting=`Welcome ${this.props.username}!`

        return(
            <Parent 
                message={message}
                greeting={greeting}
            />
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !==null,
    user: state.user,
    children: state.children,
})

export default connect(mapStateToProps)(ParentRouter);*/