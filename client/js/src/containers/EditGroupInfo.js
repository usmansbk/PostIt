import React from 'react';
import EditGroupInfo from '../components/board/EditGroupInfo';

export default class EditGroupInfoContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const props = {
			groupName: 'Test Group',
			groupImage: '../../../../images/group.png',
			groupDiscription: 'Im a test group'
		};

		return <EditGroupInfo {...props}/>
	}
}