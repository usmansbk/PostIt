import React from 'react';
import Icon from './Icon.jsx';

const url = '../../../../images/default.jpg';

export default function NotificationItem(props) {
  const { notification } = props;
  const { message, duration } = notification;
  const style = {
    width: '48px',
    height: '48px',
  }
  return (
    <div className='row card' id='notification-item'>
      <div className='col s2 valign-wrapper'>
        <img src={url} alt='' className='circle' style={style} />
      </div>
      <div className='col s10 grey-text'>
        <div className='truncate black-text'>{message}</div>
        <div className='grey-text valign-wrapper'>
          <Icon className='tiny blue-text'>access_time</Icon>
          {duration} ago
        </div>
      </div>
    </div>
  );
}
