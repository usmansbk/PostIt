import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PostIt from './components/PostIt';
import postItApp from './redux/reducers';

const store = createStore(postItApp);

ReactDOM.render(
  <PostIt greeting='Hello' />,
  document.getElementById('app')
);
