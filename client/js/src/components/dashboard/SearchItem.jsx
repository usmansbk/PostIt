import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/SearchItem.scss'

export default ({ username, isMember, page, canAdmin, id}) => {
	return (
		<div className='row card-panel' id='search-item' >
			<div className='col s12'>
				<div className='row'>
					<div className='col s6 valign-wrapper'>
						<Icon className='grey-text text-darken-2'>account_box</Icon>
						<span className='grey-text text-darken-2'>{username}</span>
					</div>
					{
						(page === 'Group' && canAdmin) &&
						<div className='col s6'>
							<span title={!isMember ? 'Add user to this group' : 'Remove user from this group' }>
							<NavLink to={`/dashboard/group/${id}/user`}><Icon className='blue-text right'>{ isMember?'done' : 'person_add' }</Icon></NavLink>
							</span>
						</div>
					}
				</div>
			</div>
		</div>
	);
}