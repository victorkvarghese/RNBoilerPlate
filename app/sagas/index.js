import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '@actions/actionTypes';
import loginSaga from './loginSaga';

export default function* watch() {
    yield [takeLatest(actionTypes.LOGIN_REQUEST, loginSaga)];
}
