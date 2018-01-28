import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from './redux/reducers';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

import Dashboard from './components/dashboard/Dashboard';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';
import PrivateRoute from './components/helpers/PrivateRoute';
import PageNotFound from './components/helpers/PageNotFound';

const loggerMiddleware = createLogger();
const history = createBrowserHistory();
const store = createStore(
	combineReducers({ ...reducers }),
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter history={history}>
			<div>
	    		<Route exact path='/' component={SignInPage} />
	    		<Route path='/signup' component={SignUpPage} />
	    		<PrivateRoute auth={true} path='/dashboard' component={Dashboard} />
	    		<Route path='/notfound' render={ props => <PageNotFound />} />
    		</div>
		</BrowserRouter>
	</Provider>,
  document.querySelector('#root')
 );

export default store;