import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PostIt from './PostIt';

const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<PostIt />
		</BrowserRouter>
	</Provider>
)

export default Root;