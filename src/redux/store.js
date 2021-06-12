import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export { store, persistStore };