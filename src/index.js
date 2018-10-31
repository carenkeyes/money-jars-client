import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './store';
import {Provider} from 'react-redux';
import './index.css';
import App from './Components/App/App';
import store from './store';
import {persistor} from './store';
import registerServiceWorker from './registerServiceWorker';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
