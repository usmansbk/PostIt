import React from 'react';
import Dashboard from '../dashboard/Dashboard'
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false
		}
	}

	componentWillReceiveProps(nextProps) {
		const { auth, match} = nextProps;
		this.setState({
			isAuthenticated: auth
		})
	}

	render() {
		const {component: Component, ...rest} = this.props;
		return (
			<Route {...rest} render={props => (
				this.state.isAuthenticated ? (
					<Component {...props}/>
				) : (
					<Redirect to={{
						pathname: '/signin',
						state: { from: props.location}
					}}/>
				)
			)}/>
		)
	}
}