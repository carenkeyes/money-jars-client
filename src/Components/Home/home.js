import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';




export function Home(props){
    if(props.loggedIn){
        return <Redirect to='/parent' />;
    }
    return (
        <p>Home</p>
    );
}

const mapStatetoProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStatetoProps)(Home)