import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './store';
import {Provider} from 'react-redux';
import './index.css';
import App from './Components/App/App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import {PersistGate} from 'redux-persist/integration/react';

const initialState = {};
const {store, persistor} = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    MOUNT_NODE
);
registerServiceWorker();
