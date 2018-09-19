import React from 'react';
import {connect} from 'react-redux';


export class ManualBudget extends React.Component {
    render(){
        let manual = this.props.user.budget_id==='manual'
        console.log(manual)        

        if(manual){  
            return(
                <section>
                    <h2>Add funds here</h2>
                </section>    
            )
        }
        return null;
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(ManualBudget);