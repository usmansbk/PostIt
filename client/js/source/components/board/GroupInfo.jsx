import React from 'react';
import Icon from '../common/Icon.jsx';
import UserInfo from '../common/UserInfo.jsx';

const img = '../../../../images/default.jpg';

export default function GroupInfo(props) {
	const creator = {img, username: 'usman', email: 'usbk@gmail.com'};
	return (
		<div className='row'>
			<div className='col s12'>
				<div className='card medium' >
					<div className='card-image'>
						<img src={img} />
					</div>
					<div className='card-content'>
						<span className='card-title activator grey-text text-darken-4'>Group Name
							<Icon className='right'>more_vert</Icon>
						</span>
						<UserInfo account={creator} />
						<p><a href='#' className='grey-text text-darken-1'>15 members</a></p>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>
							Purpose<Icon className='right'>close</Icon>
						</span>
						<p>The purpose of the group</p>
					</div>
				</div>
			</div>
		</div>
  );
}
