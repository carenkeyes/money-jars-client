import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './store';
import {Provider} from 'react-redux';
import './index.css';
import App from './Components/App/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
