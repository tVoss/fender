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
            </div>
        )
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