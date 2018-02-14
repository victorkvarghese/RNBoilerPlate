import createReducer from '@lib/createReducer';
import * as actionTypes from '@actions/actionTypes';

const initialState = {
    accessToken: '',
    idToken: '',
    expiresIn: '',
    tokenType: ''
};

export const loginReducer = createReducer(initialState, {
    [actionTypes.LOGIN_REQUEST](state) {
        return { ...state };
    },
    [actionTypes.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            accessToken: action.response.accessToken,
            idToken: action.response.idToken,
            expiresIn: action.response.expiresIn,
            tokenType: action.response.tokenType
        };
    },
    [actionTypes.LOGIN_FAILED](state) {
        return {
            ...state,
            accessToken: '',
            idToken: '',
            expiresIn: '',
            tokenType: ''
        };
    }
});
