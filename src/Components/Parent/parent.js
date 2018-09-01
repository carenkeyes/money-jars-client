import React from 'react';
import {connect} from 'react-redux';
//import requiresLogin from '../RequiresLogin/requires-login';
import Request from '../Request/request'
import {Redirect} from 'react-router-dom'
//import { fetchProtectedData } from '../../actions/protected-data';
import Header from '../Header/header';

export class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            register: false,
        }
    }
    /*componentDidMount(){
        this.props.dispatch(fetchProtectedData());
    }*/

    handleClick = () => {
        console.log('reroute to child');
        this.setState({
            register: true,
        })
    }

    render(){

        if(!this.props.loggedIn){
            return(
            <Redirect to={'/register/login'} />
            )
        }

        if(this.state.register){
            return <Redirect to='/register-child' /> 
        }

        let message;
        let greeting=`Welcome ${this.props.user.username}!`
        
        if(!this.props.user.budget_id){
            message = <Request />
        }
        else if(this.props.user.budget_id && this.props.user.children.length === 0){
            greeting = 'Great job!'
            message = <p> Now you can set up accounts for your children </p>
        }
        else if(this.props.user.children.length === 1){
            message = <p> You can monitor ${this.props.user.children[0].username}'s account
                activity and withdrawal requests here </p>
        }
        else if(this.props.user.children.length < 1){
            message = <p> You can monitor your children's account activity
                and withdrawal requests here </p>
        }
        
        /*if(!this.props.loggedIn){
            return <Redirect to='/register/login' />
        }*/

        return(
            <div>
                <Header 
                    title={greeting}
                    message={message} 
                    className='header-parent'
                    leftImage='header-image money-tree'
                    but2Label={this.props.user.category_id ?'': 'Add Child'}
                    but2Type='button'
                    but2Class='home-button orange'
                    but2OnClick={this.handleClick}
                />
                    
                <section></section>
                <section></section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user.data !== null,
    user: state.user.data
});

export default connect(mapStateToProps)(Parent);