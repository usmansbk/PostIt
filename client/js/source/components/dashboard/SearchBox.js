import React from 'react';
import UserInfo from '../board/UserInfo';
import '../../../../stylesheets/sass/components/Searchbox.scss';

export default ({users}) => {
	let userComponents;

	if (users) {
		userComponents = users.map((user, index) => <UserInfo key={index} {...user} />);
	}
	return (
		<div className='search card-panel' id='search-result'>
			{ userComponents }
		</div>);
}