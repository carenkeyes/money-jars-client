import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './Components/App/App';
import store, {history} from './store';

const Main = () => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );

const rootE1 = document.getElementById('root');

ReactDOM.render(
    <Main />,
    rootE1
);
