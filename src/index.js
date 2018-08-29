import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
//import {ConnectedRouter} from 'react-router-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import './index.css';
import App from './Components/App/App';
import store, {history} from './store';

const Main = () => (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );


const rootE1 = document.getElementById('root');

ReactDOM.render(
    <Main />,
    rootE1
);
