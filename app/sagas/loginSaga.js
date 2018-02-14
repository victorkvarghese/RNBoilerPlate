import { put, call } from 'redux-saga/effects';
import * as loginActions from '@actions/loginActions';
import authenticateUser from '@auth/methods/authenticateUser';
import * as navigationActions from '@actions/navigationActions';

// Our worker Saga that logins user
export default function* userAsync() {
    yield put(loginActions.enableLoader());
    try {
        const response = yield call(authenticateUser, null);
        if (response) {
            yield put(loginActions.onTokenResponse(response));
            yield put(navigationActions.navigateToMainScreen());
            yield put(loginActions.disableLoader({}));
        } else {
            yield put(loginActions.onLoginFailed({}));
            yield put(loginActions.disableLoader({}));
        }
    } catch (error) {
        yield put(loginActions.onLoginFailed({}));
        yield put(loginActions.disableLoader({}));
    }
}
