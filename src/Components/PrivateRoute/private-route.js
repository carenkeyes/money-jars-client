import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import config from '../../config';
import hasToken from '../../token';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => 
            hasToken() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: config.UNAUTHORIZED_ENDPOINT,
                        state: {from: props.location}
                    }}
                    />
            )
        }
    />
)

export default PrivateRoute;