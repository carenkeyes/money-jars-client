import React from 'react';
import {connect} from 'react-redux';
import Request from '../Request/request';
import {Redirect} from 'react-router-dom';
import Parent from '../Parent/parent';

export class ParentSetup extends React.Component {
    constructor(){
        super()
        this.state = {
            register: false,
            setupCompolete: false,
        }
    }

    addChild = () => {
        this.setState({
            register: true,
        })
    }

    finishSetUp = () => {
        this.setState({
            setupCompolete: true,
        })
    }

    render(){
        if(!this.props.loggedIn){
            return(
                <Redirect to={'/register/login'} />
            )
        }

        if(this.state.register){
            return <Redirect to={'/register-child'} />
        }

        if(this.state.setupCompolete){
            return <Redirect to={'/parent'} />
        }
        let message;
        let greeting=`Welcome ${this.props.user.username}!`
        let label1;
        let label2;
        return (
            <Parent />
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.data
})

export default connect(mapStateToProps)(ParentSetup)