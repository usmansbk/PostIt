import React from 'react';
import Icon from './Icon.jsx';
import '../../../../stylesheets/sass/components/NotificationHeader.scss';

export default function NotificationHeader(props) {
  return (
    <div className='row valign-wrapper' id='header'>
      <div className='col s10 valign-wrapper'>
        <h6>Notifications</h6>
      </div>
      <div className='col s2'>
        <Icon>notifications</Icon>
      </div>
    </div>
  );
}
