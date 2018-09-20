import React from 'react';
import {connect} from 'react-redux';
import Allowance from '../Allowance/allowance';
import './manual-budget.css';

export class ManualBudget extends React.Component {
    render(){
        let manual = this.props.user.budget_id==='manual'
        
        let children;
        children = this.props.user.children.map(child => 
            <Allowance 
                key={child._id}
                username={child.username}
                balance={child.balance}
                childId={child._id}
            />
        )

        if(manual){  
            return(
                <section>
                    <h2>Add funds here</h2>
                    <div className='child-allowance'>
                        {children}
                    </div>
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