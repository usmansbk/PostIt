import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import postIt from './redux/reducers';
import { saveState, loadState } from './helpers/persistState';
import Dashboard from './containers/Dashboard';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';
import PageNotFound from './components/helpers/PageNotFound';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
 );

export default store; 