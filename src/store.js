/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import axios, { middlewareConfig } from './common/api';
import axiosMiddleware from 'redux-axios-middleware';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  let store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk, axiosMiddleware(axios, middlewareConfig))
  );
  let persistor = persistStore(store);
  return { store, persistor };
}
