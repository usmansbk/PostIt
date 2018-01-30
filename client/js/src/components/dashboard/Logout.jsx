import React from 'react';

export default class Logout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logged_in: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { session, history } = nextProps;
		this.setState({
			logged_in: session
		})
	}

	handleClick(event) {
		const { history } = this.props;
		this.props.handleLogout(history);
	}

	render() {
		return (
			<span onClick={this.handleClick}>Log out</span>
		)
	}
}