import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import postIt from './redux/reducers';
import { saveState, loadState } from './helpers/persistState';

const loggerMiddleware = createLogger();
const persistedState = loadState();

const middlewares = [
  thunkMiddleware,
]
process.env.NODE_ENV && middlewares.push(loggerMiddleware);

const store = createStore(
  postIt,
  persistedState,
  applyMiddleware(...middlewares)
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store