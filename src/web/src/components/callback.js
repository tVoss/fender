import React from 'react';
import { CallbackComponent } from 'redux-oidc';

import { userManager } from '../core/auth'

export default class Callback extends React.Component {
    
    render() {
        return (
            <CallbackComponent userManager={userManager} successCallback={this.onSuccess}>
                <div>On callback...</div>
            </CallbackComponent>
        )
    }

    onSuccess = (user) => {
        this.props.history.push('/')
    }

}