import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Dummy from './dummy'
import { userManager } from '../core/auth';

// The true entry point for your application
class App extends React.Component {

    constructor(props) {
        super(props);

        if (!props.oidc.user) {
            userManager.signinRedirect();
        }
    }

    render() {
        if (!this.props.oidc.user) {
            return (
                <div>
                    Waiting for auth...
                </div>
            )
        }

        return (
            <div>
                <Dummy />
                <button onClick={this.onFitbitClick}>Sign in to FitBit</button>
            </div>
        )
    }

    onFitbitClick = () => {

        const url = 'https://www.fitbit.com/oauth2/authorize'+
            '?response_type=code' +
            '&client_id=22CHGY' +
            '&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight' +
            '&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Ffitbit';

        window.location.replace(url)
    }
}

// Get properties out of global state into component
const mapStateToProps = (state) => {
    return {
        oidc: state.oidc
    }
}

// Get functions that can modify global state
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch);
}

// Bring it all together and export it
export default connect(mapStateToProps, mapDispatchToProps)(App);