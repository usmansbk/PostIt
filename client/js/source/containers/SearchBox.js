import React from 'react';
import SearchBox from '../components/dashboard/SearchBox';

export default class SearchBoxContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const users = [
			{
				username: 'usmansbk',
				userAvatar: '../../../../images/avatar.png'
			},			{
				username: 'usmansbk',
				userAvatar: '../../../../images/avatar.png'
			},
		];
		return (
			<SearchBox users={users} />
		);
	}
}