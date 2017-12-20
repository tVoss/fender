import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { saveUserFitbitCode } from '../actions/fitbit'

class FitbitCallback extends React.Component {

    componentWillMount() {
        const {location, user, saveUserFitbitCode} = this.props;

        const code = location.search.substring(6); // ?code=
    
        saveUserFitbitCode(user, code)
    }

    render() {

        return (
            <div>
                Loading Fitbit data...
            </div>
        )
    }

}

// Get properties out of global state into component
const mapStateToProps = (state) => {
    return {
        user: state.oidc.user
    }
}

// Get functions that can modify global state
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveUserFitbitCode
    }, dispatch);
}

// Bring it all together and export it
export default connect(mapStateToProps, mapDispatchToProps)(FitbitCallback);