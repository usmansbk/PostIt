import React from 'react';
import Icon from '../common/Icon';

export default function NotificationItem({ message, duration, groupName, groupImage}) {
  const style = {
    width: '48px',
    height: '48px',
  }
  return (
    <div className='row card' id='notification-item'>
      <div className='col s2 valign-wrapper'>
        <img src={groupImage} alt='' className='circle' style={style} />
      </div>
      <div className='col s10 grey-text'>
        <div id='info'>
          <div className='valign-wrapper black-text'>
            <Icon className='blue-text'>group</Icon>
            <span id='name'> {groupName}</span>
          </div>
          <div className='truncate black-text'>{message}</div>
          <div className='grey-text text-darken-1 valign-wrapper'>
            <Icon className='blue-text'>access_time</Icon>
            <span>{duration} ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}