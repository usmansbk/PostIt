import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {auth, component: Component, ...rest} = this.props;
		if (auth) {
			return <Route {...rest} render={ props => <Component {...props} />}
			 />
		}
		return <Route {...rest} render={ props => <Redirect to='/' /> } />
	}
}