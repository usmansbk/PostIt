import React from 'react';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/SearchItem.scss'

export default ({userAvatar, username, isMember}) => {
	const style = {
		height: '24px',
		width: '24px',
	};

	return (
		<div className='row card-panel' id='search-item' >
			<div className='col s2'>
				<img src={userAvatar} alt={username} className='circle' style={style} />
			</div>
			<div className='col s10'>
				<div className='row'>
					<div className='col s6 valign-wrapper'>
						<span className='grey-text text-darken-2'>{username}</span>
					</div>
					<div className='col s6'>
						<Icon className='blue-text right'>person_add</Icon>
					</div>
				</div>
			</div>
		</div>
	);
}