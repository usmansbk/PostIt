import React from 'react';
import Icon from './Icon.jsx';

const url = '../../../../images/default.jpg';

export default function NotificationItem(props) {
  const { notification } = props;
  console.log(notification);
  return (
    <div className='col s12 m8 offset-m2 16 offset-13'>
    <div className='card-panel grey lighten-3 z-depth-1'>
    <div className='row valign-wrapper'>
      <div className='col s2'>
        <img src={url} alt='' className='circle responsive-img' />
      </div>
      <div className='col s10'>
        <p className='black-text'>{notification.author.name}</p>
        <span>Group name</span>
        <span className='truncate grey-text text-darken-1'>{ notification.message }</span>
      </div>
    </div>
    </div>
    </div>
  );
}
