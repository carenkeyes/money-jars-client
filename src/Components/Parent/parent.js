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
        if(this.state.register){
            return <Redirect to='/register/signup/child' /> 
        }

        let greeting=`Welcome ${this.props.user}!`
        let message = <Request />       

        return(
            <div>
                <Header 
                    title={greeting}
                    message={message} 
                    className='header-parent'
                    leftImage='header-image money-tree'
                    but2Label='Add Child'
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
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(Parent);