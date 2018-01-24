import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({path, auth, component: Component}) => (
	<Route
	path={path}
	render={(props) => (
		auth? (
			<Component {...props}/>
		) : (
			<Redirect to={
				{
					pathname: '/signin',
					state: { from: props.location }
				}
			}/>
		)
	)}
	/>
);

export default PrivateRoute;