import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignPage from './sign/SignPage';
import PostIt from './PostIt';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route path='/' component={PostIt} />
		</Router>
	</Provider>
)

export default Root;