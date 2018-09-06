import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Home from '../Home/home';
import RegistrationPage from '../RegistrationPage/registration-page';
import Dashboard from '../Dashboard/dashboard';
import ChildWrapper from '../ChildWrapper/child-wrapper';
import Parent from '../Parent/parent';
import ParentSetup from '../Parent/parent-setup';
import Privacy from '../Privacy/privacy';
//import {refreshAuthToken} from '../../actions/auth';
import { connect } from 'react-redux';
import AddChildWrapper from '../AddChildWrapper/add-child-wrapper';
import ynabHandler from '../ynabHandler/ynab-handler';

export class App extends React.Component {
  /*componentDidUpdate(prevProps){
    if(!prevProps.logginIn && this.props.logginIn){
      this.startPeriodicRefresh();
    }else if (prevProps.logginIn && !this.props.logginIn){
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh(){
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60*60*1000
    );
  }

  stopPeriodicRefresh(){
    if(!this.refreshInterval){
      return;
    }

    clearInterval(this.refreshInterval);
  }*/

  render() {
    return (
        <div className="app">
          <Navbar />       
          <main role="main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/register' component={RegistrationPage} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/child' component={ChildWrapper} />
              <Route exact path='/parent/setup' component={ParentSetup} />
              <Route exact path='/parent/complete' component={Parent} />
              <Route exact path='/parent/authorization' component={ynabHandler} />
              <Route path='/register-child' component={AddChildWrapper} />
              <Route exact path="/privacy" component={Privacy} />
            </Switch>
          </main>          
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps)(App));


