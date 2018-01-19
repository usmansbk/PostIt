import React from 'react';
import Icon from '../common/Icon';
import NotificationItem from './NotificationItem';
import '../../../../stylesheets/sass/components/NotificationHeader.scss';

export default function NotificationBox({notifications, id}) {
  let notificationsComponent;
  if (notifications) {
    notificationsComponent = notifications.map((notification, index) => <NotificationItem key={index} {...notification} />);
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
    <div className='dropdown-content grey lighten-3' id='notification'>
      { header }
      { notificationsComponent || notice }
    </div>
  );
}
