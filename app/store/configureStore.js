import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import rootReducers from '@reducers';
import sagas from '@sagas';

const config = {
    key: 'root',
    storage,
    blacklist: ['nav', 'loadingReducer'],

    debug: true //to get useful logging
};

// for react-navigation 1.0.0-beta.30

const navMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
const addListener = createReduxBoundAddListener('root');
// end for react-navigation 1.0.0-beta.30

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
middleware.push(navMiddleware);

if (__DEV__) {
    middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
    //   console.log('Test', store.getState());
});
const configureStore = () => {
    return { persistor, store, addListener };
};

sagaMiddleware.run(sagas);

export default configureStore;
