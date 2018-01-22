import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './components/Root';
import postItApp from './redux/reducers';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

const store = createStore(postItApp);
const DOMbody = document.querySelector('body');

DOMbody.setAttribute('class', 'blue-grey lighten-5');

render(
	<Root store={store} />,
  document.querySelector('#root')
 );