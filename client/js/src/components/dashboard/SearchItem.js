import React from 'react';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/SearchItem.scss'

export default ({userAvatar, username, isMember, location}) => {
	const style = {
		height: '24px',
		width: '24px',
	};

	const div = {
		paddingLeft: '0px',
		marginLeft: '0px',
		fontSize: '20px'
	};

	return (
		<div className='row card-panel' id='search-item' >
			<div className='col s2 center-align' style={div} >
				<img src={userAvatar} alt={username} className='circle' style={style} />
			</div>
			<div className='col s10' style={div}>
				<div className='row'>
					<div className='col s6 valign-wrapper' style={div}>
						<span className='grey-text text-darken-2'>{username}</span>
					</div>
					{
						(location === 'Group') &&
						<div className='col s6'>
							<Icon className='blue-text right'>{ isMember?'done' : 'person_add' }</Icon>
						</div>
					}
				</div>
			</div>
		</div>
	);
}