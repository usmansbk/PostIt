import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './components/Root';
import postItApp from './redux/reducers';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

const loggerMiddleware = createLogger();
const store = createStore(
	postItApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);
const DOMbody = document.querySelector('body');

DOMbody.setAttribute('class', 'blue-grey lighten-5');

render(
	<Root store={store} />,
  document.querySelector('#root')
 );