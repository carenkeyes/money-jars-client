import React from 'react';
import {connect} from 'react-redux';
import {fetchUserBasicInfo} from '../../actions/index.actions';
import Parent from '../Parent/parent';

export class ParentComplete extends React.Component {
    /*componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo())
    }*/
 
    render(){
        let message;
        let greeting = `Welcome ${this.props.user.username}`
        const isPlural = this.props.user.children.length !== 1;
        const subject = isPlural ?'your children' : this.props.user.children[0].username

        if(this.props.user.budget_id='manual'){
            message = <p>You can add money to {subject}'s accounts here </p>
        }else{
            message = <p>In the future, you will be able to see {subject}'s account
                activity here </p>
        }

        return(
            <Parent
                greeting={greeting}
                message={message}
            />
        )
    }

}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(ParentComplete)