import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const middleware = [logger, thunk];
export const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware))
);
