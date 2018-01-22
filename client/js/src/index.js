import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PostIt from './components/PostIt';
import postItApp from './redux/Reducers';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

const store = createStore(postItApp);
const DOMbody = document.querySelector('body');

DOMbody.setAttribute('class', 'blue-grey lighten-5');

render(
	<Provider store={store}>
		<PostIt />
	</Provider>,
  document.querySelector('#app')
 );