import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import Dashboard from './containers/Dashboard';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';
import PrivateRoute from './containers/Auth';
import PageNotFound from './components/helpers/PageNotFound';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

const loggerMiddleware = createLogger();
const store = createStore(
	combineReducers({ ...reducers }),
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
	    		<Route path='/' component={Dashboard} />
	    		<Route path='/signin' component={SignInPage} />
	    		<Route path='/signup' component={SignUpPage} />
    		</div>
		</BrowserRouter>
	</Provider>,
  document.querySelector('#root')
 );

export default store; 