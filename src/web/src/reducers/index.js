import { combineReducers } from 'redux'
import { reducer as oidc } from 'redux-oidc'

import { INITIAL_STATE as OIDC_INITIAL_STATE } from './oidc'

export const INITIAL_STATE = {
    oidc: OIDC_INITIAL_STATE
}

// Populate this object with your custom reducers

export default combineReducers({
    oidc
});