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
				userAvatar: '../../../../images/avatar.jpg',
				isMember: true
			},			{
				username: 'usmansbk',
				userAvatar: '../../../../images/avatar.jpg'
			},
		];
		const location = 'Group';

		const props = {
			users,
			location
		}
		return (
			<SearchBox {...props}  />
		);
	}
}