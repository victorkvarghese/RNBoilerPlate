import { auth0 } from '@auth';

export default function authenticateUser() {
    return new Promise(resolve => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email',
                audience: 'https://rn-boilerplate.auth0.com/userinfo'
            })
            .then(credentials => resolve(credentials))
            .catch(error => resolve(error));
    });
}
