/*
 * Reducer actions related with github user data
 */
import * as types from './actionTypes';

export function requestLogin() {
    return {
        type: types.LOGIN_REQUEST
    };
}

export function onTokenResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function onLoginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}

export function enableLoader() {
    return {
        type: types.ENABLE_SEARCH_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.DISABLE_SEARCH_LOADER
    };
}
