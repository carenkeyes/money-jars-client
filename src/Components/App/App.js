import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Home from '../Home/home';
import RegistrationPage from '../RegistrationPage/registration-page';
import Dashboard from '../Dashboard/dashboard';
import ChildWrapper from '../ChildWrapper/child-wrapper';
import Parent from '../Parent/parent';
import ParentSetup from '../Parent/parent-setup';
import Privacy from '../Privacy/privacy';
import AddChildWrapper from '../AddChildWrapper/add-child-wrapper';
import Authorization from '../Authorization/authorization';
import NotFound from '../ErrorScreens/not-found';
import ServerError from '../ErrorScreens/server-error';
import Forbidden from '../ErrorScreens/forbidden';
import Loading from '../Loading/loading';

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
              <Route exact path='/parent' component={Parent} />
              <Route exact path='/setup' component={ParentSetup} />
              <Route path='/authorization' component={Authorization} />
              <Route path='/register-child' component={AddChildWrapper} />
              <Route exact path='/privacy' component={Privacy} />
              <Route exact path='/no-access' component={Forbidden} />
              <Route exact path='/not-found' component={NotFound} />
              <Route exact path='/server-error' component={ServerError} />
              <Route exact path='/loading' component={Loading} />
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


