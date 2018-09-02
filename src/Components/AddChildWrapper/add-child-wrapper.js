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
            categories: [{
                label: 'choose group first',
                value: 'placeholder',
            }]
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
        const newCategories = []
        if(group_id){
            this.setState({group_id: group_id})
            for(let i=0; i<this.props.data.length; i++){
                if(this.props.data[i].id === group_id){
                    for(let j=0; j<this.props.data[i].categories.length; j++){
                        newCategories.push({
                            value: this.props.data[i].categories[j].id,
                            label: this.props.data[i].categories[j].name,
                        })
                    }
                }
            }
            this.setState({categories: newCategories})
        }
    }

    render(){

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
        if(this.props.data !== null){
            return(
                <RegistrationChild 
                    data={this.props.data}
                    categories={this.state.categories}
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
    data: state.ynab.data,
})
export default connect(mapStateToProps)(AddChildWrapper)
