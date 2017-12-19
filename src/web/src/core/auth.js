import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
    client_id: '278068941545-suckvrgnrgj1jgdbgdg8lbugap9qsdtv.apps.googleusercontent.com',
    redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
    response_type: 'token id_token',
    scope: 'openid profile',
    authority: 'https://accounts.google.com',
    silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/renew.html`,
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
};

export const userManager = createUserManager(userManagerConfig);