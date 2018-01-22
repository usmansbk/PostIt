import React from 'react';
import UserInfo from './UserInfo';

export default ({members}) => {
	let membersComponent;
	let header = <h5 className='grey-text'>Members</h5>;
	if (members) {
		console.log('Members component', members);
		membersComponent = members.map((member, index) => <UserInfo key={index} {...member} />);
	}

	return (
		<div id='members' className='modal'>
			<div className='modal-content'>
				{header}
				{ membersComponent }
			</div>
		</div>
	);
} 