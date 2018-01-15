import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PostIt from './components/PostIt.jsx';
import postItApp from './redux/Reducers';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

const store = createStore(postItApp);
const DOMbody = document.querySelector('body');
const app = document.querySelector('#app');

DOMbody.setAttribute('class', 'blue-grey lighten-5');

ReactDOM.render(
  <PostIt />,
  app);
