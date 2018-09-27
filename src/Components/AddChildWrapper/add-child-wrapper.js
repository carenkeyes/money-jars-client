import React from 'react'
import RegistrationChild from '../RegistrationChild/registration-child'
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

    //If the budget_id is not manual, user has authorized YNAB
    //and 
    componentDidMount(){
        if(this.props.user.budget_id !== 'manual'){
        this.props.dispatch(fetchYnabCategories(this.props.user._id, this.props.user.budget_id));}
    }

    //When a category group is selected for the first SelectInput,
    //the second is populated with the individual categories
    handleChange(event){
        let group_id = event.value
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

        if(this.props.loading){
            return(
                <p>Waiting on YNAB Categories</p>
            )
        }

        if(this.props.data !== null || this.props.user.budget_id==='manual'){
            return(
                <RegistrationChild 
                    data={this.props.data}
                    categories={this.state.categories}
                    budget_id={this.props.user.budget_id}
                    onChange={this.handleChange}
                    manual={this.props.user.budget_id==='manual'?true:false} 
                    account={this.props.user.account}
                />
            )
        }
        return null;
    }
}

const mapStateToProps = state => ({
    user: state.user,
    loading: state.ynab.loading,
    data: state.ynab.data,
})
export default connect(mapStateToProps)(AddChildWrapper)
