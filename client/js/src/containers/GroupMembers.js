import React from 'react';
import GroupMembers from '../components/board/GroupMembers';

export default class GroupMembersContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const members = [
			{
				userAvatar: '../../../../images/usman.jpg',
				username: 'usmansbk',
				email: 'usmansbk@gmail.com'
			},
			{
				userAvatar: '../../../../images/usman.jpg',
				username: 'usmansbk',
				email: 'usmansbk@gmail.com'
			},
			{
				userAvatar: '../../../../images/usman.jpg',
				username: 'usmansbk',
				email: 'usmansbk@gmail.com'
			},
			{
				userAvatar: '../../../../images/usman.jpg',
				username: 'usmansbk',
				email: 'usmansbk@gmail.com'
			},
			{
				userAvatar: '../../../../images/usman.jpg',
				username: 'usmansbk',
				email: 'usmansbk@gmail.com'
			},
			{
				userAvatar: '../../../../images/usman.jpg',
				username: 'usmansbk',
				email: 'usmansbk@gmail.com'
			},
			{
				userAvatar: '../../../../images/usman.jpg',
				username: 'usmansbk',
				email: 'usmansbk@gmail.com'
			},
		];
		return <GroupMembers members={members} />;
	}
}