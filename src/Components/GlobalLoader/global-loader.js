import React from 'react';
import {connect} from 'react-redux';
import hasToken from '../../helpers/token';
import {fetchUserBasicInfo} from '../../actions';

class GlobalLoader extends React.Component {
    componentDidMount(){
        if(hasToken() &&!this.props.user.isLoggedIn){
            console.log('fetching user basic info');
            this.props.fetchUserBasicInfo();
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.props.appState.isFetchingUserBasicInfo ?
                    <React.Fragment>
                        <h2>Loading</h2>
                    </React.Fragment>
                :
                    <React.Fragment>
                        {this.props.children}
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    appState: state.appState,
    user: state.user,
});

export default connect(mapStateToProps, {fetchUserBasicInfo})(GlobalLoader);
