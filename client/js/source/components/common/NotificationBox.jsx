import React from 'react';
import Icon from './Icon.jsx';
import NotificationItem from './NotificationItem.jsx';
import '../../../../stylesheets/sass/components/NotificationHeader.scss';

export default function NotificationBox(props) {

	let {notifications} = props;
	if (notifications) {
		notifications = notifications.map((notification, index) => {
			return <NotificationItem key={index} notification={notification} />;
		});
	}

	const notice = (
		<p className='grey-text text-lighten-1 center-align'>All caught up!</p>
	);
	const header = (
		<div id='header' className='row'>
			<div className='col s10'>
				<span className='black-text'>Notifications</span>
			</div>
			<div className='col s2'>
				{
					notifications?<a href='#'><Icon>clear_all</Icon></a>:''
				}
			</div>
		</div>
	);


  return (
    <div className='dropdown-content grey lighten-3' id={props.id}>
			{ header }
			{ notifications || notice }
    </div>
  );
}
