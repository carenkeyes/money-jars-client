import React from 'react'
import RegistrationChild from '../RegistrationChild/registration-child'
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {fetchYnabCategories} from '../../actions/index.actions'
import './add-child-wrapper.css';

export class AddChildWrapper extends React.Component {
    constructor(){
        super()
        this.state = {
            register: true,
            group_id: null,
            categories: {
                label: 'choose group first',
                value: 'placeholder',
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        console.log(this.props.user._id)
        console.log(this.props.user.budget_id)
        this.props.dispatch(fetchYnabCategories(this.props.user._id, this.props.user.budget_id));
    }

    handleChange(event){
        console.log(event.value)
        let group_id = event.value
        console.log(group_id)
        this.setState({group_id: 'test'})
    }

    render(){
        //console.log(this.props.ynabData)
        if(this.props.user === null){
            return(
                <Redirect to='/register/login' />
            )
        }
        if(this.props.loading){
            return(
                'Waiting on YNAB Categories'
            )
        }
        if(this.props.ynabData !== null){
            return(
                <RegistrationChild 
                    data={this.props.ynabData}
                    budget_id={this.props.user.budget_id}
                    account={this.props.account}
                    onChange={this.handleChange} 
                />
            )
        }
        return null;
    }
}

const mapStateToProps = state => ({
    user: state.user.data,
    loading: state.ynab.loading,
    ynabData: state.ynab.data,
})
export default connect(mapStateToProps)(AddChildWrapper)

/*        return(
            <RegistrationChild 
                data={this.props.ynabData}
                budget_id={this.props.user.budget_id}
                account={this.props.account} 
            />
        )*/