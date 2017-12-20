import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import reducers, { INITIAL_STATE } from './reducers'

import App from './components/app'
import Callback from './components/callback'
import FitbitCallback from './components/fitbit-callback'

import { userManager } from './core/auth'

let cachedState = null;
try {
    cachedState = JSON.parse(atob(localStorage.getItem('appState')))
} catch (e) {
    console.warn(e)
    console.warn('Could not load state, starting fresh...')
}

// The global state for the application
const store = createStore(
    // Reducers to handle actions
    reducers,
    cachedState || INITIAL_STATE,
    compose(
        // Middleware to modify actions
        applyMiddleware(
            
        )
    )
);

// Save the state!
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('appState', btoa(JSON.stringify(state)))
})

// How to keep track of user navigation
// This uses simple browser url paths
const history = createBrowserHistory();
 
ReactDOM.render(
    <Provider store={store}>
        <OidcProvider store={store} userManager={userManager} >
            <Router history={history}>
                <Switch>
                    <Route path="/callback" component={Callback} />
                    <Route path="/fitbit" component={FitbitCallback} />
                    <Route component={App} />
                </Switch>
            </Router>
        </OidcProvider>
    </Provider>
, document.getElementById('app'));