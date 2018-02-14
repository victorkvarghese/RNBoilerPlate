import Auth0 from 'react-native-auth0';
import Constants from '@config/constants';

export const auth0 = new Auth0({
    domain: Constants.auth_domain,
    clientId: Constants.clientId
});
