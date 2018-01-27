import React from 'react';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/SearchItem.scss'

export default ({ username, isMember, page}) => {
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
			<div className='col s12' style={div}>
				<div className='row'>
					<div className='col s6 valign-wrapper' style={div}>
						<Icon>account_box</Icon>
						<span className='grey-text text-darken-2'>{username}</span>
					</div>
					{
						(page === 'Group') &&
						<div className='col s6'>
							<Icon className='blue-text right'>{ isMember?'done' : 'person_add' }</Icon>
						</div>
					}
				</div>
			</div>
		</div>
	);
}